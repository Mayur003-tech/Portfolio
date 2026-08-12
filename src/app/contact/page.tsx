"use client";
import { useState } from "react";
import { Github, Linkedin, Mail, Phone, Loader2, CheckCircle2, XCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.target as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value, // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (res.ok && result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  }

  return (
    <section className="py-24 bg-[var(--bg)] bg-grid">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* Form */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Let&rsquo;s Connect
          </h1>
          <p className="text-[var(--text-secondary)] mb-8 max-w-md">
            Have a project, an opportunity, or just want to say hi? Fill in the
            form and it&rsquo;ll land straight in my inbox.
          </p>

          <form onSubmit={handleSubmit} className="card rounded-2xl p-8 flex flex-col gap-6">
            {/* Honeypot field — hidden from real users, catches bots */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold text-gray-200 text-sm">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] transition"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold text-gray-200 text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="email@example.com"
                className="p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] transition"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-semibold text-gray-200 text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me a bit about your project or idea..."
                className="p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 py-3 px-6 rounded-xl bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-purple)] text-white font-bold transition hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] shadow-lg flex items-center justify-center gap-2"
            >
              {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-emerald-400 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                Thanks! Your message has been sent — I&rsquo;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-rose-400 text-sm">
                <XCircle className="w-4 h-4" />
                {errorMsg}
              </p>
            )}
          </form>
        </div>

        {/* Contact info panel (replaces static illustration) */}
        <div className="card rounded-2xl p-8 md:mt-24">
          <h2 className="text-xl font-bold text-white mb-6">Other ways to reach me</h2>
          <div className="flex flex-col gap-5">
            <a
              href="mailto:mayurgotmare2003@gmail.com"
              className="flex items-center gap-3 text-gray-200 hover:text-white transition"
            >
              <span className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </span>
              mayurgotmare2003@gmail.com
            </a>
            <a
              href="tel:+917507620371"
              className="flex items-center gap-3 text-gray-200 hover:text-white transition"
            >
              <span className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </span>
              +91 75076 20371
            </a>
            <a
              href="https://www.linkedin.com/in/mayurtech/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-200 hover:text-white transition"
            >
              <span className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </span>
              linkedin.com/in/mayurtech
            </a>
            <a
              href="https://github.com/Mayur003-tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-200 hover:text-white transition"
            >
              <span className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center">
                <Github className="w-5 h-5" />
              </span>
              github.com/Mayur003-tech
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-sm text-[var(--text-muted)]">
            Friends Colony, Nagpur, Maharashtra — usually replying within a day or two.
          </div>
        </div>
      </div>
    </section>
  );
}
