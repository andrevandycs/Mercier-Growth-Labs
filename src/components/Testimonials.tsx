"use client";

import MotionDiv from "./MotionDiv";
import {
  Sparkles,
  Gauge,
  MessageCircle,
  ShieldCheck,
  Search,
  Code2,
} from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Completely Custom",
    description:
      "Every website is designed specifically for your business. No templates, no cookie-cutter solutions.",
  },
  {
    icon: Gauge,
    title: "Performance First",
    description:
      "Fast websites create better user experiences, improve SEO, and help convert more visitors into customers.",
  },
  {
    icon: Search,
    title: "Built for Growth",
    description:
      "From SEO foundations to clear calls-to-action, every decision is made with long-term business growth in mind.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "You'll always know what's happening throughout the project with transparent communication and quick responses.",
  },
  {
    icon: Code2,
    title: "Modern Technology",
    description:
      "Built using today's best web technologies for reliability, maintainability, and exceptional user experience.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Partner",
    description:
      "Launching your website isn't the end. I'm available for updates, improvements, and ongoing support as your business grows.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative border-t border-white/5 px-6 pt-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <MotionDiv
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
            Why Mercier Growth Labs
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            A Better Experience From Start to Finish
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Great websites aren't just about aesthetics—they're about creating
            an experience that helps your business grow. Here's what you can
            expect when we work together.
          </p>
        </MotionDiv>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <MotionDiv
                key={reason.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-300 hover:border-blue-500/40 hover:bg-white/7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
                  <Icon className="h-7 w-7 text-blue-400" />
                </div>

                <h3 className="mt-6 text-2xl font-bold">{reason.title}</h3>

                <p className="mt-4 leading-7 text-neutral-400">
                  {reason.description}
                </p>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}
