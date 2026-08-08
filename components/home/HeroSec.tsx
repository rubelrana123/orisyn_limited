"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Civil engineering",
    title: "Building stronger foundations",
    description:
      "Dependable civil infrastructure designed and delivered for people, progress, and the future.",
    image: "/hero-civil.jpg",
    alt: "Civil engineers reviewing construction plans on site",
  },
  {
    eyebrow: "EEE engineering",
    title: "Powering smarter systems",
    description:
      "Safe, efficient electrical and electronic solutions for modern industries, buildings, and infrastructure.",
    image: "/hero-eee.png",
    alt: "Electrical engineer inspecting an industrial control system",
  },
  {
    eyebrow: "Integrated engineering",
    title: "Engineering every possibility",
    description:
      "Civil, electrical, and project expertise working together to move ambitious ideas forward.",
    image: "/hero-integrated-engineering.png",
    alt: "Multidisciplinary engineering team reviewing plans",
  },
] as const;

export default function HeroSec() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      6000,
    );

    return () => window.clearInterval(timer);
  }, [paused]);

  const step = (direction: number) => {
    setActive(
      (current) => (current + direction + slides.length) % slides.length,
    );
  };

  return (
    <section
      id="home"
      aria-label="Orisyn engineering services"
      aria-roledescription="carousel"
      className="relative isolate h-[calc(100svh-7rem)] overflow-hidden bg-surface sm:h-[calc(100svh-7.5rem)] lg:h-[calc(100svh-8rem)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          aria-hidden={active !== index}
          className={`absolute inset-0 transition-opacity duration-700 ${active === index ? "opacity-100" : "pointer-events-none opacity-0"}`}
        >
          <Image
            src={slide.image}
            alt={active === index ? slide.alt : ""}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-[62%_center] sm:object-[58%_center] lg:object-center"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.92)_42%,rgba(255,255,255,0.18)_72%,transparent_100%)]" />

      <div className="container relative z-10 flex h-full items-center py-8 sm:py-10 lg:py-12">
        <div className="w-full max-w-136 pr-5 lg:max-w-152 lg:pr-0">
          <p className="mb-2 flex items-center gap-2.5 text-[0.68rem] font-bold uppercase leading-none tracking-[0.18em] text-primary sm:text-xs lg:text-sm">
            <span className="size-2.5 rounded-full bg-accent" />
            Orisyn Limited
          </p>

          <div aria-live="polite" aria-atomic="true">
            <p className="mb-2.5 text-xs font-semibold uppercase leading-none tracking-[0.16em] text-secondary sm:text-sm lg:text-base">
              {slides[active].eyebrow}
            </p>
            <h1 className="max-w-[9.5ch] text-[clamp(2.75rem,min(6.5vw,10.5vh),5.75rem)] leading-[0.92] tracking-[-0.025em] uppercase text-charcoal">
              {slides[active].title}
            </h1>
            <p className="mt-5 max-w-[31rem] text-sm leading-[1.65] text-muted sm:text-base lg:text-lg">
              {slides[active].description}
            </p>
          </div>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-3 rounded-full border border-primary bg-primary px-5 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-white shadow-sm transition-colors duration-200 hover:border-charcoal hover:bg-charcoal sm:px-6 sm:py-3 sm:text-xs"
          >
            Start a project
            <span
              className="grid size-7 place-items-center rounded-full bg-white text-charcoal"
              aria-hidden="true"
            >
              &#8599;
            </span>
          </a>
        </div>
      </div>

      <div className="container pointer-events-none absolute inset-x-0 bottom-5 z-20 flex justify-end sm:bottom-7 lg:bottom-8">
        <div className="pointer-events-auto flex gap-2">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous slide"
            className="grid size-10 place-items-center rounded-full border border-charcoal/20 bg-white/90 text-charcoal shadow-sm backdrop-blur-sm transition-colors hover:border-charcoal hover:bg-charcoal hover:text-white sm:size-11"
          >
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="size-4 fill-none stroke-current stroke-[1.8]"
            >
              <path d="m12.5 4.5-5.5 5.5 5.5 5.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next slide"
            className="grid size-10 place-items-center rounded-full border border-charcoal bg-charcoal text-white shadow-sm transition-colors hover:border-primary hover:bg-primary sm:size-11"
          >
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="size-4 fill-none stroke-current stroke-[1.8]"
            >
              <path d="m7.5 4.5 5.5 5.5-5.5 5.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
