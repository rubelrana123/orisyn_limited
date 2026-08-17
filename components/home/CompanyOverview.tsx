import Image from "next/image";

const highlights = [
  {
    value: "04",
    label: "Engineering disciplines",
    icon: "layers",
  },
  {
    value: "360°",
    label: "Project support",
    icon: "compass",
  },
  {
    value: "100%",
    label: "Quality focused",
    icon: "shield",
  },
  {
    value: "01",
    label: "Integrated team",
    icon: "team",
  },
] as const;

function HighlightIcon({ type }: { type: (typeof highlights)[number]["icon"] }) {
  if (type === "compass") {
    return (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z" />
      </>
    );
  }

  if (type === "shield") {
    return <path d="M12 3 5 6v5c0 4.7 2.8 8.2 7 10 4.2-1.8 7-5.3 7-10V6l-7-3Zm-3 9 2 2 4-4" />;
  }

  if (type === "team") {
    return (
      <>
        <circle cx="9" cy="9" r="3" />
        <circle cx="17" cy="10" r="2" />
        <path d="M3.5 20c.4-4 2.2-6 5.5-6s5.1 2 5.5 6M15 15c3.2-.3 5 1.4 5.5 4" />
      </>
    );
  }

  return (
    <>
      <path d="m12 3 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4M4 17l8 4 8-4" />
    </>
  );
}

export default function CompanyOverview() {
  return (
    <section id="about" className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container grid items-stretch gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24">
        <div className="relative isolate hidden min-h-80 place-items-center overflow-hidden rounded-lg border border-charcoal/10 bg-surface px-8 py-14 shadow-[0_24px_70px_rgba(34,34,34,0.08)] sm:min-h-[26rem] lg:grid lg:min-h-full">
          <div className="absolute -left-20 -top-20 size-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-20 size-72 rounded-full bg-secondary/10 blur-3xl" />
          <svg
            viewBox="0 0 420 420"
            aria-hidden="true"
            className="absolute inset-0 size-full text-charcoal opacity-[0.035]"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle cx="210" cy="210" r="145" fill="none" stroke="currentColor" />
            <circle cx="210" cy="210" r="100" fill="none" stroke="currentColor" />
            <path d="M0 210h420M210 0v420M60 60l300 300M360 60 60 360" stroke="currentColor" />
          </svg>
          <div className="relative z-10 w-full max-w-md px-3 sm:px-6">
            <Image
              src="/brand/orisyn-logo.png"
              alt="Orisyn Limited"
              width={1748}
              height={382}
              sizes="(max-width: 1024px) 70vw, 36vw"
              className="h-auto w-full object-contain"
            />
          </div>
          <span className="absolute bottom-6 left-7 text-[0.6rem] font-bold uppercase tracking-[0.24em] text-muted/70">
            Engineering with purpose
          </span>
        </div>

        <div className="flex flex-col justify-center py-2 lg:py-8">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
            <span className="h-px w-7 bg-primary" aria-hidden="true" />
            Company overview
          </p>
          <h2 className="mt-5 max-w-[13ch] text-[clamp(2.75rem,5vw,5rem)] uppercase leading-[0.96] text-charcoal">
            One vision. Every engineering solution.
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
            Orisyn Limited brings civil, electrical, mechanical, and project
            engineering expertise together under one roof. We turn complex
            requirements into practical, dependable solutions—from early
            planning and sourcing through delivery and long-term support.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-6 sm:gap-x-10">
            {highlights.map((highlight) => (
              <div key={highlight.label} className="flex items-center gap-3 sm:gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-md bg-surface text-primary shadow-sm sm:size-12">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="size-5 fill-none stroke-current stroke-[1.7]"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <HighlightIcon type={highlight.icon} />
                  </svg>
                </span>
                <span>
                  <strong className="block text-xl font-bold leading-none text-charcoal sm:text-2xl">
                    {highlight.value}
                  </strong>
                  <span className="mt-1 block text-[0.68rem] leading-4 text-muted sm:text-xs">
                    {highlight.label}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-full border border-primary bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.06em] text-white transition-[background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary-light hover:bg-primary-light hover:shadow-[0_10px_24px_rgba(255,100,46,0.28)]"
            >
              More About Us
              <span
                className="grid size-7 place-items-center rounded-full bg-white text-charcoal transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                &#8599;
              </span>
            </a>
            <a
              href="#"
              className="hidden border-b border-charcoal/40 pb-1 text-xs font-bold uppercase tracking-[0.06em] text-charcoal transition-colors duration-200 hover:border-primary hover:text-primary lg:inline-block"
            >
              Certifications
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
