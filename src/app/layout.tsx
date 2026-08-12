import type { Metadata } from "next";
import { Manrope, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navBar";
import Footer from "./components/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const siteUrl = "https://mayurgotmare.dev"; // TODO: replace with your real Vercel/custom domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mayur Gotmare | Software Developer — Frontend & AI Integration",
    template: "%s | Mayur Gotmare",
  },
  description:
    "Portfolio of Mayur Gotmare — a software developer specializing in React, Next.js and AI integration, building responsive web apps and AI-powered desktop tools.",
  keywords: [
    "Mayur Gotmare",
    "Software Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "AI Integration Engineer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Mayur Gotmare" }],
  openGraph: {
    title: "Mayur Gotmare | Software Developer — Frontend & AI Integration",
    description:
      "React, Next.js and AI-integration developer building responsive web apps and AI-powered desktop tools.",
    url: siteUrl,
    siteName: "Mayur Gotmare Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayur Gotmare | Software Developer",
    description:
      "React, Next.js and AI-integration developer building responsive web apps and AI-powered desktop tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${workSans.variable} antialiased bg-[var(--bg)]`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
