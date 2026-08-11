import Image from "next/image";

const values = [
  {
    name: "Integrity",
    description: "We act honestly, responsibly, and transparently.",
  },
  {
    name: "Excellence",
    description: "We pursue quality in every solution and detail.",
  },
  {
    name: "Innovation",
    description: "We apply practical ideas and modern engineering methods.",
  },
  {
    name: "Sustainability",
    description: "We consider long-term social and environmental value.",
  },
  {
    name: "Safety",
    description: "We protect our people, clients, and communities.",
  },
  {
    name: "Collaboration",
    description: "We achieve stronger outcomes by working together.",
  },
] as const;

const images = [
  {
    src: "/hero-integrated-engineering.png",
    alt: "Engineering team collaborating on an integrated project",
    className: "h-56 sm:h-64 lg:h-72",
  },
  {
    src: "/banner_construction.jpg",
    alt: "Construction professionals coordinating work on site",
    className: "h-64 sm:h-72 lg:h-80 lg:mt-6",
  },
  {
    src: "/hero-eee.png",
    alt: "Engineer working with modern electrical systems",
    className: "h-64 sm:h-72 lg:h-80",
  },
  {
    src: "/hero-civil.jpg",
    alt: "Civil engineers reviewing technical plans",
    className: "h-56 sm:h-64 lg:h-72 lg:mt-6",
  },
] as const;

export default function MissionVisionValues() {
  return (
    <section className="relative overflow-hidden bg-surface py-16 sm:py-20 lg:py-24">
      <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
        <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
          <span className="h-px w-7 bg-primary" aria-hidden="true" />
          Our purpose
          <span className="h-px w-7 bg-primary" aria-hidden="true" />
        </p>
          <h2 className="mt-5 text-[clamp(2.75rem,5vw,5rem)] uppercase leading-[0.96] text-charcoal">
            Mission, vision &amp; values
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Guided by a clear purpose, driven by an ambitious vision, and built
            on principles that shape every decision we make.
          </p>
          <span className="mx-auto mt-6 block h-0.5 w-12 bg-primary" aria-hidden="true" />
        </div>

        <div className="mt-14 grid items-center gap-12 lg:mt-18 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-24">
          <div>
            <article className="border-b border-charcoal/15 pb-7">
              <h3 className="text-2xl uppercase leading-none text-primary sm:text-3xl">
                Mission
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                Our mission is to deliver dependable engineering and supply
                solutions that improve how people live and organizations
                operate. We are committed to quality, safety, responsible
                delivery, and lasting client value at every stage of a project.
              </p>
            </article>

            <article className="border-b border-charcoal/15 py-7">
              <h3 className="text-2xl uppercase leading-none text-primary sm:text-3xl">
                Vision
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                Our vision is to become a trusted engineering partner known for
                integrated thinking, practical innovation, and reliable
                solutions that support sustainable infrastructure and business
                growth.
              </p>
            </article>

            <article className="pt-7">
              <h3 className="text-2xl uppercase leading-none text-primary sm:text-3xl">
                Core values
              </h3>
              <ul className="mt-5 space-y-3">
                {values.map((value) => (
                  <li key={value.name} className="flex gap-3 text-sm leading-6 text-muted">
                    <span
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-secondary"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-bold text-charcoal">{value.name}:</strong>{" "}
                      {value.description}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="grid grid-cols-2 items-start gap-3 sm:gap-5">
            {images.map((image) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-md bg-background shadow-[0_16px_40px_rgba(34,34,34,0.09)] ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
