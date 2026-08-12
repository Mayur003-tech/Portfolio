"use client";
import Link from "next/link";
import { useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/project", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-4 pt-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-5 rounded-2xl border border-white/10 bg-[#060a14]/70 backdrop-blur-xl shadow-lg shadow-black/20">
          <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setMenuOpen(false)}>
            <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#4682B4] via-[#8b6fef] to-[#ec6fa8] flex items-center justify-center font-extrabold text-white">
              M
            </span>
            <span className="hidden sm:inline font-bold text-white tracking-tight">
              Mayur Gotmare
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/mayurtech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-white transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Mayur003-tech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 hover:text-white transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <button
              className="md:hidden text-gray-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-80 mt-2" : "max-h-0"
          }`}
        >
          <div className="max-w-6xl mx-auto flex flex-col gap-1 p-3 rounded-2xl border border-white/10 bg-[#060a14]/90 backdrop-blur-xl">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-semibold text-gray-200 hover:bg-white/5 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
