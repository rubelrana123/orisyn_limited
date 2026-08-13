import type { Metadata } from "next";
import InnerPageHero from "@/components/common/InnerPageHero";

export const metadata: Metadata = {
  title: "Contact Us | Orisyn Limited",
  description:
    "Contact Orisyn Limited to discuss engineering, construction, supply, and investment requirements.",
};

const contactDetails = [
  {
    title: "Call us",
    value: "+880 1746-644478",
    note: "Speak directly with our team",
    href: "tel:+8801746644478",
    icon: "phone",
  },
  {
    title: "Email us",
    value: "roottop.ltd@gmail.com",
    note: "We aim to reply within one business day",
    href: "mailto:roottop.ltd@gmail.com",
    icon: "mail",
  },
  {
    title: "Visit us",
    value: "Dhaka, Bangladesh",
    note: "Meetings available by appointment",
    href: "https://www.google.com/maps/search/?api=1&query=Dhaka%2C%20Bangladesh",
    icon: "location",
  },
] as const;

function ContactIcon({ type }: { type: (typeof contactDetails)[number]["icon"] }) {
  if (type === "mail") {
    return <path d="M3 6.5h18v12H3v-12Zm1 1 8 6 8-6" />;
  }

  if (type === "location") {
    return (
      <>
        <path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.3" />
      </>
    );
  }

  return <path d="M6.7 3.5 10 7.7 8.1 10c1.2 2.5 3.4 4.7 5.9 5.9l2.3-1.9 4.2 3.3-1.1 3.1c-.3.8-1.1 1.3-2 1.2C9.5 20.8 3.2 14.5 2.4 6.6c-.1-.9.4-1.7 1.2-2l3.1-1.1Z" />;
}

