"use client";

import Background from "../../components/Background";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Lightbulb,
    title: "Strategy over decoration",
    text: "A beautiful site means little if it does not help your business communicate clearly and attract the right people.",
  },
  {
    icon: ShieldCheck,
    title: "Trust and transparency",
    text: "Clients deserve a process that feels clear, collaborative, and grounded in real business priorities.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership mindset",
    text: "The goal is not just to build something once—it is to create a long-term digital asset that supports growth.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Background />

      <Navbar />

      <main className="relative mx-auto flex max-w-7xl flex-col gap-20 px-6 pb-24 pt-28 text-white">
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div>
            <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
              About
            </p>

            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Helping businesses look credible and grow with confidence.
            </h1>

            <p className="mt-6 text-lg leading-8 text-neutral-300">
              Mercier Growth Labs was built to help businesses turn their
              digital presence into a real growth asset. The focus is simple:
              create websites that feel premium, communicate clearly, and help
              the right people take action.
            </p>

            <p className="mt-5 text-lg leading-8 text-neutral-400">
              Too many businesses have websites that look decent but fail to
              support their goals. The result is often confusion, missed
              opportunities, and a lack of trust. This work is about solving
              that problem with strategy, thoughtful design, and modern web
              development.
            </p>
          </div>

          <div className="rounded-4xl border border-white/10 bg-white/3 p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              The mission
            </p>

            <p className="mt-6 text-2xl font-bold leading-tight">
              Build websites that do more than impress—they earn trust and
              create momentum.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Clear positioning for your business and offer.",
                "Better user experience for more qualified leads.",
                "A stronger digital presence that supports long-term growth.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                  <span className="leading-7 text-neutral-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-4xl border border-white/10 bg-white/3 p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
                  <Icon className="h-5 w-5 text-blue-400" />
                </div>

                <h2 className="mt-6 text-2xl font-bold">{value.title}</h2>
                <p className="mt-4 leading-7 text-neutral-400">{value.text}</p>
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
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
                Why clients choose this approach
              </p>

              <h2 className="mt-5 text-3xl font-black md:text-4xl">
                The real goal is not just to look good online—it is to convert
                attention into trust.
              </h2>
            </div>

            <div className="space-y-5 text-neutral-300">
              <p className="leading-8">
                Every decision is made with the end result in mind: a website
                that communicates clearly, feels polished, and supports business
                growth.
              </p>

              <p className="leading-8">
                That means being strategic about messaging, mindful about user
                experience, and focused on building digital experiences that
                help your business stand out in a crowded market.
              </p>
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
          <h2 className="text-3xl font-black md:text-4xl">
            Ready to build a website that helps your business grow?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-neutral-200">
            Whether you are starting from scratch or reworking an outdated
            presence, the right website can give your business more clarity,
            more credibility, and more opportunity.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              Let&apos;s talk
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}
