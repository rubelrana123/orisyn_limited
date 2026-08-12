"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const directors = [
  {
    id: 1,
    name: "Md Mehedi Hasan",
    role: "Managing Director",
    image: "/director/md-mehedi-hasan-white.png",
    href: "/about/md-mehedi-hasan",
    description:
      "Leading Orisyn Limited with a practical vision for dependable engineering, responsible growth, and lasting value for every client.",
    details:
      "His leadership keeps the company focused on quality, accountability, and practical solutions that serve clients for the long term.",
  },
  {
    id: 2,
    name: "Sabbir Ahmed",
    role: "Director",
    image: "/director/sabbirAhmed.jpeg",
    href: "/about/sabbir-ahmed",

    description:
      "Supporting the company’s strategic direction with a focus on strong partnerships, disciplined delivery, and sustainable progress.",
    details:
      "He contributes to business planning and delivery oversight, helping teams maintain clear priorities and dependable standards.",
  },
] as const;

export default function BoardOfDirector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDirector = directors[activeIndex];

  const selectDirector = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % directors.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="leadership"
      aria-labelledby="board-heading"
      className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -right-28 top-1/2 size-96 -translate-y-1/2 rounded-full border-[5rem] border-primary/[0.045] sm:size-[34rem]"
      />

      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10 xl:gap-20">
          <div
            className="order-2 lg:order-1"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="flex items-center gap-3">
              <span className="h-1 w-8 bg-primary" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
                Leadership team
              </p>
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-secondary">
              {activeDirector.role}
            </p>
            <h2
              id="board-heading"
              className="mt-3 max-w-xl text-[clamp(3.25rem,7vw,6.5rem)] uppercase text-charcoal"
            >
              {activeDirector.name}
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
              {activeDirector.description}
            </p>
            <Link
              href={activeDirector.href}
              className="mt-6 inline-block border-b-2 border-primary pb-1 text-sm font-bold uppercase tracking-[0.14em] text-charcoal transition-colors duration-200 hover:text-primary"
            >
              See more
            </Link>

            <div className="mt-9 flex items-center">
              <div className="flex items-center gap-2" aria-label="Choose a director">
                {directors.map((director, index) => (
                  <button
                    type="button"
                    key={director.id}
                    onClick={() => selectDirector(index)}
                    aria-label={`Show ${director.name}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                    className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-8 bg-primary"
                        : "w-2.5 bg-charcoal/20 hover:bg-charcoal/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 flex min-h-[20rem] items-center justify-center lg:order-2 lg:min-h-[34rem]">
            <div className="relative h-[20rem] w-full max-w-[37rem] sm:h-[27rem] lg:h-[34rem]">
              {directors.map((director, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    type="button"
                    key={director.id}
                    onClick={() => selectDirector(index)}
                    aria-label={`View ${director.name}, ${director.role}`}
                    aria-pressed={isActive}
                    className={`absolute top-1/2 cursor-pointer overflow-hidden rounded-md border-[0.45rem] bg-surface shadow-[0_24px_70px_rgba(34,34,34,0.16)] transition-[width,height,left,transform,opacity] duration-700 ease-out sm:border-[0.65rem] ${
                      isActive
                        ? "left-[6%] z-20 size-[17rem] -translate-y-1/2 border-surface opacity-100 sm:left-[4%] sm:size-[24rem] lg:size-[30rem]"
                        : "left-[64%] z-10 size-[10rem] -translate-x-1/2 -translate-y-1/2 border-background opacity-65 hover:opacity-90 sm:left-[76%] sm:size-[15rem] lg:size-[18rem]"
                    }`}
                  >
                    {director.image ? (
                      <Image
                        src={director.image}
                        alt=""
                        fill
                        sizes="(max-width: 639px) 272px, (max-width: 1023px) 384px, 480px"
                        className="object-cover"
                      />
                    ) : (
                      <span className="absolute inset-0 grid place-items-center bg-charcoal text-[clamp(3rem,8vw,7rem)] font-display uppercase text-surface">
                        SA
                      </span>
                    )}
                    <span className="sr-only">
                      {director.name}, {director.role}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
