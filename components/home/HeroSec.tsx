"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Civil solutions built to last",
    description:
      "Safe, durable construction and infrastructure planned for reliable performance and lasting value.",
    image: "/hero/civil-construction-v2.png",
    alt: "Civil engineers reviewing construction plans on site",
    position: "object-center",
  },
  {
    title: "Reliable power. Safer systems.",
    description:
      "Integrated electrical and electronic systems designed for safe, efficient, uninterrupted operation.",
    image: "/hero/electrical-engineering-v2.png",
    alt: "Electrical engineer inspecting an industrial control system",
    position: "object-center",
  },
  {
    title: "One team. Complete coordination.",
    description:
      "Multidisciplinary planning and project support that keeps people, resources, and delivery aligned.",
    image: "/hero/project-engineering-v2.png",
    alt: "Multidisciplinary engineering team reviewing plans",
    position: "object-center",
  },
  {
    title: "Global sourcing. Reliable supply.",
    description:
      "Quality materials and equipment sourced, coordinated, and delivered for every project requirement.",
    image: "/hero/global-supply-v2.png",
    alt: "Construction supply team reviewing plans on site",
    position: "object-center",
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
      className="relative isolate h-[clamp(34rem,calc(100svh-4.5rem),48rem)] overflow-hidden bg-surface sm:h-[clamp(36rem,calc(100svh-5rem),50rem)] lg:h-[clamp(38rem,calc(100svh-5.5rem),52rem)]"
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
            className={`object-cover ${slide.position}`}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.99)_0%,rgba(255,255,255,0.96)_58%,rgba(255,255,255,0.72)_78%,rgba(255,255,255,0.35)_100%)] sm:bg-[linear-gradient(90deg,rgba(255,255,255,0.99)_0%,rgba(255,255,255,0.94)_48%,rgba(255,255,255,0.3)_75%,transparent_100%)] lg:bg-[linear-gradient(90deg,rgba(255,255,255,0.99)_0%,rgba(255,255,255,0.96)_37%,rgba(255,255,255,0.5)_50%,rgba(255,255,255,0.08)_66%,transparent_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/55 to-transparent sm:hidden" />

      <div className="container relative z-10 flex h-full items-center pb-20 pt-10 sm:pb-20 sm:pt-12 lg:pb-16 lg:pt-14">
        <div className="w-full max-w-[35rem] pr-3 sm:max-w-[36rem] sm:pr-6 lg:ml-[1.5vw] lg:w-[46%] lg:max-w-[38rem] lg:pr-8 xl:ml-[2vw]">
          <div aria-live="polite" aria-atomic="true">
            <div className="flex h-[11.5rem] items-end sm:h-[13.5rem] lg:h-[14.5rem]">
              <h1 className="max-w-[11ch] text-balance text-[clamp(3rem,12vw,4.25rem)] leading-[0.94] tracking-[-0.015em] uppercase text-charcoal sm:text-[clamp(3.6rem,7.4vw,4.8rem)] lg:text-[clamp(3.75rem,5vw,5.15rem)]">
                {slides[active].title}
              </h1>
            </div>
            <div className="mt-5 h-14 sm:mt-6 sm:h-16 lg:mt-7">
              <p className="max-w-[29rem] text-sm leading-7 text-muted sm:text-base sm:leading-8">
                {slides[active].description}
              </p>
            </div>
          </div>

          <div className="mt-7 flex w-fit flex-col items-start sm:mt-8 lg:mt-9">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center gap-3 rounded-full border border-primary bg-primary px-5 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-white shadow-sm transition-[background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary-light hover:bg-primary-light hover:shadow-[0_10px_24px_rgba(255,100,46,0.28)] sm:px-6 sm:text-xs"
            >
              Start a project
              <span
                className="grid size-7 place-items-center rounded-full bg-white text-charcoal transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                &#8599;
              </span>
            </Link>

            <div className="mt-4 flex h-5 items-center gap-1.5" aria-label="Choose a slide">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show slide ${index + 1}`}
                  aria-current={active === index ? "true" : undefined}
                  className="group grid h-5 w-8 cursor-pointer place-items-center"
                >
                  <span
                    className={`h-0.5 rounded-full transition-[width,background-color,opacity] duration-300 ${active === index ? "w-8 bg-primary opacity-100" : "w-5 bg-secondary opacity-45 group-hover:w-8 group-hover:bg-primary-light group-hover:opacity-100"}`}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </div>
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
