import type { Metadata } from "next";
import { ExternalLink, Github, Stethoscope, HandMetal, ListChecks } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects built by Mayur Gotmare — AI integration, computer vision and test automation.",
};

const projects = [
  {
    title: "DivulgeAI — Dental Radiograph Analysis Platform",
    icon: Stethoscope,
    image: "/public/png/Divulge-Img.png",
    date: "Jan 2026 – Jul 2026 • Freelance Project",
    stack: ["Electron.js", "React", "ONNX Runtime Web", "OpenCV.js", "UNet", "ResNet50", "pdf-lib"],
    desc: "A fully offline AI desktop application for dental professionals that automatically analyses X-rays, detects dental conditions via a custom UNet+ResNet50 deep learning model, and generates structured clinical PDF reports — running entirely locally with no internet or server required.",
    live: undefined,
    repo: "https://github.com/divulgeai054-dev/DivulgeAISoftwareApplication",
  },
  {
    title: "TORA — Touchless Operating Room Assistant",
    icon: HandMetal,
    date: "Self-Initiated",
    stack: ["Python", "OpenCV", "Scikit-learn", "Random Forest", "Computer Vision"],
    desc: "AI-powered gesture recognition system using a Random Forest classifier for real-time hand gesture recognition, mapping gestures to touchless medical interface control actions. Achieved 85–95% gesture recognition accuracy and won 1st place in the Project Exhibition-Cum-Competition.",
    live: undefined,
    repo: "https://github.com/Mayur003-tech/TORA",
  },
  {
    title: "IdentifyCourses — Coursera Test Automation Framework",
    icon: ListChecks,
    date: "Self-Initiated",
    stack: ["Java", "Selenium", "Cucumber", "TestNG", "Maven", "Apache POI"],
    desc: "A BDD-driven Selenium automation framework (Page Object Model) validating course search/filtering, filter-data extraction, and enterprise form flows, with parallel TestNG execution, Excel export, and ExtentReports/Cucumber reporting.",
    live: undefined,
    repo: "https://github.com/Mayur003-tech/QEA_Automation",
  },
  {
    title: "GymFlow — Gym Membership Automation System",
    icon: ListChecks,
    date: "Nov 2026",
    stack: ["n8n", "Docker", "JavaScript" , "Google Sheets API", "Telegram Bot API"],
    desc: "GymFlow is a zero-budget, end-to-end gym membership management and administrative automation system built with self-hosted n8n, Google Sheets, and Telegram (architected with a decoupled notification layer ready for WhatsApp Business Cloud API)",
    live: undefined,
    repo: "https://github.com/Mayur003-tech/GymFlow",
  },
  {
    title: "RAG-Powered AIOps Log Anomaly Detector",
    icon: ListChecks,
    date: "Nov 2026",
    stack: [" Python 3.10+", " Hugging Face 'all-MiniLM-L6-v2'", "ChromaDB " , "Google Gemini 2.5 Flash", " Streamlit"],
    desc: "An end-to-end Retrieval-Augmented Generation (RAG) system that detects anomalies in server and application logs, retrieves matching engineering runbooks from a vector database, and generates grounded root-cause analyses and remediation steps",
    live: undefined,
    repo: "https://github.com/Mayur003-tech/Anomaly_Detector_RAG",
  },

];

export default function Project() {
  return (
    <section className="py-24 bg-[var(--bg)] bg-grid">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="card rounded-2xl overflow-hidden hover:-translate-y-1 transition duration-300 flex flex-col">
                <div className="h-32 flex items-center justify-center bg-gradient-to-br from-[var(--accent-blue)]/20 via-[var(--accent-purple)]/20 to-[var(--accent-pink)]/20 border-b border-white/10">
                  <Icon className="w-10 h-10 text-white/90" />
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-1">{p.title}</h2>
                    <p className="text-sm text-[var(--text-muted)] mb-3">{p.date}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.stack.map((s) => (
                        <span key={s} className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="flex gap-3 mt-auto pt-2">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-light)] hover:text-[#0c1322] transition font-semibold text-white text-sm"
                      >
                        Live <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/15 text-gray-200 hover:bg-white/10 transition font-semibold text-sm"
                    >
                      Code <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
