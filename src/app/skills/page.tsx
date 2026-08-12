"use client";
import { useEffect, useRef } from "react";
import { Code, Server, Terminal, Cpu, GitBranch, Boxes, Award } from "lucide-react";
import gsap from "gsap";

const skillGroups = [
  {
    icon: Code,
    title: "Frontend",
    items: ["HTML/CSS", "Tailwind CSS", "Material UI", "JavaScript", "React.js", "Next.js"],
    accent: "var(--accent-pink)",
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "MySQL", "REST APIs"],
    accent: "var(--accent-blue-light)",
  },
  {
    icon: Terminal,
    title: "Languages",
    items: ["C", "Core Java", "OOPs", "Python (Machine Learning)"],
    accent: "var(--accent-purple)",
  },
  {
    icon: Cpu,
    title: "AI / Desktop Tools",
    items: ["Electron.js", "ONNX Runtime Web", "OpenCV.js", "pdf-lib", "UNet", "ResNet50", "Computer Vision"],
    accent: "var(--accent-pink)",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    items: ["Git", "GitHub"],
    accent: "var(--accent-blue-light)",
  },
  {
    icon: Boxes,
    title: "DevOps",
    items: ["Jenkins", "Docker"],
    accent: "var(--accent-purple)",
  },
];

const certifications = [
  "GPT Models (Infosys)",
  "TCS iON Career Edge — Young Professional",
  "MySQL Training (EduPyramids)",
  "Primer Certification (Infosys)",
  "Agentic AI Certified Foundations Associate (Oracle)",
];

export default function Skills() {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(h1Ref.current, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out" });
      gsap.fromTo(pRef.current, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.2 });
      gsap.fromTo(
        cardsRef.current,
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out", delay: 0.4 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 min-h-screen bg-[var(--bg)] bg-grid">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 ref={h1Ref} className="text-4xl md:text-5xl font-extrabold mb-4 text-gradient">
          Skills &amp; Certifications
        </h1>
        <p ref={pRef} className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-14 text-lg">
          Frontend-focused, with growing backend and AI-integration experience
          across web and desktop applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                ref={(el) => { cardsRef.current[idx] = el!; }}
                className="card group rounded-2xl p-6 text-left hover:-translate-y-1 transition duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-5 h-5 group-hover:scale-110 transition" style={{ color: group.accent }} />
                  <h3 className="text-lg font-bold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 card rounded-2xl p-6 text-left max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-5 h-5 text-[var(--accent-blue-light)]" />
            <h3 className="text-lg font-bold text-white">Certifications</h3>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[var(--text-secondary)]">
            {certifications.map((cert) => (
              <li key={cert} className="flex gap-2">
                <span className="text-[var(--accent-purple)]">•</span>
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