export default function ContactPage() {
  return (
    <main>
      <InnerPageHero
        eyebrow="Get in touch"
        title="Let's Talk"
        description="Tell us what you are planning. Our team is ready to listen, understand your needs, and help define the next step."
        image="/services/electrical-electronic-engineering.png"
        imageAlt="An Orisyn engineer working in a modern technical facility"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact us" },
        ]}
      />

      <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
        <div className="absolute -right-24 top-20 size-72 rounded-full border-[4rem] border-primary/[0.045]" aria-hidden="true" />
        <div className="container relative grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 xl:gap-24">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
              <span className="h-0.5 w-8 bg-primary" aria-hidden="true" />
              Start a conversation
            </p>
            <h2 className="mt-5 text-[clamp(3rem,5vw,5rem)] uppercase leading-[0.94] text-charcoal">
              Have a project in mind?
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
              Share a few details about your project, business requirement, or partnership opportunity. The Orisyn team will review your message and respond with a practical next step.
            </p>

            <div className="mt-9 border-t border-charcoal/15 pt-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">
                Office hours
              </p>
              <div className="mt-4 space-y-2 text-sm text-muted">
                <p className="flex justify-between gap-5"><span>Saturday–Thursday</span><strong className="font-semibold text-charcoal">9:00 AM–6:00 PM</strong></p>
                <p className="flex justify-between gap-5"><span>Friday</span><strong className="font-semibold text-charcoal">Closed</strong></p>
              </div>
            </div>
          </div>

          <form
            action="mailto:roottop.ltd@gmail.com"
            method="post"
            encType="text/plain"
            className="rounded-2xl border border-charcoal/10 bg-surface p-5 shadow-[0_24px_70px_rgba(34,34,34,0.09)] sm:p-8 lg:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-xs font-bold uppercase tracking-[0.1em] text-charcoal">
                Full name <span className="text-primary">*</span>
                <input required name="name" autoComplete="name" placeholder="Your full name" className="mt-2.5 h-13 w-full rounded-lg border border-charcoal/15 bg-background px-4 text-sm font-normal normal-case tracking-normal text-charcoal outline-none transition-[border-color,box-shadow] placeholder:text-muted/60 focus:border-secondary focus:ring-4 focus:ring-secondary/10" />
              </label>
              <label className="block text-xs font-bold uppercase tracking-[0.1em] text-charcoal">
                Email address <span className="text-primary">*</span>
                <input required type="email" name="email" autoComplete="email" placeholder="you@example.com" className="mt-2.5 h-13 w-full rounded-lg border border-charcoal/15 bg-background px-4 text-sm font-normal normal-case tracking-normal text-charcoal outline-none transition-[border-color,box-shadow] placeholder:text-muted/60 focus:border-secondary focus:ring-4 focus:ring-secondary/10" />
              </label>
              <label className="block text-xs font-bold uppercase tracking-[0.1em] text-charcoal">
                Phone number
                <input type="tel" name="phone" autoComplete="tel" placeholder="Your phone number" className="mt-2.5 h-13 w-full rounded-lg border border-charcoal/15 bg-background px-4 text-sm font-normal normal-case tracking-normal text-charcoal outline-none transition-[border-color,box-shadow] placeholder:text-muted/60 focus:border-secondary focus:ring-4 focus:ring-secondary/10" />
              </label>
              <label className="block text-xs font-bold uppercase tracking-[0.1em] text-charcoal">
                Business area
                <select name="businessArea" defaultValue="" className="mt-2.5 h-13 w-full rounded-lg border border-charcoal/15 bg-background px-4 text-sm font-normal normal-case tracking-normal text-charcoal outline-none transition-[border-color,box-shadow] focus:border-secondary focus:ring-4 focus:ring-secondary/10">
                  <option value="" disabled>Select a business area</option>
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
              <textarea required name="message" rows={6} placeholder="Tell us about your project, timeline, and requirements..." className="mt-2.5 w-full resize-y rounded-lg border border-charcoal/15 bg-background px-4 py-3 text-sm font-normal normal-case leading-6 tracking-normal text-charcoal outline-none transition-[border-color,box-shadow] placeholder:text-muted/60 focus:border-secondary focus:ring-4 focus:ring-secondary/10" />
            </label>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-xs leading-5 text-muted">
                Required fields are marked with an asterisk. Submitting opens your email application.
              </p>
              <button type="submit" className="group inline-flex w-full shrink-0 cursor-pointer items-center justify-center gap-3 rounded-full bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-[0.08em] text-white transition-[background-color,box-shadow,transform] hover:-translate-y-0.5 hover:bg-primary-light hover:shadow-[0_10px_24px_rgba(255,100,46,0.28)] sm:w-auto">
                Send message
                <span className="grid size-7 place-items-center rounded-full bg-white text-charcoal transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">Contact information</p>
            <h2 className="mt-4 text-[clamp(2.75rem,5vw,5rem)] uppercase leading-[0.95] text-charcoal">Easy ways to reach us</h2>
          </div>

          <div className="relative z-10 mt-10 grid gap-4 md:grid-cols-3">
            {contactDetails.map((detail) => (
              <a key={detail.title} href={detail.href} target={detail.icon === "location" ? "_blank" : undefined} rel={detail.icon === "location" ? "noreferrer" : undefined} className="group flex min-w-0 items-start gap-4 rounded-xl border border-charcoal/10 bg-background p-5 transition-[border-color,box-shadow,transform] hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_16px_40px_rgba(34,34,34,0.09)] sm:p-6">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-charcoal text-primary-light transition-colors group-hover:bg-primary group-hover:text-white">
                  <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-[1.7]" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ContactIcon type={detail.icon} /></svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-secondary">{detail.title}</span>
                  <strong className="mt-1.5 block break-words text-sm font-semibold text-charcoal sm:text-base">{detail.value}</strong>
                  <span className="mt-1 block text-xs leading-5 text-muted">{detail.note}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-charcoal/10 bg-background shadow-[0_24px_70px_rgba(34,34,34,0.1)]">
            <iframe title="Orisyn Limited location in Dhaka, Bangladesh" src="https://www.google.com/maps?q=Dhaka%2C%20Bangladesh&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[22rem] w-full border-0 sm:h-[28rem] lg:h-[32rem]" />
          </div>
        </div>
      </section>
    </main>
  );
}
