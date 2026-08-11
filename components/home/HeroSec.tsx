"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Civil engineering built to last",
    description:
      "Practical, dependable infrastructure designed around your needs and built for lasting performance.",
    image: "/hero-civil.jpg",
    alt: "Civil engineers reviewing construction plans on site",
  },
  {
    title: "Smarter power safer systems",
    description:
      "Efficient electrical and electronic solutions that keep buildings, industries, and infrastructure running safely.",
    image: "/hero-eee.png",
    alt: "Electrical engineer inspecting an industrial control system",
  },
  {
    title: "One team for every project",
    description:
      "Civil, electrical, and project specialists working together to turn complex plans into dependable results.",
    image: "/hero-integrated-engineering.png",
    alt: "Multidisciplinary engineering team reviewing plans",
  },
  {
    title: "Global sourcing reliable supply",
    description:
      "Straightforward import, export, and sourcing support that delivers the right materials when your project needs them.",
    image: "/banner_construction.jpg",
    alt: "Construction supply team reviewing plans on site",
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

      <div className="container relative z-10 flex h-full items-center py-10 sm:py-12 lg:py-14">
        <div className="w-full pr-5 sm:pl-2 lg:ml-[2vw] lg:w-1/2 lg:pl-0 lg:pr-10">
          <div aria-live="polite" aria-atomic="true">
            <h1 className="max-w-[12ch] text-[clamp(2.65rem,min(5.4vw,9vh),4.8rem)] leading-[0.98] tracking-[0] uppercase text-charcoal">
              {slides[active].title}
            </h1>
            <p className="mt-5 max-w-[30rem] text-sm leading-[1.7] tracking-[0.01em] text-muted sm:text-base lg:mt-6 lg:text-base">
              {slides[active].description}
            </p>
          </div>

          <div className="mt-6 flex w-fit flex-col items-start lg:mt-7">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full border border-primary bg-primary px-5 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-white shadow-sm transition-[background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary-light hover:bg-primary-light hover:shadow-[0_10px_24px_rgba(255,100,46,0.28)] sm:px-6 sm:py-3 sm:text-xs"
            >
              Start a project
              <span
                className="grid size-7 place-items-center rounded-full bg-white text-charcoal transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                &#8599;
              </span>
            </a>

            <div className="mt-3 flex h-4 items-center gap-2" aria-label="Choose a slide">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show slide ${index + 1}`}
                  aria-current={active === index ? "true" : undefined}
                  className="group grid h-4 w-8 place-items-center"
                >
                  <span
                    className={`h-0.5 bg-charcoal transition-[width,opacity] duration-300 ${active === index ? "w-8 opacity-100" : "w-5 opacity-35 group-hover:w-8 group-hover:opacity-70"}`}
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
