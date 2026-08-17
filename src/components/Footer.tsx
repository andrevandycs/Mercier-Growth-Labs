"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-start lg:justify-between">
        {/* Brand */}
        <div className="max-w-md">
          <p className="font-medium uppercase tracking-[0.25em] text-amber-400">
            Mercier Growth Labs
          </p>

          <p className="mt-5 leading-7 text-neutral-400">
            Custom websites designed to help businesses build trust, attract
            more customers, and grow online.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Navigation
          </p>

          <div className="mt-5 flex flex-col gap-3">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="w-fit text-neutral-400 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Contact
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="mailto:merciergrowthlabs@gmail.com"
              className="group inline-flex w-fit items-center text-neutral-400 transition-colors duration-300 hover:text-white"
            >
              merciergrowthlabs@gmail.com
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/5 px-6 py-8 text-sm text-neutral-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} Mercier Growth Labs. All rights reserved.
        </p>

        <Link
          href="/"
          className="transition-colors duration-300 hover:text-white"
        >
          Back to Top
        </Link>
      </div>
    </footer>
  );
}
