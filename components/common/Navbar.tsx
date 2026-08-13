"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Business", href: "/business" },
  { label: "Gallery", href: "#gallery", submenu: true },
  { label: "Contact us", href: "/contact" },
];

type NavLabel = (typeof navItems)[number]["label"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<NavLabel>("Home");

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
          {/* <div className="container flex min-h-10 flex-wrap items-center justify-center gap-x-5 gap-y-1 py-2 text-[10px] font-medium tracking-[0.06em] text-muted sm:justify-between sm:text-[11px]">
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
          </div> */}
        </div>
      </div>

      <div className="container flex h-[72px] items-center justify-between gap-5 sm:h-20 lg:h-[88px] lg:gap-8">
        <Link
          href="/"
          className="group flex self-stretch shrink-0 items-center pr-3 sm:pr-6 lg:min-w-[250px] lg:border-r lg:border-charcoal/10 lg:pr-10"
          aria-label="Orisyn home"
        >
          <Image
            src="/brand/orisyn-logo.png"
            alt="Orisyn Limited"
            width={1748}
            height={382}
            priority
            sizes="(max-width: 640px) 170px, 220px"
            className="h-auto w-[170px] transition-[transform,filter] duration-300 group-hover:scale-[1.025] group-hover:brightness-105 sm:w-[205px] lg:w-[220px]"
          />
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
              className={`relative py-3 text-xs font-semibold uppercase tracking-[0.04em] transition-colors duration-200 after:absolute after:bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-primary after:transition-transform after:duration-200 ${activeItem === item.label ? "text-primary after:scale-x-100" : "text-charcoal/90 after:scale-x-0 hover:text-primary hover:after:scale-x-100"}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Link
          href="/contact"
          className="group ml-2 hidden items-center justify-center gap-2.5 overflow-hidden rounded-full border border-primary bg-primary px-7 py-3 text-xs font-semibold uppercase tracking-[0.06em] text-white shadow-sm transition-[background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary-light hover:bg-primary-light hover:shadow-[0_10px_24px_rgba(255,100,46,0.28)] active:translate-y-0 active:bg-primary lg:inline-flex"
        >
          Free consult
          <span
            className="grid size-6 place-items-center rounded-full bg-white text-charcoal transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          >
            &#8599;
          </span>
        </Link>

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
                className={`rounded px-4 py-3 text-sm font-semibold uppercase transition-[background-color,color,padding] duration-200 hover:bg-background hover:pl-5 hover:text-primary ${activeItem === item.label ? "bg-primary/10 text-primary" : "text-charcoal"}`}
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/contact"
              className="group relative mt-2 overflow-hidden rounded border border-primary bg-primary px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.04em] text-white transition-[background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-primary-light hover:bg-primary-light hover:shadow-[0_10px_24px_rgba(255,100,46,0.25)]"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                Free consult
                <span
                  className="grid size-6 place-items-center rounded-full bg-white text-charcoal transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                >
                  &#8599;
                </span>
              </span>
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
