"use client";

import Background from "../../components/Background";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  MessageSquare,
  PencilRuler,
  Rocket,
} from "lucide-react";
import Link from "next/link";

const processSteps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery and Strategy",
    description:
      "We begin with a direct conversation about your business, your target audience, your current challenges, and what success looks like. This stage is about understanding the real goals behind the website so the structure, messaging, and design support growth rather than just looking polished.",
    outcome:
      "A strong foundation built around positioning, clarity, and the right customer journey.",
  },
  {
    number: "02",
    icon: PencilRuler,
    title: "Design and Messaging",
    description:
      "Once the foundation is clear, I shape the visual direction and content flow so the site feels premium, easy to understand, and aligned with your brand. The design is not just about aesthetics—it is about helping people quickly understand your offer, trust your business, and move toward action.",
    outcome:
      "A design direction that feels authentic, modern, and built to convert attention into inquiries.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development and Build",
    description:
      "The website is built using modern development standards with a focus on performance, responsiveness, accessibility, and long-term reliability. At this stage, the site becomes a real business asset: quick to load, easy to navigate, and structured to create a strong user experience across devices.",
    outcome:
      "A high-performing digital experience that works smoothly for both users and business goals.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch and Optimization",
    description:
      "After testing, refining, and final signoff, the site goes live. We review the experience as a whole to make sure the calls-to-action, flow, and content all support conversion. After launch, I remain available for updates, improvements, and optimization as your business evolves.",
    outcome:
      "A launch-ready website that remains effective, adaptable, and ready for future growth.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <Background />

      <Navbar />

      <main className="relative mx-auto flex max-w-7xl flex-col gap-20 px-6 pb-24 pt-28 text-white">
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
            Process
          </p>

          <h1 className="mt-6 text-4xl font-black md:text-6xl">
            A clear process that turns business goals into a website that works.
          </h1>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            A strong website is never random. It grows from a thoughtful process
            that helps us understand your business, shape the right message, and
            build a digital experience designed to earn trust and influence
            action.
          </p>
        </motion.section>

        <div className="space-y-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.section
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-4xl border border-white/10 bg-white/3 p-8 md:p-10"
              >
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                  <div className="flex items-center gap-5 lg:min-w-55">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-500/30 bg-neutral-950">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                        Step {step.number}
                      </p>
                      <h2 className="mt-2 text-2xl font-black md:text-3xl">
                        {step.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="text-lg leading-8 text-neutral-300">
                      {step.description}
                    </p>

                    <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                        Outcome
                      </p>
                      <p className="mt-3 leading-7 text-neutral-200">
                        {step.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>
            );
          })}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-4xl border border-white/10 bg-white/3 p-8 md:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
                Why this matters
              </p>

              <h3 className="mt-5 text-3xl font-black md:text-4xl">
                The best websites are not built in a rush—they are built with
                intention.
              </h3>
            </div>

            <div className="space-y-5">
              {[
                "Clear strategy makes your message more convincing.",
                "Strong design increases trust and sets a premium standard.",
                "Thoughtful development keeps the experience smooth and reliable.",
                "A good launch plan ensures the site continues working for your business.",
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-4xl border border-blue-500/20 bg-blue-500/10 p-8 text-center md:p-12"
        >
          <h3 className="text-3xl font-black md:text-4xl">
            You do not need a complicated process. You need a process that leads
            to results.
          </h3>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              Start your project
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}
