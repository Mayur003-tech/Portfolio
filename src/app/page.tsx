import Hero from "./components/hero";
import Link from "next/link";
import { Code2, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean, typed code",
    desc: "React, Next.js and Node.js with an eye for maintainable, scalable architecture.",
  },
  {
    icon: Rocket,
    title: "Ships AI-powered products",
    desc: "Recently built an offline AI desktop app integrating a custom UNet+ResNet50 model for dental diagnostics.",
  },
  {
    icon: Users,
    title: "Team-oriented",
    desc: "Leads IEEE-CIS GHRCE and collaborates well across design, product and engineering.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="py-20 bg-[var(--bg-elevated)] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card rounded-2xl p-6">
                <Icon className="w-6 h-6 text-[var(--accent-blue-light)] mb-4" />
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-r from-[var(--accent-blue)]/15 via-[var(--accent-purple)]/15 to-[var(--accent-pink)]/15 p-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Have a project in mind?
              </h3>
              <p className="text-[var(--text-secondary)] mt-1">
                I&rsquo;m open to internships, freelance work and collaborations.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-[#0c1322] font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition"
            >
              Let&rsquo;s talk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
