"use client";

import MotionDiv from "./MotionDiv";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center lg:px-8">
        {/* Badge */}
        <MotionDiv
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur"
        >
          Helping businesses build websites that actually generate customers
        </MotionDiv>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="max-w-5xl text-5xl font-black leading-tight tracking-tight text-white md:text-7xl"
        >
          Websites That Turn
          <span className="block bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Visitors Into Customers
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-neutral-300 md:text-xl"
        >
          I design and develop fast, modern websites for businesses that want to
          stand out, rank higher on Google, and convert more visitors into
          paying customers.
        </motion.p>

        {/* Buttons */}
        <MotionDiv
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,.45)]"
          >
            Book a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/work"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
          >
            View My Work
          </Link>
        </MotionDiv>

        {/* Stats */}
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-20 grid grid-cols-3 gap-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-white">100%</h2>
            <p className="mt-2 text-sm text-neutral-400">Custom Built</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">⚡</h2>
            <p className="mt-2 text-sm text-neutral-400">Performance Focused</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">SEO</h2>
            <p className="mt-2 text-sm text-neutral-400">Optimized</p>
          </div>
        </MotionDiv>

        {/* Scroll Indicator */}
        <MotionDiv
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-24"
        >
          <ChevronDown className="h-8 w-8 text-neutral-500" />
        </MotionDiv>
      </div>
    </section>
  );
}
