import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InnerPageHero from "@/components/common/InnerPageHero";
import { services } from "@/lib/services";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Our Business | Orisyn Limited",
  description: "Explore Orisyn Limited's integrated engineering, construction, supply, and investment business areas.",
  path: "/business",
});

export default function BusinessPage() {
  return (
    <main>
      <InnerPageHero
        eyebrow="What we do"
        title="Our Business"
        description="Integrated expertise, practical coordination, and dependable delivery for every stage of your project."
        image="/services/mechanical-engineering.png"
        imageAlt="An engineer inspecting a modern mechanical plant"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Business" }]}
      />

      <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
        <div className="absolute -left-28 top-1/3 size-80 rounded-full border-[4.5rem] border-secondary/[0.04]" aria-hidden="true" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">Complete capabilities</p>
            <h2 className="mt-4 text-[clamp(3rem,5.5vw,5.5rem)] uppercase leading-[0.94] text-charcoal">Solutions built around your goals</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">Choose a business area to see its full scope, delivery strengths, and how Orisyn can support your next project.</p>
          </div>

          <div className="mt-14 divide-y divide-charcoal/15 sm:mt-16 lg:mt-20">
            {services.map((service, index) => (
              <article key={service.id} className="group grid items-center gap-8 py-10 first:pt-0 last:pb-0 md:grid-cols-2 md:gap-12 lg:gap-20 lg:py-16">
                <Link href={`/business/${service.slug}`} className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface shadow-[0_20px_55px_rgba(34,34,34,0.11)] ${index % 2 ? "md:order-2" : ""}`} aria-label={`View ${service.title}`}>
                  <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 767px) 100vw, 50vw" className={`object-cover transition-transform duration-700 group-hover:scale-105 ${service.position}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/25 to-transparent" />
                  <span className="absolute left-5 top-5 grid size-11 place-items-center rounded-full bg-charcoal/90 text-xs font-bold text-primary-light backdrop-blur-sm sm:left-6 sm:top-6">0{index + 1}</span>
                </Link>

                <div className={index % 2 ? "md:order-1" : ""}>
                  <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-secondary"><span className="h-0.5 w-7 bg-primary" aria-hidden="true" />Orisyn business</p>
                  <h3 className="mt-4 max-w-xl text-[clamp(2.5rem,4vw,4.25rem)] uppercase leading-[0.95] text-charcoal transition-colors group-hover:text-primary">{service.title}</h3>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">{service.shortDescription}</p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${service.title} capabilities`}>
                    {service.items.slice(0, 3).map((item) => <li key={item} className="rounded-full border border-charcoal/10 bg-surface px-3 py-1.5 text-[0.68rem] font-semibold text-charcoal/75 sm:text-xs">{item}</li>)}
                  </ul>
                  <Link href={`/business/${service.slug}`} className="group/link mt-7 inline-flex items-center gap-3 rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-[0.07em] text-white transition-[background-color,box-shadow,transform] hover:-translate-y-0.5 hover:bg-primary-light hover:shadow-[0_10px_24px_rgba(255,100,46,0.25)]">
                    View details <span className="grid size-7 place-items-center rounded-full bg-white text-charcoal transition-transform group-hover/link:translate-x-1" aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
