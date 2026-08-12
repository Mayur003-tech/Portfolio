"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const education = [
  {
    title: "Graduation",
    place: "GH Raisoni College of Engineering, Nagpur",
    meta: "B.Tech in Computer Science Engineering (AI/ML) • 2022 – 2026",
  },
  {
    title: "HSC",
    place: "Bhartiya Krishi Vidyalaya, Nagpur",
    meta: "2020 – 2021",
  },
  {
    title: "SSC",
    place: "Jawahar High School, Nagpur",
    meta: "2018 – 2019",
  },
];

export default function About() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const eduRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out" });
      gsap.fromTo(textRef.current, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.2 });
      gsap.fromTo(imgRef.current, { autoAlpha: 0, y: 40, scale: 0.95 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out", delay: 0.4 });
      gsap.fromTo(
        eduRefs.current,
        { autoAlpha: 0, y: 60 },
        { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.18, ease: "power2.out", delay: 0.6 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 bg-[var(--bg)] bg-grid">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h1 ref={headingRef} className="text-4xl md:text-5xl font-extrabold text-center text-white mb-14">
          About Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div ref={textRef} className="space-y-6 order-2 md:order-1">
            <p className="text-lg text-[var(--text-secondary)]">
              Hello! I&rsquo;m <span className="text-white font-bold">Mayur Gotmare</span>, a
              computer science graduate skilled in{" "}
              <span className="text-white font-medium">React.js and Next.js</span>, building
              responsive and scalable web applications.
            </p>
            <p className="text-lg text-[var(--text-secondary)]">
              I&rsquo;m actively developing backend and AI-integration skills to move
              toward full-stack development, with hands-on internship
              experience across web development and health-tech — most
              recently building an offline AI desktop app for dental
              diagnostics.
            </p>
            <p className="text-lg text-[var(--text-secondary)]">
              Outside of coding, I contribute to open-source projects, lead
              technical events as Chairperson of IEEE-CIS GHRCE, and keep
              exploring new tools and frameworks.
            </p>
          </div>

          <div ref={imgRef} className="flex justify-center order-1 md:order-2">
            <div className="card rounded-2xl p-3">
              <Image
                src="/png/mayur_Img.jpg"
                alt="Mayur Gotmare"
                width={260}
                height={340}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="max-w-4xl mx-auto px-4 mt-28">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-16">
          Education
        </h2>

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-3 md:left-4 top-0 h-full w-px bg-white/10" />

          <div className="flex flex-col gap-10">
            {education.map((edu, i) => (
              <div
                key={edu.title}
                ref={(el) => { eduRefs.current[i] = el!; }}
                className="relative"
              >
                <span className="absolute -left-8 md:-left-10 top-2 h-3 w-3 rounded-full bg-[var(--accent-blue-light)] ring-4 ring-[var(--accent-blue)]/20" />
                <div className="card rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-1">{edu.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-1">{edu.place}</p>
                  <p className="text-sm text-[var(--text-muted)]">{edu.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
