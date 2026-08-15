const principles = [
  {
    title: "Safety First",
    description:
      "Careful planning and disciplined practices protect people, assets, and delivery.",
    icon: "shield",
  },
  {
    title: "Quality Assurance",
    description:
      "Consistent reviews and quality controls create dependable results at every stage.",
    icon: "quality",
  },
  {
    title: "Engineering Depth",
    description:
      "Integrated expertise turns complex technical challenges into practical solutions.",
    icon: "pencil",
  },
  {
    title: "On-Time Completion",
    description:
      "Clear schedules and proactive coordination keep every project moving forward.",
    icon: "clock",
  },
] as const;

function PrincipleIcon({
  type,
}: {
  type: (typeof principles)[number]["icon"];
}) {
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
    <section className="relative isolate overflow-hidden bg-surface py-14 sm:py-18 lg:py-22">
      <div className="absolute -right-32 -top-48 size-[34rem] rounded-full border border-secondary/10" />
      <div className="absolute -right-14 -top-36 size-[25rem] rounded-full border border-secondary/10" />
      <div className="absolute -bottom-64 -left-36 size-[30rem] rounded-full border border-primary/10" />
      <span className="absolute left-[5%] top-16 size-2 rounded-full bg-secondary/25" />
      <span className="absolute right-[6%] top-32 size-1.5 rounded-full bg-primary/25" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <SectionSubheading align="center">Our principles</SectionSubheading>
          <h2
            className="mx-auto mt-4 max-w-2xl text-[clamp(2.5rem,4.5vw,4.5rem)]
           uppercase leading-[0.96] text-charcoal text-center"
          >
            Better, together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
            From our first conversation to final handover, these four principles
            keep every project clear, carefully managed, and focused on the
            results that matter to you.
          </p>
          <span
            className="mx-auto mt-5 block h-0.5 w-12 bg-secondary"
            aria-hidden="true"
          />
        </div>

        <div className="mt-9 grid items-stretch gap-4 sm:mt-11 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">
          {principles.map((principle, index) => (
            <article
              key={principle.title}
              className="group relative flex min-h-56 flex-col items-start overflow-hidden rounded-xl border border-charcoal/10 bg-background p-5 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_45px_rgba(34,34,34,0.08)] sm:min-h-60 sm:p-6"
            >
              <span
                className={`absolute inset-x-0 top-0 h-1 ${index % 2 === 0 ? "bg-primary" : "bg-secondary"}`}
                aria-hidden="true"
              />
              <span
                className={`absolute right-3 top-3 size-1.5 rounded-full ${index % 2 === 0 ? "bg-secondary/25" : "bg-primary/25"}`}
                aria-hidden="true"
              />
              <span
                className={`grid size-11 shrink-0 place-items-center rounded-lg text-white transition-transform duration-300 group-hover:scale-105 ${index % 2 === 0 ? "bg-primary" : "bg-secondary"}`}
              >
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

              <div className="mt-5">
                <h3 className="text-xl uppercase leading-none text-charcoal transition-colors duration-200 group-hover:text-primary sm:text-2xl">
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
import SectionSubheading from "@/components/common/SectionSubheading";
