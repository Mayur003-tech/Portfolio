import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Basic in-memory rate limiter (per server instance) to reduce spam.
// Good enough for a low-traffic portfolio; swap for Upstash/Redis if needed.
const submissions = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 3;

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (submissions.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  submissions.set(ip, timestamps);
  return timestamps.length > MAX_REQUESTS_PER_WINDOW;
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const { name, email, message, company } = await req.json();

    // Honeypot: bots tend to fill hidden fields. If "company" is filled, silently succeed.
    if (company) {
      return NextResponse.json({ success: true });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { success: false, message: "Please fill in all fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (name.length > 100 || email.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { success: false, message: "Input too long." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !toEmail) {
      console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL env vars.");
      return NextResponse.json(
        { success: false, message: "Contact form is not configured yet." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      // Must be a domain verified in your Resend account, or Resend's onboarding sandbox address.
      from: process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New message from your portfolio</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to send message. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
