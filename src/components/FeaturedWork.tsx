"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Mercier Web Studio",
    category: "Agency Website",
    description:
      "Designed and developed a high-performance agency website focused on converting visitors into consultation requests.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/mercier-growth-labs/card.png",
    href: "/work#mercier-growth-labs",
  },
];

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="relative px-6 pt-28 border-t border-white/5 text-white"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
            Featured Work
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Websites Built to Grow Businesses
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Every project is designed with performance, accessibility, and
            conversion in mind—because beautiful websites should also produce
            real business results.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid gap-8 lg:grid-cols-1">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
              }}
              className="group flex flex-col h-full overflow-hidden rounded-3xl border border-white/10 bg-white/3 hover:bg-white/5 hover:border-white/20 hover:shadow-2xl transition[background-color, border-color, box-shadow] duration-300 ease-out backdrop-blur"
            >
              {/* Screenshot */}
              <div className="aspect-16/10 overflow-hidden bg-linear-to-br from-blue-500/20 via-cyan-500/10 to-transparent">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-1 flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">{project.title}</h3>

                  <p className="mt-4 leading-7 text-neutral-400">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Link */}
                  <Link
                    href={project.href}
                    className="mt-8 inline-flex items-center font-semibold text-blue-400 transition hover:text-blue-300"
                  >
                    View Case Study
                    <ArrowUpRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 flex justify-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center rounded-xl border border-blue-500/50 bg-blue-500/10 px-8 py-4 font-semibold text-blue-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500 hover:text-white hover:shadow-xl hover:shadow-blue-500/20"
          >
            Let's Build Yours
            <ExternalLink className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
