import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[var(--bg-elevated)] text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-white">Mayur Gotmare</p>
          <p className="text-sm">Frontend Developer &amp; AI/ML Enthusiast</p>
        </div>

        <div className="flex gap-6 text-sm">
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/project" className="hover:text-white transition">Projects</Link>
          <Link href="/skills" className="hover:text-white transition">Skills</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com/Mayur003-tech/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/mayurtech/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:mayurgotmare2003@gmail.com" aria-label="Email" className="hover:text-white transition">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      <p className="text-center text-xs text-gray-600 pb-6">
        © {year} Mayur Gotmare. Built with Next.js &amp; Tailwind CSS.
      </p>
    </footer>
  );
}
