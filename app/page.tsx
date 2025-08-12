"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <About />
      {/* <Contact /> */}
    </div>
  );
}

function Section({
  id,
  children,
  title,
}: {
  id: string;
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section id={id} className="py-20 sm:py-28">
      <div className="container-page">
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  );
}

function Hero() {
  return (
    <header className="container-page pt-24 sm:pt-32 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        <div>
          {/* <motion.h1
            className="tracking-widest text-muted-foreground"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Hi 👋
          </motion.h1> */}
          <motion.h1
            className="text-4xl sm:text-6xl font-semibold leading-[1.1] mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi 👋
            <br />
            I’m Huy Tran
            <br />
            <span className="text-accent">Software Engineer</span>
          </motion.h1>
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span>Ho Chi Minh City, Viet Nam, 700000</span>
            <span className="hidden sm:inline">·</span>
            <a
              className="inline-flex items-center gap-1 hover:text-foreground"
              href="tel:+84938577360"
            >
              <Phone size={16} /> (+84) 938-577360
            </a>
            <span className="hidden sm:inline">·</span>
            <a
              className="inline-flex items-center gap-1 hover:text-foreground"
              href="mailto:tranquochuy4698@gmail.com"
            >
              <Mail size={16} /> tranquochuy4698@gmail.com
            </a>
          </motion.div>
          <motion.div
            className="mt-8 flex items-center gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a className="btn btn-primary" href="#projects">
              View Projects <ArrowRight className="ml-2" size={16} />
            </a>
            {/* <a className="btn btn-ghost" href="#contact">
              Contact
            </a> */}
            <a className="btn btn-ghost" href="/resume" target="_blank">
              Resume
            </a>
            <a
              className="btn btn-ghost"
              href="https://linkedin.com/in/tranquochuy98"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} />
            </a>
            <a
              className="btn btn-ghost"
              href="https://github.com/huytran46"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
            </a>
          </motion.div>
        </div>
        <motion.div
          className="relative aspect-square max-w-[220px] sm:max-w-[260px] md:max-w-none md:w-[320px] justify-self-center md:justify-self-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
        >
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative rounded-full ring-1 ring-border overflow-hidden">
            <Image src="/avatar.png" alt="Huy Tran" width={320} height={320} />
          </div>
        </motion.div>
      </div>
    </header>
  );
}

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-6">
        {[
          {
            title: "Endash — Frontend for BI SaaS",
            meta: "TypeScript · Next.js · React 18 · TanStack Query · Zustand",
            points: [
              "Architected and delivered a high-performance frontend serving 500+ MAU across 80+ businesses.",
              "Optimized data dashboards with virtualization and lazy loading.",
              "Refactored drag-and-drop grid using transforms to minimize reflows.",
              "Built scalable design system with composition pattern.",
            ],
          },
          {
            title: "Ubong — Offline-first mobile app for trekkers",
            meta: "Expo SDK 53 · React 19 · React Native 0.79 · TanStack Query · Jotai",
            points: [
              "Engineered offline-first features (geo-fencing, custom caching).",
              "Established secure auth flows and a reusable UI library.",
              "Introduced API schema codegen to speed integration.",
            ],
          },
          {
            title: "GarrioPRO — Healthcare SaaS",
            meta: "TypeScript · Next.js · Valtio",
            points: [
              "Led development of a reusable text snippet module for clinic SaaS.",
              "Implemented shared API & UI component with >90% logic reuse.",
              "Delivered features with Lexical editor under limited docs.",
            ],
          },
        ].map((job, idx) => (
          <motion.article
            key={job.title}
            className="rounded-2xl border p-6 bg-background/60 backdrop-blur-sm"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
          >
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{job.meta}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {job.points.map((p) => (
                <li key={p} className="pl-4 relative">
                  <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Endash", "Ubong", "GarrioPRO"].map((name, idx) => (
          <motion.a
            key={name}
            href="#"
            className="group relative overflow-hidden rounded-2xl border bg-muted"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
          >
            <div className="aspect-[4/3]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
            <div className="absolute bottom-0 p-5 w-full flex items-center justify-between">
              <h3 className="font-medium">{name}</h3>
              <ArrowRight className="size-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Framer Motion",
    "Zustand",
    "TanStack Query",
    "Expo/React Native",
  ];
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="px-3 py-1 rounded-full border bg-background text-sm"
          >
            {s}
          </span>
        ))}
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" title="About">
      <p className="text-muted-foreground max-w-2xl">
        I craft performant, maintainable interfaces with React/Next.js. I care
        about clean design systems, accessibility, and delightful
        micro-interactions.
      </p>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Contact">
      <form className="grid gap-3 max-w-xl">
        <input
          className="border rounded-lg px-4 py-2 bg-background"
          placeholder="Your name"
        />
        <input
          className="border rounded-lg px-4 py-2 bg-background"
          placeholder="Email"
          type="email"
        />
        <textarea
          className="border rounded-lg px-4 py-2 bg-background"
          placeholder="Message"
          rows={4}
        />
        <button className="btn btn-primary w-fit" type="button">
          Send
        </button>
        {/* TODO: Wire server action or service (Resend/Formspree) */}
      </form>
    </Section>
  );
}
