"use client";

import Background from "../../components/Background";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MotionSection from "../../components/MotionSection";
import {
  ArrowUpRight,
  CheckCircle2,
  Gauge,
  Globe,
  Palette,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

const servicePackages = [
  {
    id: "custom-website-design",
    number: "01",
    icon: Globe,
    title: "Custom Website Design",
    startingPrice: 2000,
    summary:
      "A brand-led website that looks premium, communicates clearly, and makes it easy for the right prospects to take the next step.",
    description:
      "Your website should do more than sit online—it should position your business, clarify your offers, and create confidence in your value before a sales conversation ever starts. This service is built for businesses that need a polished, strategic online presence designed around their goals, audience, and growth opportunities.",
    deliverables: [
      "Custom homepage and strategic page structure",
      "Tailored visual design grounded in your brand and positioning",
      "Responsive layouts for mobile, tablet, and desktop",
      "Conversion-driven messaging and user flow",
      "Modern, SEO-conscious frontend implementation",
    ],
    bestFor:
      "Businesses that need a brand-new website or a sharper digital presence.",
  },
  {
    id: "website-redesign",
    number: "02",
    icon: Palette,
    title: "Website Redesign",
    startingPrice: 1500,
    summary:
      "A visual and strategic refresh for businesses with an outdated website that no longer reflects their value or converts well.",
    description:
      "Many websites are technically online but still create friction, confusion, or a weak first impression. A redesign gives you the chance to modernize the experience, improve messaging, and make the site feel aligned with the standard your business deserves. The goal is to turn a dated website into a growth asset that earns trust and generates better opportunities.",
    deliverables: [
      "UX and layout improvements throughout the site",
      "Updated visual direction and refined branding cues",
      "Simplified navigation and better content hierarchy",
      "Improved conversion paths and stronger call-to-action placement",
      "Faster, cleaner performance without sacrificing polish",
    ],
    bestFor:
      "Established businesses ready to improve credibility and attract better-fit clients.",
  },
  {
    id: "landing-pages",
    number: "03",
    icon: Smartphone,
    title: "Landing Pages",
    startingPrice: 750,
    summary:
      "Focused web pages built to turn campaigns, announcements, and traffic into measurable inquiries or sales conversations.",
    description:
      "Landing pages are the fastest way to convert interest into action. Whether you are running ads, launching a service, or promoting a special offer, the message needs to be compelling, direct, and built around your customer’s decision-making process. These pages are intentionally built to remove noise, highlight value, and guide visitors to one clear action.",
    deliverables: [
      "Messaging built around a specific offer or campaign",
      "A focused layout optimized for conversions",
      "Fast-loading, mobile-friendly design",
      "Clear headline, proof, CTA, and trust-building elements",
      "Easy-to-track structure for future optimization",
    ],
    bestFor:
      "Campaigns, offers, lead generation, and service announcements that need immediate traction.",
  },
  {
    id: "website-maintenance",
    number: "04",
    icon: Gauge,
    title: "Website Maintenance",
    startingPrice: 100,
    summary:
      "Ongoing support to keep your website secure, current, and performing at the level your business deserves.",
    description:
      "A website is not a one-time project—it is a business tool that needs attention over time. Maintenance keeps everything working properly, protects against issues, and ensures your site continues to support your marketing efforts. This service helps businesses stay online, competitive, and confident that their digital presence remains in good shape.",
    deliverables: [
      "Content updates and design refinements",
      "Bug fixes and technical maintenance",
      "Security checks and ongoing website health reviews",
      "Performance upgrades and UX improvements",
      "Responsive support when your site needs attention",
    ],
    bestFor:
      "Businesses that want a reliable website partner long after launch.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Background />

      <Navbar />

      <main className="relative mx-auto flex max-w-7xl flex-col gap-20 px-6 pb-24 pt-28 text-white">
        <MotionSection
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
            Services
          </p>

          <h1 className="mt-6 text-4xl font-black md:text-6xl">
            Websites built to look credible and convert more clients.
          </h1>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Every service is designed to help your business attract better-fit
            customers, communicate your value clearly, and create a digital
            experience that inspires trust.
          </p>
        </MotionSection>

        <div className="space-y-8">
          {servicePackages.map((service, index) => {
            const Icon = service.icon;

            return (
              <MotionSection
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="overflow-hidden rounded-4xl border border-white/10 bg-white/3 backdrop-blur scroll-m-30"
              >
                <div
                  className={`grid gap-10 p-8 md:p-12 lg:grid-cols-[0.95fr_1.05fr] ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-5">
                      <div className="flex items-center gap-5">
                        <span className="text-5xl font-black text-white/10">
                          {service.number}
                        </span>

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
                          <Icon className="h-6 w-6 text-blue-400" />
                        </div>
                      </div>

                      <h3 className="flex items-center">
                        Starting at ${service.startingPrice.toLocaleString()}
                        {service.id === "website-maintenance" ? "/month" : ""}
                      </h3>
                    </div>

                    <h2 className="mt-7 text-3xl font-black md:text-4xl">
                      {service.title}
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-neutral-300">
                      {service.summary}
                    </p>

                    <p className="mt-5 leading-8 text-neutral-400">
                      {service.description}
                    </p>
                  </div>

                  <div className="rounded-[1.8rem] border border-white/10 bg-black/20 p-7 md:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                      Included
                    </p>

                    <ul className="mt-6 space-y-4">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                          <span className="leading-7 text-neutral-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                        Best for
                      </p>
                      <p className="mt-3 leading-7 text-neutral-200">
                        {service.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              </MotionSection>
            );
          })}
        </div>

        <MotionSection
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-4xl border border-blue-500/20 bg-blue-500/10 p-8 text-center md:p-12"
        >
          <h2 className="text-3xl font-black md:text-4xl">
            Need a website that reflects your value and generates more business?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-neutral-200">
            Whether you need a full custom build, a strategic refresh, or a
            focused landing page, the right solution is one that supports both
            your brand and your growth goals.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              Book a discovery call
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </MotionSection>
      </main>

      <Footer />
    </>
  );
}
