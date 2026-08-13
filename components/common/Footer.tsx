import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  ["Home", "/"],
  ["About us", "/about"],
  ["Contact us", "/contact"],
  ["Our business", "/business"],
  ["Projects", "/#projects"],
] as const;

const supportLinks = [
  ["Civil engineering", "/business/civil-construction"],
  ["EEE engineering", "/business/electrical-electronic-engineering"],
  ["Mechanical engineering", "/business/mechanical-engineering"],
  ["Project engineering", "/business/project-engineering"],
] as const;

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-white">
      <div className="h-1 bg-primary" />

      <div className="container">
        <div className="flex flex-col gap-8 border-b border-white/10 py-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:py-16">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Have a project in mind?
            </p>
            <h2 className="max-w-3xl text-[clamp(2.75rem,6vw,5.75rem)] leading-[0.95] uppercase text-white">
              Your next engineering project starts here.
            </h2>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-primary bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition-[background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary-light hover:bg-primary-light hover:shadow-[0_10px_24px_rgba(255,100,46,0.28)] sm:px-7 sm:py-3.5"
          >
            Contact us
            <span className="grid size-7 place-items-center rounded-full bg-white text-charcoal transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>

        <div className="grid gap-12 py-12 sm:grid-cols-2 sm:py-14 lg:grid-cols-[1.35fr_0.8fr_1fr_1.2fr] lg:gap-10 lg:py-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex rounded-md bg-white px-4 py-3 transition-transform duration-200 hover:-translate-y-0.5"
              aria-label="Orisyn home"
            >
              <Image
                src="/brand/orisyn-logo.png"
                alt="Orisyn Limited"
                width={1748}
                height={382}
                sizes="210px"
                className="h-auto w-[210px]"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              Integrated civil, electrical, mechanical, and project engineering
              expertise for dependable real-world solutions.
            </p>

            <div className="mt-6 flex gap-2">
              {[
                ["Facebook", "f"],
                ["LinkedIn", "in"],
                ["Instagram", "◎"],
              ].map(([label, mark]) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-xs font-bold text-white/70 transition-colors hover:border-primary hover:bg-primary hover:text-white"
                >
                  {mark}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-xl uppercase text-white">Quick links</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {quickLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-primary">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Business areas">
            <h3 className="text-xl uppercase text-white">Business</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {supportLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-primary">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xl uppercase text-white">Get in touch</h3>
            <address className="mt-5 space-y-4 text-sm not-italic leading-6 text-white/60">
              <a href="tel:+8801746644478" className="flex gap-3 transition-colors hover:text-primary">
                <span aria-hidden="true" className="text-primary">●</span>
                +8801746644478
              </a>
              <a href="mailto:roottop.ltd@gmail.com" className="flex gap-3 transition-colors hover:text-primary">
                <span aria-hidden="true" className="text-primary">●</span>
                roottop.ltd@gmail.com
              </a>
              <p className="flex gap-3">
                <span aria-hidden="true" className="text-primary">●</span>
                Dhaka, Bangladesh
              </p>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Orisyn Limited. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-white">Privacy policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
