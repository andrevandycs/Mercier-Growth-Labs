"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const principles = [
  "Custom-built for your business — never templates.",
  "Fast, responsive, and optimized for every device.",
  "Designed to convert visitors into customers.",
  "Clear communication from start to finish.",
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative border-t border-white/5 px-6 pt-28 text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
            About
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            Building Websites That Help Businesses Grow
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-400">
            I started Mercier Growth Labs with one goal: to help businesses
            stand out online through thoughtful design and modern development.
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Every website is designed from the ground up around your business,
            your customers, and your goals—not around a generic template. My
            focus is creating websites that look exceptional, load quickly, and
            make it easy for visitors to become customers.
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            I believe great websites should be more than beautiful—they should
            become valuable business assets that continue generating results
            long after launch.
          </p>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            What You Can Expect
          </p>

          <div className="mt-8 space-y-6">
            {principles.map((principle) => (
              <div key={principle} className="flex gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-blue-400" />

                <p className="leading-7 text-neutral-300">{principle}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              My Goal
            </p>

            <p className="mt-3 leading-7 text-neutral-300">
              Build a website that not only looks professional but helps your
              business earn more trust, attract more customers, and continue
              growing over time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
