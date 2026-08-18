"use client";

import Background from "../../components/Background";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MotionSection from "../../components/MotionSection";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  LayoutTemplate,
  MessageSquare,
  Search,
  Target,
} from "lucide-react";
import Link from "next/link";

const objectives = [
  {
    icon: Target,
    title: "Establish credibility",
    text: "Create a polished online presence that immediately communicates professionalism, expertise, and attention to detail.",
  },
  {
    icon: MessageSquare,
    title: "Clarify the offer",
    text: "Make it immediately clear what Mercier Growth Labs does, who it helps, and why a custom website can be valuable to a growing business.",
  },
  {
    icon: LayoutTemplate,
    title: "Guide visitors toward action",
    text: "Build a clear journey from first impression to inquiry with concise messaging, intentional page structure, and prominent calls to action.",
  },
];

const deliverables = [
  "Custom visual design and responsive layout",
  "Conversion-focused homepage structure",
  "Dedicated Work, Services, Process, About, and Contact pages",
  "Clear service positioning and supporting copy",
  "Responsive navigation and mobile-first layouts",
  "Reusable React and Next.js components",
  "Performance-conscious frontend implementation",
  "Clear calls-to-action throughout the experience",
];

export default function WorkPage() {
  return (
    <>
      <Background />

      <Navbar />

      <main className="relative mx-auto flex max-w-7xl flex-col gap-20 px-6 pb-24 pt-28 text-white">
        {/* Project Introduction */}
        <MotionSection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="rounded-4xl border border-white/10 bg-white/3 p-8 shadow-2xl shadow-blue-500/10 backdrop-blur md:p-12"
        >
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
                Case Study
              </p>

              <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
                Mercier Growth Labs
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                The website for Mercier Growth Labs was designed and developed
                as the foundation of the agency&apos;s online presence—bringing
                together its positioning, services, process, and approach in a
                single experience built to turn visitors into potential clients.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
                  Strategy
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
                  UI/UX Design
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
                  Next.js Development
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
                  Responsive Design
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-500/20 bg-linear-to-br from-blue-500/10 via-white/5 to-transparent p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                Project overview
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm text-neutral-500">Project</p>
                  <p className="mt-1 text-neutral-200">
                    Mercier Growth Labs Website
                  </p>
                </div>

                <div>
                  <p className="text-sm text-neutral-500">Role</p>
                  <p className="mt-1 text-neutral-200">
                    Strategy, Design & Development
                  </p>
                </div>

                <div>
                  <p className="text-sm text-neutral-500">Platform</p>
                  <p className="mt-1 text-neutral-200">Next.js / React</p>
                </div>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* The Objective */}
        <MotionSection
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl">
            <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
              The Objective
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Build an agency website that could sell the value of the service.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-400">
              Mercier Growth Labs needed more than a website that simply looked
              professional. The site needed to communicate the agency&apos;s
              value proposition quickly, explain its services clearly, and give
              prospective clients a reason to start a conversation.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {objectives.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/3 p-6"
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

        {/* The Challenge */}
        <MotionSection
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-4xl border border-white/10 bg-white/3 p-8 md:p-12"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
                The Challenge
              </p>

              <h2 className="mt-4 text-3xl font-black md:text-5xl">
                Make a new agency feel established from the first visit.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-neutral-300">
              <p>
                As the agency&apos;s primary digital touchpoint, the website
                needed to establish trust before a prospective client ever
                reached out.
              </p>

              <p>
                That meant balancing a strong visual identity with enough
                substance to explain the services, demonstrate the agency&apos;s
                approach, and make the next step feel straightforward.
              </p>

              <p>
                The challenge was not simply to make the site look good. It was
                to make the design, messaging, and structure work together as a
                sales tool.
              </p>
            </div>
          </div>
        </MotionSection>

        {/* Strategy & Structure */}
        <MotionSection
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl">
            <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
              The Approach
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Structure the site around the questions a potential client
              actually has.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-400">
              Rather than treating each page as an isolated destination, the
              website was structured as a connected journey from awareness to
              inquiry.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-black/20 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                01 — First impression
              </p>

              <h3 className="mt-5 text-2xl font-bold">
                The homepage establishes the value immediately.
              </h3>

              <p className="mt-4 leading-7 text-neutral-400">
                The hero communicates what Mercier Growth Labs does while the
                sections that follow introduce services, featured work, the
                process, and the agency itself.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                02 — Build confidence
              </p>

              <h3 className="mt-5 text-2xl font-bold">
                Supporting pages answer the questions behind the inquiry.
              </h3>

              <p className="mt-4 leading-7 text-neutral-400">
                Services explain the offer, Process explains how projects work,
                About introduces the person behind the agency, and Work
                demonstrates the approach through a real project.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                03 — Reduce friction
              </p>

              <h3 className="mt-5 text-2xl font-bold">
                Calls to action are placed where visitors are ready to act.
              </h3>

              <p className="mt-4 leading-7 text-neutral-400">
                Rather than relying on a single contact point, the site
                repeatedly provides a clear next step without overwhelming the
                visitor.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                04 — Stay consistent
              </p>

              <h3 className="mt-5 text-2xl font-bold">
                A unified visual system ties the experience together.
              </h3>

              <p className="mt-4 leading-7 text-neutral-400">
                Typography, spacing, cards, borders, color, motion, and
                navigation were designed to feel consistent across the entire
                site.
              </p>
            </div>
          </div>
        </MotionSection>

        {/* Design & Development */}
        <MotionSection
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="rounded-4xl border border-white/10 bg-linear-to-br from-blue-500/10 to-transparent p-8 md:p-10">
            <LayoutTemplate className="h-8 w-8 text-blue-400" />

            <p className="mt-8 font-medium uppercase tracking-[0.3em] text-blue-400">
              Design
            </p>

            <h3 className="mt-4 text-3xl font-black">
              Premium without getting in the way of the message.
            </h3>

            <p className="mt-5 leading-8 text-neutral-300">
              The visual direction uses strong typography, restrained color,
              layered surfaces, subtle motion, and generous spacing to create a
              modern feel while keeping the content easy to scan.
            </p>
          </div>

          <div className="rounded-4xl border border-white/10 bg-white/3 p-8 md:p-10">
            <Code2 className="h-8 w-8 text-blue-400" />

            <p className="mt-8 font-medium uppercase tracking-[0.3em] text-blue-400">
              Development
            </p>

            <h3 className="mt-4 text-3xl font-black">
              A flexible frontend built for the agency to grow.
            </h3>

            <p className="mt-5 leading-8 text-neutral-300">
              The site was implemented in Next.js with reusable components and
              responsive layouts, making it easier to maintain the design and
              expand the site as Mercier Growth Labs adds new projects,
              services, and case studies.
            </p>
          </div>
        </MotionSection>

        {/* Deliverables */}
        <MotionSection
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-4xl border border-white/10 bg-white/3 p-8 md:p-12"
        >
          <div className="max-w-3xl">
            <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
              What Was Delivered
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              A complete digital foundation for the agency.
            </h2>
          </div>

          <div className="mt-10 grid gap-x-12 gap-y-5 md:grid-cols-2">
            {deliverables.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-400" />

                <span className="leading-7 text-neutral-300">{item}</span>
              </div>
            ))}
          </div>
        </MotionSection>

        {/* Outcome */}
        <MotionSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-4xl border border-blue-500/20 bg-blue-500/10 p-8 md:p-12"
        >
          <div className="max-w-4xl">
            <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
              The Result
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              A website designed to represent the agency before the first
              conversation.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-200">
              The finished site gives Mercier Growth Labs a professional home
              base for its brand, services, process, and portfolio. More
              importantly, it establishes the same standard of quality the
              agency aims to deliver for its own clients.
            </p>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              As the agency grows, this foundation can grow with it—adding
              client projects, case studies, testimonials, and new services
              without having to rethink the entire experience.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              Start a Project
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-200 transition duration-300 hover:border-blue-500/40 hover:text-blue-400"
            >
              Explore Services
            </Link>
          </div>
        </MotionSection>
      </main>

      <Footer />
    </>
  );
}
