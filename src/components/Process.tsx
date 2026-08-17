"use client";

import { motion } from "framer-motion";
import { MessageSquare, PencilRuler, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a conversation about your business, goals, audience, and what success looks like. This ensures every decision is made with your customers in mind.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Design",
    description:
      "I design a modern, conversion-focused interface that reflects your brand, builds trust, and provides an exceptional user experience on every device.",
    icon: PencilRuler,
  },
  {
    number: "03",
    title: "Development",
    description:
      "Your website is built from the ground up using modern technologies with a focus on speed, accessibility, SEO, and long-term maintainability.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "After testing and final refinements, your website goes live. I remain available for updates, improvements, and ongoing support whenever you need it.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative border-t border-white/5 px-6 pt-28 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
            Process
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            A Simple Process Designed Around Your Business
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            From our first conversation to launch day, every step is focused on
            creating a website that helps your business attract more customers
            and grow with confidence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -4 }}
                  className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-300 hover:border-blue-500/40 hover:bg-white/7"
                >
                  <div className="flex flex-col gap-8 md:flex-row md:items-start">
                    {/* Number + Icon */}
                    <div className="flex items-center gap-5 md:min-w-45">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/30 bg-neutral-950">
                        <Icon className="h-5 w-5 text-blue-400" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                          Step {step.number}
                        </p>

                        <h3 className="mt-1 text-2xl font-bold">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="max-w-3xl leading-8 text-neutral-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
