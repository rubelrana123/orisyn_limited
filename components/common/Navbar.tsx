"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about" },
  { label: "Our services", href: "#services" },
  { label: "Pages", href: "#pages", submenu: true },
  { label: "Contact us", href: "#contact" },
];

type NavLabel = (typeof navItems)[number]["label"];

function SocialIcon({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="grid size-5 place-items-center text-charcoal transition-colors duration-200 hover:text-primary"
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<NavLabel>("Pages");

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-charcoal/10 bg-surface/95 text-charcoal backdrop-blur-md transition-shadow duration-300 ${isScrolled ? "shadow-[0_10px_30px_rgba(34,34,34,0.08)]" : ""}`}
    >
      <div
        className={`grid overflow-hidden border-charcoal/10 transition-[grid-template-rows,opacity,border-color] duration-300 ${isScrolled ? "grid-rows-[0fr] border-transparent opacity-0" : "grid-rows-[1fr] border-b opacity-100"}`}
      >
        <div className="min-h-0">
          <div className="container flex min-h-10 flex-wrap items-center justify-center gap-x-5 gap-y-1 py-2 text-[10px] font-medium tracking-[0.06em] text-muted sm:justify-between sm:text-[11px]">
            <div className="flex items-center gap-2">
              <SocialIcon label="Facebook">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-4 fill-current"
                >
                  <path d="M12 2a10 10 0 0 0-1.56 19.88v-7H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.88h-2.33v7A10 10 0 0 0 12 2Z" />
                </svg>
              </SocialIcon>
              <span aria-hidden="true" className="h-4 w-px bg-charcoal/20" />
              <SocialIcon label="Instagram">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-4 fill-none stroke-current stroke-2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.4"
                    cy="6.6"
                    r="1"
                    className="fill-current stroke-none"
                  />
                </svg>
              </SocialIcon>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 sm:gap-x-7">
              <a
                href="tel:+1234567874"
                className="flex items-center gap-2 transition-colors duration-200 hover:text-primary"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-3.5 fill-current"
                >
                  <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm5 18.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4ZM7 5v11h10V5H7Z" />
                </svg>
                +1 (234)-567-874
              </a>
              <a
                href="mailto:hello@orisyn.com"
                className="flex items-center gap-2 transition-colors duration-200 hover:text-primary"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-3.5 fill-current"
                >
                  <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm5 18.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4ZM7 5v11h10V5H7Z" />
                </svg>
                hello@orisyn.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex h-[72px] items-center justify-between gap-5 sm:h-20 lg:h-[88px] lg:gap-8">
        <Link
          href="/"
          className="flex self-stretch shrink-0 items-center gap-2.5 pr-3 sm:gap-3 sm:pr-6 lg:min-w-[250px] lg:border-r lg:border-charcoal/10 lg:pr-10"
          aria-label="Orisyn home"
        >
          <svg
            viewBox="0 0 48 48"
            aria-hidden="true"
            className="size-9 sm:size-10"
          >
            <path
              d="M5 38V25h8v13M13 38V17h9v21M22 38V9h10v29"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="2"
            />
            <path
              d="M28 7h6a11 11 0 0 1 0 22h-5v9H17V17h11V7Zm1 10v8h5a4 4 0 1 0 0-8h-5Z"
              fill="var(--color-charcoal)"
            />
          </svg>
          <span className="font-display text-[1.7rem] leading-none tracking-[-0.02em] sm:text-3xl">
            Orisyn
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="ml-auto hidden items-center gap-8 lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActiveItem(item.label)}
              aria-current={activeItem === item.label ? "page" : undefined}
              className={`flex items-center gap-1.5 py-3 text-xs font-semibold uppercase tracking-[0.02em] transition-colors duration-200 hover:text-primary ${activeItem === item.label ? "text-charcoal" : "text-charcoal/90"}`}
            >
              {item.label}
              {activeItem === item.label && (
                <svg
                  viewBox="0 0 12 8"
                  aria-hidden="true"
                  className="w-2.5 fill-none stroke-primary stroke-2 transition-transform duration-200"
                >
                  <path d="m1 1 5 5 5-5" />
                </svg>
              )}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="ml-2 hidden items-center justify-center rounded-full border border-primary bg-primary px-7 py-3 text-xs font-semibold uppercase tracking-[0.04em] text-white shadow-sm transition-colors duration-200 hover:border-charcoal hover:bg-charcoal hover:text-white active:bg-charcoal/90 lg:inline-flex"
        >
          Free consult
        </a>

        <details className="group relative lg:hidden">
          <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-full bg-charcoal text-white transition-colors duration-200 hover:bg-primary marker:content-none sm:size-11">
            <span className="sr-only">Toggle navigation menu</span>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="size-5 fill-none stroke-current stroke-2"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </summary>
          <nav
            className="absolute right-0 top-14 flex w-64 flex-col rounded-md border border-charcoal/10 bg-surface p-3 shadow-xl"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                aria-current={activeItem === item.label ? "page" : undefined}
                className={`flex items-center justify-between rounded px-4 py-3 text-sm font-semibold uppercase transition-colors duration-200 hover:bg-background hover:text-primary ${activeItem === item.label ? "text-primary" : "text-charcoal"}`}
              >
                {item.label}
                {activeItem === item.label && (
                  <svg
                    viewBox="0 0 12 8"
                    aria-hidden="true"
                    className="w-2.5 fill-none stroke-primary stroke-2"
                  >
                    <path d="m1 1 5 5 5-5" />
                  </svg>
                )}
              </a>
            ))}
            <a
              href="#contact"
              className="relative mt-2 overflow-hidden rounded border border-primary bg-primary px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.03em] text-white transition-colors duration-300 after:absolute after:inset-0 after:origin-left after:scale-x-0 after:rounded-[inherit] after:bg-charcoal after:transition-transform after:duration-300 after:ease-out hover:border-charcoal hover:after:scale-x-100"
            >
              <span className="relative z-10">Free consult</span>
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
