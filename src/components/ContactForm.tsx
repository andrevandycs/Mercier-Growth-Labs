"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/merciergrowthlabs@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...data,
            _subject: `New Consultation Request — ${data.business}`,
            _template: "table",
            _replyto: data.email,
          }),
        },
      );
      if (!response.ok) {
        throw new Error("Form submission failed");
      }
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setError(
        "Something went wrong while submitting the form. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
        {" "}
        <h2 className="text-2xl font-bold text-white">
          {" "}
          Thanks! Your request has been received.{" "}
        </h2>{" "}
        <p className="mt-4 text-neutral-300">
          {" "}
          I'll review your information and reach out shortly to schedule your
          free consultation.{" "}
        </p>{" "}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-neutral-300"
        >
          Name
        </label>

        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your name"
          className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-neutral-400 outline-none focus:border-blue-400"
        />
      </div>

      <div>
        <label
          htmlFor="business"
          className="mb-2 block text-sm font-medium text-neutral-300"
        >
          Business Name
        </label>

        <input
          type="text"
          id="business"
          name="business"
          required
          placeholder="Your business name"
          className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-neutral-400 outline-none focus:border-blue-400"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-neutral-300"
        >
          Email
        </label>

        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-neutral-400 outline-none focus:border-blue-400"
        />
      </div>

      <div>
        <label
          htmlFor="website"
          className="mb-2 block text-sm font-medium text-neutral-300"
        >
          Current Website{" "}
          <span className="font-normal text-neutral-400">(optional)</span>
        </label>

        <input
          type="url"
          id="website"
          name="website"
          placeholder="https://yourwebsite.com"
          className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-neutral-400 outline-none focus:border-blue-400"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-2 block text-sm font-medium text-neutral-300"
        >
          What can I help you with?
        </label>

        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-neutral-400 outline-none focus:border-blue-400"
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="new-website" className="text-black">
            New Website
          </option>
          <option value="landing-page" className="text-black">
            Landing Page
          </option>
          <option value="website-redesign" className="text-black">
            Website Redesign
          </option>
          <option value="website-and-maintenance" className="text-black">
            Website + Maintenance
          </option>
          <option value="other" className="text-black">
            Other / Not Sure
          </option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-neutral-300"
        >
          Tell me about your business
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="What does your business do, and what are you hoping to improve?"
          className="w-full resize-none rounded-lg border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-neutral-400 outline-none focus:border-blue-400"
        />
      </div>

      {error && <p className="text-center text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-blue-500"
      >
        {loading ? "Sending..." : "Request My Free Consultation"}
      </button>

      <p className="text-center text-sm text-neutral-400">
        I'll review your submission and get back to you to schedule your
        consultation.
      </p>
    </form>
  );
}
