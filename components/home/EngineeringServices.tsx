const services = [
  {
    number: "01",
    title: "Civil Engineering",
    description:
      "Structural, infrastructure, and site-development solutions planned for safety, durability, and lasting value.",
    icon: "building",
  },
  {
    number: "02",
    title: "EEE Engineering",
    description:
      "Reliable electrical, electronic, power, and control systems designed for efficient modern operations.",
    icon: "bolt",
  },
  {
    number: "03",
    title: "Mechanical Engineering",
    description:
      "Practical HVAC, machinery, piping, and building-service systems engineered for dependable performance.",
    icon: "gear",
  },
  {
    number: "04",
    title: "Project Engineering",
    description:
      "Integrated planning, technical coordination, and delivery support from initial concept through completion.",
    icon: "plan",
  },
] as const;

function ServiceIcon({ type }: { type: (typeof services)[number]["icon"] }) {
  if (type === "bolt") {
    return <path d="M13.5 2.5 6 13h5l-.5 8.5L18 10h-5l.5-7.5Z" />;
  }

  if (type === "gear") {
    return (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M9.7 2.8h4.6l.6 2.3 2 .9 2-1.2 3.2 3.3-1.2 2 .9 2 .2.1v4.5l-2.3.6-.9 2 1.2 2-3.3 3.2-2-1.2-2 .9-.6 2.3H9.7l-.6-2.3-2-.9-2 1.2-3.2-3.3 1.2-2-.9-2-2.3-.6v-4.5l2.3-.6.9-2-1.2-2 3.3-3.2 2 1.2 2-.9.5-2.3Z" />
      </>
    );
  }

  if (type === "plan") {
    return (
      <>
        <path d="M4 3h11l5 5v13H4V3Z" />
        <path d="M15 3v5h5M8 12h8M8 16h6" />
      </>
    );
  }

  return (
    <>
      <path d="M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6" />
      <path d="M8 11h2M14 11h2" />
    </>
  );
}

export default function EngineeringServices() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-surface py-20 sm:py-24 lg:py-32"
    >
      <div className="container relative overflow-hidden rounded-sm  bg-surface px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <svg
          aria-hidden="true"
          viewBox="0 0 160 240"
          className="pointer-events-none absolute -left-12 top-8 hidden h-56 w-40 text-secondary opacity-[0.08] sm:block lg:-left-8 lg:top-10 lg:h-64 lg:w-44"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1.25">
            {Array.from({ length: 5 }).map((_, row) =>
              Array.from({ length: 3 }).map((__, column) => (
                <path
                  key={`${row}-${column}`}
                  d="m25 0 22 13v26L25 52 3 39V13L25 0Z"
                  transform={`translate(${column * 43} ${row * 39})`}
                />
              )),
            )}
          </g>
        </svg>

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
            What we do
          </p>
          <h2 className="text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.95] uppercase text-charcoal">
            Engineering expertise for every challenge
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
            Orisyn Limited brings specialist disciplines together to create
            safe, efficient, and practical engineering solutions from concept to
            delivery.
          </p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.number}
              className="group border-t border-charcoal/15 pt-6"
            >
              <div className="mb-6 flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-full bg-background text-charcoal transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="size-5 fill-none stroke-current stroke-[1.6]"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <ServiceIcon type={service.icon} />
                  </svg>
                </span>
                <span className="text-xs font-semibold tracking-[0.16em] text-muted/70">
                  {service.number}
                </span>
              </div>

              <h3 className="text-2xl leading-none uppercase text-charcoal transition-colors duration-200 group-hover:text-primary sm:text-3xl">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
