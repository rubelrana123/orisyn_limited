const principles = [
  {
    title: "Safety First",
    description:
      "Responsible planning and disciplined site practices keep people, assets, and every stage of delivery protected.",
    icon: "shield",
  },
  {
    title: "Quality Assurance",
    description:
      "Clear reviews and consistent quality controls help us deliver dependable work across every project phase.",
    icon: "quality",
  },
  {
    title: "Engineering Depth",
    description:
      "Civil, electrical, mechanical, and project expertise come together to solve complex challenges efficiently.",
    icon: "pencil",
  },
  {
    title: "On-Time Completion",
    description:
      "Practical schedules, close coordination, and proactive decisions keep delivery moving with confidence.",
    icon: "clock",
  },
] as const;

function PrincipleIcon({ type }: { type: (typeof principles)[number]["icon"] }) {
  if (type === "quality") {
    return (
      <>
        <path d="m12 3 2.2 1.5 2.7-.1.8 2.6 2.2 1.5-.9 2.5.9 2.5-2.2 1.5-.8 2.6-2.7-.1L12 21l-2.2-1.5-2.7.1-.8-2.6-2.2-1.5.9-2.5-.9-2.5L6.3 9l.8-2.6 2.7.1L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    );
  }

  if (type === "pencil") {
    return (
      <>
        <path d="m4 20 3.5-.8L19 7.7a2.1 2.1 0 0 0-3-3L4.5 16.2 4 20Z" />
        <path d="m14.5 6.2 3.3 3.3" />
      </>
    );
  }

  if (type === "clock") {
    return (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    );
  }

  return (
    <>
      <path d="M12 3 5 6v5c0 4.7 2.8 8.2 7 10 4.2-1.8 7-5.3 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  );
}

export default function CoreWork() {
  return (
    <section className="relative isolate overflow-hidden bg-surface py-16 sm:py-20 lg:py-24">
      <div className="absolute -right-32 -top-48 size-[34rem] rounded-full border border-secondary/10" />
      <div className="absolute -right-14 -top-36 size-[25rem] rounded-full border border-secondary/10" />
      <div className="absolute -bottom-64 -left-36 size-[30rem] rounded-full border border-primary/10" />
      <span className="absolute left-[5%] top-16 size-2 rounded-full bg-secondary/25" />
      <span className="absolute right-[6%] top-32 size-1.5 rounded-full bg-primary/25" />

      <div className="container relative">

        <div className="mx-auto max-w-3xl text-center">
        <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
          <span className="h-px w-7 bg-primary" aria-hidden="true" />
          Our core work
          <span className="h-px w-7 bg-primary" aria-hidden="true" />
        </p>
          <h2 className="mt-5 text-[clamp(2.75rem,5vw,5rem)] uppercase leading-[0.96] text-charcoal">
            {/* Mission, vision &amp; values
             */}
              Built on engineering rigor and operational discipline
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Four principles guide every solution and project we deliver.
          </p>
          <span className="mx-auto mt-6 block h-0.5 w-12 bg-primary" aria-hidden="true" />
        </div>        

        <div className="mt-10 grid items-stretch gap-5 sm:mt-12 sm:grid-cols-2 lg:mt-14 xl:grid-cols-4">
          {principles.map((principle, index) => (
            <article
              key={principle.title}
              className="group relative flex min-h-64 flex-col items-start rounded-md border border-charcoal/10 bg-background p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_45px_rgba(34,34,34,0.08)] sm:min-h-72 sm:p-7"
            >
              <span
                className={`absolute right-3 top-3 size-1.5 rounded-full ${index % 2 === 0 ? "bg-secondary/25" : "bg-primary/25"}`}
                aria-hidden="true"
              />
              <span className="grid size-12 shrink-0 place-items-center rounded-md bg-charcoal text-white transition-[background-color,transform] duration-300 group-hover:scale-105 group-hover:bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-5 fill-none stroke-current stroke-[1.7]"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <PrincipleIcon type={principle.icon} />
                </svg>
              </span>

              <div className="mt-6">
                <h3 className="font-sans text-lg font-bold uppercase leading-snug text-charcoal transition-colors duration-200 group-hover:text-primary sm:text-xl">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {principle.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
