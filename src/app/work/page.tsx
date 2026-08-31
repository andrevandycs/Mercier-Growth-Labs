"use client";

import Background from "../../components/Background";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MotionSection from "../../components/MotionSection";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  LayoutTemplate,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    type: "Agency Website",
    title: "Mercier Growth Labs",
    description:
      "The digital home for Mercier Growth Labs—designed to communicate the agency's positioning, showcase its capabilities, and turn prospective clients into conversations.",
    tags: ["Strategy", "UI/UX Design", "Next.js", "Responsive Design"],
    href: "/",
    image: "/images/projects/mercier-growth-labs/card.png",
    external: false,
    featured: true,
    eyebrow: "Built for my own agency",
    result:
      "A complete agency website built around positioning, trust, and conversion.",
  },
  {
    type: "Concept Redesign",
    title: "Anderson Roofing & Restoration",
    description:
      "A modern concept redesign for a Spring, Texas roofing company, reworking an existing web presence into a clearer, more focused experience built around inspections, storm damage, roofing services, and homeowner trust.",
    tags: [
      "UX Redesign",
      "Conversion Strategy",
      "Next.js",
      "Responsive Design",
    ],
    href: "https://anderson-roofing-demo.vercel.app",
    image: "/images/projects/anderson-roofing/card.png",
    external: true,
    featured: false,
    eyebrow: "Concept redesign",
    result:
      "A clearer path from storm concern or roofing need to a free inspection request.",
  },
];

const capabilities = [
  {
    icon: LayoutTemplate,
    title: "Strategy & UX",
    text: "Page structure, messaging, user flows, and calls-to-action designed around what visitors need to know before they take the next step.",
  },
  {
    icon: Sparkles,
    title: "Visual Design",
    text: "Modern interfaces with strong hierarchy, intentional spacing, responsive layouts, and visual systems that make businesses feel credible.",
  },
  {
    icon: Code2,
    title: "Development",
    text: "Fast, responsive websites built with modern frontend technologies and reusable components that are ready to grow with the business.",
  },
];

export default function WorkPage() {
  return (
    <>
      <Background />

      <Navbar />

      <main className="relative mx-auto flex max-w-7xl flex-col gap-24 px-6 pb-24 pt-28 text-white">
        {/* Hero */}
        <MotionSection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-4xl"
        >
          <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
            Selected Work
          </p>

          <h1 className="mt-6 text-5xl font-black leading-[1.05] md:text-7xl">
            Websites built to make businesses look{" "}
            <span className="text-blue-400">as good as they are.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400 md:text-xl">
            A selection of websites and concept projects from Mercier Growth
            Labs. Each project combines strategy, design, and development to
            create a clearer path from first impression to action.
          </p>
        </MotionSection>

        {/* Projects */}
        <MotionSection
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`group flex h-full flex-col overflow-hidden rounded-4xl border border-white/10 bg-white/3 transition duration-500 hover:-translate-y-1 hover:border-blue-500/30 ${
                  project.featured ? "shadow-2xl shadow-blue-500/5" : ""
                }`}
              >
                {/* Project Preview */}
                <div className="relative overflow-hidden border-b border-white/10 bg-black/20">
                  <div className="relative h-72 overflow-hidden md:h-80">
                    <img
                      src={project.image}
                      alt={`${project.title} website`}
                      className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.02]"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />

                    <div className="absolute left-8 top-8 right-8 flex items-start justify-between gap-4 md:left-10 md:right-10 md:top-10">
                      <span className="inline-flex h-8 items-center rounded-full border border-blue-400/20 bg-slate-950/70 px-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 backdrop-blur">
                        {project.type}
                      </span>

                      {project.featured && (
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-1 flex-col p-8 md:p-10">
                  <p className="text-lg leading-8 text-neutral-300">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-7">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                      The focus
                    </p>

                    <p className="mt-3 leading-7 text-neutral-400">
                      {project.result}
                    </p>
                  </div>

                  <div className="mt-auto pt-8">
                    {project.external ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
                      >
                        View Live Concept
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    ) : (
                      <a
                        href={project.href}
                        className="group/link inline-flex items-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
                      >
                        View Website
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </MotionSection>

        {/* Anderson Case Study */}
        <MotionSection
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-4xl border border-white/10 bg-white/3 p-8 md:p-12"
        >
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
                Featured Concept
              </p>

              <h2 className="mt-5 text-3xl font-black md:text-5xl">
                Turning a service-heavy website into a clearer customer journey.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-neutral-300">
              <p>
                The original Anderson Roofing & Restoration website contained
                useful information about the company, including its roofing
                experience, emergency repair availability, insurance guidance,
                certifications, and services. But the information was presented
                through an older, more fragmented structure.
              </p>

              <p>
                The concept redesign reorganizes that information around the
                homeowner&apos;s decision-making process: identify the problem,
                understand the available services, build trust, and request a
                free inspection.
              </p>

              <p>
                The result is a more focused experience with stronger hierarchy,
                clearer service positioning, repeated calls-to-action, and a
                more modern visual system.
              </p>

              <a
                href="https://anderson-roofing-demo.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center text-sm font-semibold uppercase tracking-[0.18em] text-blue-400 transition hover:text-blue-300"
              >
                Explore the full concept
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </MotionSection>

        {/* Capabilities */}
        <MotionSection
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl">
            <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
              How I Work
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              More than a good-looking website.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-400">
              The goal is to build an online presence that communicates value
              quickly, earns trust, and gives visitors a clear reason to take
              the next step.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/3 p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 leading-7 text-neutral-400">{item.text}</p>
                </div>
              );
            })}
          </div>
        </MotionSection>

        {/* CTA */}
        <MotionSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-4xl border border-blue-500/20 bg-blue-500/10 p-8 md:p-12"
        >
          <div className="max-w-3xl">
            <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
              Have a project in mind?
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Let&apos;s build something your customers can trust.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-300">
              If your current website doesn&apos;t reflect the quality of your
              business, let&apos;s change that.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              Start a Project
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="/services"
              className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-200 transition duration-300 hover:border-blue-500/40 hover:text-blue-400"
            >
              Explore Services
            </a>
          </div>
        </MotionSection>
      </main>

      <Footer />
    </>
  );
}
