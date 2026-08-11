import Image from "next/image";

const services = [
  {
    title: "Civil Construction",
    description: "Structures and site works built for safety and long-term value.",
    image: "/banner_construction.jpg",
    imageAlt: "Construction team coordinating work on site",
    position: "object-center",
  },
  {
    title: "Electrical Engineering",
    description: "Reliable power, control, and electronic systems for modern operations.",
    image: "/hero-eee.png",
    imageAlt: "Engineer inspecting an industrial electrical system",
    position: "object-center",
  },
  {
    title: "Mechanical Engineering",
    description: "Efficient machinery, HVAC, piping, and building-service solutions.",
    image: "/hero-integrated-engineering.png",
    imageAlt: "Multidisciplinary engineers reviewing technical plans",
    position: "object-center",
  },
  {
    title: "Project Engineering",
    description: "Coordinated planning and delivery support from concept to completion.",
    image: "/hero-civil.jpg",
    imageAlt: "Civil engineers reviewing project plans",
    position: "object-[58%_center]",
  },
  {
    title: "Import, Export & Supply",
    description: "Dependable sourcing and supply support for every project requirement.",
    image: "/banner_construction.jpg",
    imageAlt: "Construction materials and equipment on an active project",
    position: "object-[72%_center]",
  },
] as const;

export default function ServicesShowcase() {
  return (
    <section id="services" className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
              <span className="h-px w-7 bg-primary" aria-hidden="true" />
              Our services
            </p>
            <h2 className="mt-5 text-[clamp(2.75rem,5vw,5rem)] uppercase leading-[0.96] text-charcoal">
              Engineering value through every solution
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              Integrated engineering and supply expertise across every phase of
              the project lifecycle.
            </p>
          </div>

          <a
            href="#services-grid"
            className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-primary bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-[0.06em] text-white transition-[background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary-light hover:bg-primary-light hover:shadow-[0_10px_24px_rgba(255,100,46,0.28)]"
          >
            All services
            <span
              className="grid size-7 place-items-center rounded-full bg-white text-charcoal transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              &#8599;
            </span>
          </a>
        </div>

        <div
          id="services-grid"
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`group overflow-hidden rounded-md border border-charcoal/10 bg-surface transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_20px_50px_rgba(34,34,34,0.1)] ${index > 2 ? "lg:col-span-1" : ""}`}
            >
              <div className="relative min-h-64 overflow-hidden sm:min-h-72">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover transition-transform duration-500 group-hover:scale-105 ${service.position}`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(34,34,34,0.9)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                  <span className="mb-3 block text-[0.65rem] font-bold uppercase tracking-[0.16em] text-accent">
                    0{index + 1}
                  </span>
                  <h3 className="text-2xl uppercase leading-none sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-xs leading-5 text-white/75 sm:text-sm">
                    {service.description}
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                aria-label={`Explore ${service.title}`}
                className="flex items-center justify-between px-6 py-4 text-xs font-bold uppercase tracking-[0.06em] text-charcoal transition-colors duration-200 group-hover:text-primary sm:px-7"
              >
                Explore service
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  &#8594;
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
