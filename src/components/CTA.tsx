"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative border-t border-white/5 px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-4xl border border-blue-500/20 bg-linear-to-br from-blue-600/15 via-blue-500/10 to-transparent p-12 text-center backdrop-blur-xl md:p-16"
        >
          <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
            Ready to Get Started?
          </p>

          <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Let's Build a Website That
            <span className="block bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Helps Your Business Grow
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-300">
            Whether you're launching a new business or replacing an outdated
            website, I'd love to learn more about your goals and discuss how we
            can create a website that attracts more customers and builds trust
            in your brand.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="mailto:hello@mercierwebstudio.com"
              className="group inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,.35)]"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="#work"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white/30 hover:bg-white/10"
            >
              View My Work
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-neutral-400">
            <span>✓ Free initial consultation</span>
            <span>✓ Custom-built websites</span>
            <span>✓ Ongoing support available</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
