"use client";

import type { FormEvent } from "react";

const recipient = "orisynlimited@gmail.com";

export default function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const businessArea = String(form.get("businessArea") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const subject = `Website enquiry from ${name}`;
    const body = [
      "New website contact enquiry",
      "",
      `Full name: ${name}`,
      `Email address: ${email}`,
      `Phone number: ${phone || "Not provided"}`,
      `Business area: ${businessArea || "Not selected"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const gmailUrl = new URL("https://mail.google.com/mail/");
    gmailUrl.searchParams.set("view", "cm");
    gmailUrl.searchParams.set("fs", "1");
    gmailUrl.searchParams.set("to", recipient);
    gmailUrl.searchParams.set("su", subject);
    gmailUrl.searchParams.set("body", body);

    window.location.assign(gmailUrl.toString());
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-charcoal/10 bg-surface p-5 shadow-[0_24px_70px_rgba(34,34,34,0.09)] sm:p-8 lg:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-xs font-bold uppercase tracking-[0.1em] text-charcoal">
          Full name <span className="text-primary">*</span>
          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            className="mt-2.5 h-13 w-full rounded-lg border border-charcoal/15 bg-background px-4 text-sm font-normal normal-case tracking-normal text-charcoal outline-none transition-[border-color,box-shadow] placeholder:text-muted/60 focus:border-secondary focus:ring-4 focus:ring-secondary/10"
          />
        </label>
        <label className="block text-xs font-bold uppercase tracking-[0.1em] text-charcoal">
          Email address <span className="text-primary">*</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="mt-2.5 h-13 w-full rounded-lg border border-charcoal/15 bg-background px-4 text-sm font-normal normal-case tracking-normal text-charcoal outline-none transition-[border-color,box-shadow] placeholder:text-muted/60 focus:border-secondary focus:ring-4 focus:ring-secondary/10"
          />
        </label>
        <label className="block text-xs font-bold uppercase tracking-[0.1em] text-charcoal">
          Phone number
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="Your phone number"
            className="mt-2.5 h-13 w-full rounded-lg border border-charcoal/15 bg-background px-4 text-sm font-normal normal-case tracking-normal text-charcoal outline-none transition-[border-color,box-shadow] placeholder:text-muted/60 focus:border-secondary focus:ring-4 focus:ring-secondary/10"
          />
        </label>
        <label className="block text-xs font-bold uppercase tracking-[0.1em] text-charcoal">
          Business area
          <select
            name="businessArea"
            defaultValue=""
            className="mt-2.5 h-13 w-full rounded-lg border border-charcoal/15 bg-background px-4 text-sm font-normal normal-case tracking-normal text-charcoal outline-none transition-[border-color,box-shadow] focus:border-secondary focus:ring-4 focus:ring-secondary/10"
          >
            <option value="" disabled>
              Select a business area
            </option>
            <option>Civil Construction</option>
            <option>Electrical &amp; Electronic Engineering</option>
            <option>Mechanical Engineering</option>
            <option>Project Engineering</option>
            <option>Import, Export &amp; Supply</option>
            <option>Investment</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block text-xs font-bold uppercase tracking-[0.1em] text-charcoal">
        Your message <span className="text-primary">*</span>
        <textarea
          required
          name="message"
          rows={6}
          placeholder="Tell us about your project, timeline, and requirements..."
          className="mt-2.5 w-full resize-y rounded-lg border border-charcoal/15 bg-background px-4 py-3 text-sm font-normal normal-case leading-6 tracking-normal text-charcoal outline-none transition-[border-color,box-shadow] placeholder:text-muted/60 focus:border-secondary focus:ring-4 focus:ring-secondary/10"
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-muted">
          Required fields are marked with an asterisk. Submitting opens Gmail
          with your message ready to review and send.
        </p>
        <button
          type="submit"
          className="group inline-flex w-full shrink-0 cursor-pointer items-center justify-center gap-3 rounded-full bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-[0.08em] text-white transition-[background-color,box-shadow,transform] hover:-translate-y-0.5 hover:bg-primary-light hover:shadow-[0_10px_24px_rgba(255,100,46,0.28)] sm:w-auto"
        >
          Continue to Gmail
          <span
            className="grid size-7 place-items-center rounded-full bg-white text-charcoal transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </button>
      </div>
    </form>
  );
}
