import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience of Mayur Gotmare — Software Developer, Frontend & AI Integration.",
};

const experience = [
  {
    role: "Full-Stack Developer & AI Integration Engineer",
    org: "DivulgeAI — AI-Powered Dental Diagnostic Desktop App (Advance Dental Hospital) · Remote",
    period: "Dec 2025 – Jun 2026",
    points: [
      "Built a cross-platform Electron.js + React desktop app integrating a custom UNet+ResNet50 ONNX model for AI-assisted dental radiograph analysis, running fully in-browser via ONNX Runtime Web (WASM).",
      "Developed the full image-processing pipeline, patient management system, and automated clinical PDF reporting, packaged as a self-contained offline installer.",
    ],
  },
  {
    role: "Quality Engineering & Assurance (QEA) Trainee Intern",
    org: "Cognizant",
    period: "30 Jan 2026 – 15 May 2026",
    points: [
      "Underwent structured training in Quality Engineering & Assurance, covering software testing methodologies, test case design, and QA best practices.",
      "Gained hands-on exposure to CI/CD and DevOps tools including Jenkins, GitHub, and Docker as part of automated testing and deployment workflows.",
    ],
  },
  {
    role: "Web Developer Intern",
    org: "InternPro",
    period: "16 May 2025 – 02 Sep 2025",
    points: [
      "Developed a full-stack app with Next.js, including API routes, forms, and authentication.",
      "Built responsive UI with Tailwind CSS, MUI, and GSAP animations.",
      "Collaborated in an agile team using Git, contributing to discussions and code reviews.",
    ],
  },
  {
    role: "Chairperson, IEEE-CIS GHRCE",
    org: "GH Raisoni College of Engineering, Nagpur",
    period: "Oct 2024 – Present",
    points: [
      "Leading the IEEE Computational Intelligence Society chapter, overseeing the planning and execution of AI/ML-focused events and workshops.",
      "Managing a team of volunteers and driving the chapter's technical growth and outreach.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-24 bg-[var(--bg)] bg-grid">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16">
          Experience
        </h1>

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-3 md:left-4 top-0 h-full w-px bg-white/10" />

          <div className="flex flex-col gap-10">
            {experience.map((exp) => (
              <div key={exp.role} className="relative">
                <span className="absolute -left-8 md:-left-10 top-2 h-3 w-3 rounded-full bg-[var(--accent-purple)] ring-4 ring-[var(--accent-purple)]/20" />
                <div className="card rounded-2xl p-6 hover:-translate-y-0.5 transition duration-300">
                  <h2 className="text-xl font-bold text-white mb-1">{exp.role}</h2>
                  <p className="text-sm text-[var(--accent-blue-light)] mb-3">
                    {exp.org} • {exp.period}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((pt) => (
                      <li key={pt} className="text-[var(--text-secondary)] leading-relaxed flex gap-2">
                        <span className="text-[var(--accent-purple)] mt-1.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
