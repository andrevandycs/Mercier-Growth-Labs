"use client";

import Background from "../../components/Background";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  LayoutTemplate,
  MousePointerClick,
  Search,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const projectHighlights = [
  {
    icon: LayoutTemplate,
    title: "Strategy-first positioning",
    text: "The homepage, service sections, and conversion flow were built to clarify who Mercier Growth Labs helps and why the business is different.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion-focused UX",
    text: "Every section was designed to guide visitors toward taking action with clear messaging, direct CTAs, and friction-free navigation.",
  },
  {
    icon: Search,
    title: "SEO and discoverability",
    text: "The site is built with strong structure, service-oriented copy, and technical clarity so it can rank and attract quality traffic.",
  },
  {
    icon: BarChart3,
    title: "Business growth mindset",
    text: "The entire experience is oriented around helping clients win more leads, build trust, and grow confidently online.",
  },
];

const deliverables = [
  "Fully custom website design aligned to the brand",
  "Clear, high-intent messaging for service-based businesses",
  "Responsive interface optimized for desktop, tablet, and mobile",
  "Modern frontend implementation in Next.js with strong performance",
  "Strong calls-to-action and lead-generation paths",
  "A polished online presence built to earn trust quickly",
];

export default function WorkPage() {
  return (
    <>
      <Background />

      <Navbar />

      <main className="relative mx-auto flex max-w-7xl flex-col gap-20 px-6 pb-24 pt-28 text-white">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="rounded-4xl border border-white/10 bg-white/3 p-8 shadow-2xl shadow-blue-500/10 backdrop-blur md:p-12"
        >
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
                Featured work
              </p>

              <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
                Mercier Growth Labs
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                A conversion-focused digital presence for a modern growth
                studio—crafted to communicate expertise, build credibility, and
                turn website visitors into business opportunities.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
                >
                  Start a Project
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-200 transition duration-300 hover:border-blue-500/40 hover:text-blue-400"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-500/20 bg-linear-to-br from-blue-500/10 via-white/5 to-transparent p-6">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                  Project scope
                </p>

                <ul className="mt-6 space-y-4 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                    <span>Brand positioning and service clarity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                    <span>Lead-generation website strategy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                    <span>Modern responsive web experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                    <span>Clear call-to-action flow</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-4"
        >
          {projectHighlights.map((item) => {
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
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-4xl border border-white/10 bg-white/3 p-8 md:p-12"
        >
          <div className="max-w-3xl">
            <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
              The challenge
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Position a service business as premium, clear, and easy to trust.
            </h2>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-black/20 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                What needed to happen
              </p>

              <p className="mt-5 leading-8 text-neutral-300">
                This site needed to communicate more than just design services.
                It had to instantly establish authority, explain the value of a
                tailored online presence, and make it obvious that the next step
                was a conversation.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                What was built
              </p>

              <p className="mt-5 leading-8 text-neutral-300">
                A premium, performance-oriented marketing website with strategic
                copy, digestible offer structure, polished presentation, and
                clear conversion paths that guide visitors toward contact and
                consultation.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="rounded-4xl border border-white/10 bg-linear-to-br from-blue-500/8 to-transparent p-8 md:p-10">
            <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
              Why it works
            </p>

            <h3 className="mt-6 text-3xl font-black">
              Designed to convert attention into action.
            </h3>

            <ul className="mt-8 space-y-5">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                  <span className="leading-7 text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-4xl border border-white/10 bg-white/3 p-8 md:p-10">
            <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
              The experience
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h4 className="text-xl font-bold">Clear positioning</h4>
                <p className="mt-2 leading-7 text-neutral-400">
                  The site explains who the business serves, what problems it
                  solves, and why the process is different from a generic
                  template-based build.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold">High-trust presentation</h4>
                <p className="mt-2 leading-7 text-neutral-400">
                  Every section balances warmth and professionalism, reinforcing
                  the perception of expertise while keeping the message
                  approachable and credible.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold">Action-driven structure</h4>
                <p className="mt-2 leading-7 text-neutral-400">
                  From the first screen to the final CTA, visitors are guided
                  toward a clear next step: starting a conversation, discussing
                  a project, or getting a quote.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-4xl border border-blue-500/20 bg-blue-500/10 p-8 text-center md:p-12"
        >
          <Sparkles className="mx-auto h-10 w-10 text-blue-400" />

          <h3 className="mt-6 text-3xl font-black md:text-4xl">
            This is the kind of website that earns trust before a call even
            happens.
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-neutral-200">
            If you want a website that reflects your value, speaks directly to
            your ideal client, and makes it easy to say yes, Mercier Growth Labs
            is built for that goal.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              Book a discovery call
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}
