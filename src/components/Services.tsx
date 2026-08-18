"use client";

import MotionDiv from "./MotionDiv";
import { ArrowUpRight, Globe, Palette, Smartphone, Gauge } from "lucide-react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Custom Website Design",
    description:
      "Beautiful, modern websites designed specifically for your brand, customers, and business goals.",
    features: [
      "Fully custom design",
      "Responsive Development",
      "SEO & Performance Optimization",
    ],
    link: "/services#custom-website-design",
    icon: Globe,
  },
  {
    number: "02",
    title: "Website Redesign",
    description:
      "Transform outdated websites into modern experiences that build trust and generate more leads.",
    features: [
      "UI/UX Improvements",
      "Modern Visual Design",
      "Faster Performance",
    ],
    link: "/services#website-redesign",
    icon: Palette,
  },
  {
    number: "03",
    title: "Landing Pages",
    description:
      "High-converting landing pages for advertising campaigns, new products, and lead generation.",
    features: ["Conversion Optimization", "Fast Loading", "Analytics Ready"],
    link: "/services#landing-pages",
    icon: Smartphone,
  },
  {
    number: "04",
    title: "Website Maintenance",
    description:
      "Keep your website secure, updated, and performing at its best after launch.",
    features: ["Content Updates", "Bug Fixes", "Ongoing Support"],
    link: "/services#website-maintenance",
    icon: Gauge,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-white/5 px-6 pt-28 text-white"
    >
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
            Services
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Everything You Need for a Website That Grows Your Business
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Every project is designed around one goal: helping your business
            attract more customers through exceptional design, performance, and
            user experience.
          </p>
        </MotionDiv>

        {/* Services */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <MotionDiv
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition-all duration-300 hover:border-blue-500/40 hover:bg-white/7"
              >
                <div
                  className={`grid gap-10 p-10 lg:grid-cols-2 lg:items-center ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Left */}
                  <div>
                    <div className="flex items-center gap-5">
                      <span className="text-5xl font-black text-white/10">
                        {service.number}
                      </span>

                      <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4">
                        <Icon className="h-7 w-7 text-blue-400" />
                      </div>
                    </div>

                    <h3 className="mt-8 text-3xl font-bold">{service.title}</h3>

                    <p className="mt-5 max-w-xl leading-8 text-neutral-400">
                      {service.description}
                    </p>

                    <Link
                      href={service.link}
                      className="mt-8 inline-flex items-center font-semibold text-blue-400 transition hover:text-blue-300"
                    >
                      Learn More
                      <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>

                  {/* Right */}
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-8">
                    <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                      Included
                    </p>

                    <div className="space-y-4">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 px-5 py-4 transition duration-300 group-hover:border-blue-500/20"
                        >
                          <div className="h-2.5 w-2.5 rounded-full bg-blue-400" />

                          <span className="text-neutral-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}
