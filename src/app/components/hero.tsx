"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight, Download } from "lucide-react";

const NAME = "Mayur Gotmare";

export default function Hero() {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(heroSectionRef.current, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.7 })
        .fromTo(".hero-badge", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.4")
        .fromTo(nameRef.current, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.2")
        .fromTo(".hero-h2", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.3")
        .fromTo(".hero-p", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.35")
        .fromTo(".hero-btn", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.15 }, "-=0.35")
        .fromTo(".hero-panel", { autoAlpha: 0, scale: 0.95 }, { autoAlpha: 1, scale: 1, duration: 0.8 }, "-=0.6");
    }, heroSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroSectionRef}
      className="relative pt-36 md:pt-48 pb-20 bg-[var(--bg)] bg-grid overflow-hidden"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[40rem] rounded-full bg-[var(--accent-purple)]/20 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-14">
        {/* Left Content */}
        <div className="flex flex-col items-start justify-center space-y-6">
          <span className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[var(--accent-blue-light)] border border-[var(--accent-blue)]/40 bg-[var(--accent-blue)]/10">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to full-stack &amp; AI-integration roles
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Hi, I&rsquo;m{" "}
            <span ref={nameRef} className="text-gradient inline-block">
              {NAME}
            </span>
          </h1>

          <h2 className="hero-h2 text-xl md:text-2xl font-semibold text-gray-200">
            Software Developer — Frontend &amp; AI Integration.
          </h2>

          <p className="hero-p text-base md:text-lg leading-relaxed max-w-xl text-[var(--text-secondary)]">
            Computer science graduate skilled in React.js and Next.js,
            building responsive, scalable web apps. Actively developing
            backend and AI-integration skills — recently shipped an offline
            AI desktop app for dental diagnostics.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/project"
              className="hero-btn group inline-flex items-center gap-2 bg-white text-[#0c1322] font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-200 transition"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="hero-btn inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition"
            >
              Contact Me
            </Link>
            <a
              href="/MAYUR ARUN GOTMARE(pdf).pdf"
              className="hero-btn inline-flex items-center gap-2 text-gray-300 px-6 py-3 rounded-xl hover:text-white transition"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>

        {/* Right Content - code panel mockup instead of static illustration */}
        <div className="hero-panel flex justify-center md:justify-end">
          <div className="card w-full max-w-md rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 text-xs text-gray-400">portfolio.tsx</span>
            </div>
            <pre className="p-5 text-xs md:text-sm leading-relaxed overflow-x-auto text-gray-300">
<code>{`const developer = {
  name: "Mayur Gotmare",
  role: "Software Developer",
  focus: "Frontend & AI Integration",
  stack: ["React", "Next.js", "Node.js", "Python"],
  aiTools: ["ONNX Runtime", "OpenCV", "UNet + ResNet50"],
  status: "Building AI-powered products",
};

export default developer;`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
