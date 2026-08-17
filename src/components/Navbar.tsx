"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-xl"
    >
      <div className="relative mx-auto flex w-full max-w-360 items-center justify-between px-6 py-4 lg:px-10">
        {/* Brand */}
        <Link
          href="/"
          className="font-medium uppercase tracking-[0.25em] text-amber-400 transition-transform duration-300 hover:scale-[1.03]"
        >
          Mercier Growth Labs
        </Link>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          <Link
            href="/work"
            className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-400 transition-colors duration-300 hover:text-blue-400"
          >
            Work
          </Link>

          <Link
            href="/services"
            className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-400 transition-colors duration-300 hover:text-blue-400"
          >
            Services
          </Link>

          <Link
            href="/process"
            className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-400 transition-colors duration-300 hover:text-blue-400"
          >
            Process
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-400 transition-colors duration-300 hover:text-blue-400"
          >
            About
          </Link>
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="group hidden items-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.15em] text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500 md:inline-flex"
        >
          Contact
          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>

        {/* Mobile Menu */}
        <button
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/5 bg-black/40 px-6 py-6 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-6">
            <Link
              href="/work"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-400 transition hover:text-blue-400"
            >
              Work
            </Link>

            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-400 transition hover:text-blue-400"
            >
              Services
            </Link>

            <Link
              href="/process"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-400 transition hover:text-blue-400"
            >
              Process
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-400 transition hover:text-blue-400"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex w-fit items-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white"
            >
              Start a Project
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
