import Image from "next/image";

export const services = [
  {
    id: 1,
    slug: "civil-construction",
    title: "Civil Construction",
    shortDescription:
      "Structures and site works built for safety, durability, and long-term value.",
    description:
      "Orisyn Limited provides practical civil engineering and construction solutions for buildings, infrastructure, and site-development projects. Every project is planned around structural reliability, efficient execution, safety, and lasting performance.",
    image: "/services/civil-construction.png",
    imageAlt: "Construction team coordinating work on site",
    position: "object-center",
    items: [
      "Building Construction",
      "Structural Engineering",
      "Roads & Site Infrastructure",
      "Site Development",
      "Construction Planning",
      "Project Execution Support",
    ],
    whyChooseUs: [
      "Experienced Engineering Team",
      "Safety-Focused Site Practices",
      "Quality-Controlled Delivery",
      "Durable Construction Solutions",
      "Reliable Project Coordination",
    ],
  },
  {
    id: 2,
    slug: "electrical-electronic-engineering",
    title: "Electrical & Electronic Engineering",
    shortDescription:
      "Reliable power, control, and electronic systems for modern operations.",
    description:
      "We design, coordinate, supply, install, and support electrical and electronic systems for buildings, industrial facilities, and infrastructure. Our focus is safe installation, reliable performance, energy efficiency, and uninterrupted operation.",
    image: "/services/electrical-electronic-engineering.png",
    imageAlt: "Engineer inspecting an industrial electrical system",
    position: "object-center",
    items: [
      "Electrical Power Systems",
      "Distribution & Control Systems",
      "Panels & Protection Equipment",
      "Low-Voltage Systems",
      "Equipment Installation",
      "Inspection & Maintenance Support",
    ],
    whyChooseUs: [
      "Qualified Technical Team",
      "Safe Installation Standards",
      "Energy-Efficient Solutions",
      "Dependable System Performance",
      "Responsive Maintenance Support",
    ],
  },
  {
    id: 3,
    slug: "mechanical-engineering",
    title: "Mechanical Engineering",
    shortDescription:
      "Efficient machinery, HVAC, piping, and building-service solutions.",
    description:
      "Our mechanical engineering services support dependable building and industrial operations. We develop coordinated solutions that improve performance, maintainability, energy efficiency, and operational safety.",
    image: "/services/mechanical-engineering.png",
    imageAlt: "Multidisciplinary engineers reviewing technical plans",
    position: "object-center",
    items: [
      "HVAC Systems",
      "Machinery & Equipment Support",
      "Piping Systems",
      "Building Services",
      "Installation Coordination",
      "Maintenance Planning",
    ],
    whyChooseUs: [
      "Practical Engineering Solutions",
      "Coordinated System Design",
      "Energy-Efficient Planning",
      "Operational Safety Focus",
      "Long-Term Maintenance Support",
    ],
  },
  {
    id: 4,
    slug: "project-engineering",
    title: "Project Engineering",
    shortDescription:
      "Coordinated planning and delivery support from concept to completion.",
    description:
      "Orisyn Limited brings technical disciplines, stakeholders, schedules, and resources together through structured project engineering. We support informed decision-making and consistent delivery throughout the complete project lifecycle.",
    image: "/services/project-engineering.png",
    imageAlt: "Civil engineers reviewing project plans",
    position: "object-center",
    items: [
      "Project Planning",
      "Technical Coordination",
      "Design Review",
      "Schedule & Resource Coordination",
      "Procurement Support",
      "Delivery & Completion Support",
    ],
    whyChooseUs: [
      "Multidisciplinary Expertise",
      "Structured Project Planning",
      "Clear Stakeholder Coordination",
      "Proactive Schedule Management",
      "End-to-End Delivery Support",
    ],
  },
  {
    id: 5,
    slug: "import-export-supply",
    title: "Import, Export & Supply",
    shortDescription:
      "Dependable sourcing and supply support for every project requirement.",
    description:
      "We help clients source engineering materials, equipment, and project essentials from suitable local and international markets. Our approach emphasizes product quality, technical suitability, regulatory compliance, reliable coordination, and timely delivery.",
    image: "/services/import-export-supply.png",
    imageAlt: "Construction materials and equipment on an active project",
    position: "object-center",
    items: [
      "Global Product Sourcing",
      "Local Procurement",
      "International Procurement",
      "Import & Export Coordination",
      "Engineering Materials Supply",
      "Equipment Supply",
      "Logistics & Delivery Support",
    ],
    whyChooseUs: [
      "Reliable Supplier Network",
      "Technical Product Evaluation",
      "Regulatory Compliance",
      "Efficient Logistics Coordination",
      "Dependable On-Time Delivery",
    ],
  },
  {
    id: 6,
    slug: "investment",
    title: "Investment",
    shortDescription:
      "Strategic investment solutions that support sustainable growth and long-term value.",
    description:
      "Orisyn Limited identifies and supports responsible investment opportunities across engineering, infrastructure, construction, real estate, technology, and strategic business partnerships. We focus on transparent planning, practical risk management, sustainable growth, and lasting value for every stakeholder.",
    image: "/services/investment.png",
    imageAlt: "Engineering professionals planning a strategic investment project",
    position: "object-center",
    items: [
      "Business Investment",
      "Project Financing",
      "Strategic Partnerships",
      "Infrastructure Investment",
      "Real Estate Investment",
      "Technology Investment",
      "Joint Venture Opportunities",
    ],
    whyChooseUs: [
      "Strategic Investment Planning",
      "Transparent Business Practices",
      "Sustainable Growth Focus",
      "Practical Risk Management",
      "Long-Term Value Creation",
    ],
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
              key={service.id}
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
                    {service.shortDescription}
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
