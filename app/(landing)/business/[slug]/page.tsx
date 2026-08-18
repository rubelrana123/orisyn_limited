import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import InnerPageHero from "@/components/common/InnerPageHero";
import JsonLd from "@/components/seo/JsonLd";
import { getService, services } from "@/lib/services";
import { absoluteUrl, breadcrumbJsonLd, createMetadata, siteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/business/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createMetadata({
    title: `${service.title} Services in Bangladesh | Orisyn Limited`,
    description: service.description,
    path: `/business/${service.slug}`,
    image: service.image,
  });
}

export default async function BusinessDetailPage({ params }: PageProps<"/business/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const currentIndex = services.findIndex((item) => item.slug === service.slug);
  const nextService = services[(currentIndex + 1) % services.length];

  return (
    <main>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${absoluteUrl(`/business/${service.slug}`)}#service`,
            name: service.title,
            description: service.description,
            url: absoluteUrl(`/business/${service.slug}`),
            image: absoluteUrl(service.image),
            areaServed: { "@type": "Country", name: "Bangladesh" },
            provider: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Orisyn Limited" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: `${service.title} capabilities`,
              itemListElement: service.items.map((item) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: item } })),
            },
          },
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Business", path: "/business" },
            { name: service.title, path: `/business/${service.slug}` },
          ]),
        ]}
      />
      <InnerPageHero eyebrow="Our business" title={service.title} description={service.shortDescription} image={service.image} imageAlt={service.imageAlt} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Business", href: "/business" }, { label: service.title }]} />

      <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
        <div className="container grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-24">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm"><span className="h-0.5 w-8 bg-primary" aria-hidden="true" />Business overview</p>
            <h2 className="mt-5 text-[clamp(3rem,5vw,5rem)] uppercase leading-[0.94] text-charcoal">Practical expertise. Dependable results.</h2>
            <p className="mt-7 text-base leading-8 text-muted sm:text-lg sm:leading-9">{service.description}</p>

            <div className="mt-10">
              <h3 className="text-2xl uppercase text-charcoal sm:text-3xl">What we deliver</h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.items.map((item, index) => (
                  <li key={item} className="flex items-center gap-3 rounded-xl border border-charcoal/10 bg-surface p-4 text-sm font-semibold text-charcoal shadow-sm">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <section className="mt-10 border-t border-charcoal/15 pt-8">
              <h2 className="text-3xl uppercase text-charcoal sm:text-4xl">How we deliver</h2>
              <ol className="mt-6 grid gap-4 sm:grid-cols-2">
                {["Understand requirements", "Plan the right solution", "Coordinate safe delivery", "Review quality and handover"].map((step, index) => (
                  <li key={step} className="rounded-xl border border-charcoal/10 bg-surface p-5">
                    <span className="text-xs font-bold text-primary">0{index + 1}</span>
                    <h3 className="mt-2 text-lg font-semibold text-charcoal">{step}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">Our team keeps scope, stakeholders, quality, and practical project outcomes aligned at every stage.</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-[0.6rem] border-white bg-surface shadow-[0_24px_70px_rgba(34,34,34,0.14)]">
              <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 1024px) 100vw, 42vw" className={`object-cover ${service.position}`} />
            </div>
            <div className="mt-6 rounded-2xl bg-charcoal p-6 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-light">Why choose Orisyn</p>
              <ul className="mt-5 space-y-3">
                {service.whyChooseUs.map((reason) => <li key={reason} className="flex gap-3 text-sm leading-6 text-white/75"><span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-primary text-[0.65rem] font-bold text-white" aria-hidden="true">✓</span>{reason}</li>)}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-surface py-14 sm:py-16 lg:py-20">
        <div className="container flex flex-col gap-8 rounded-2xl bg-charcoal px-6 py-10 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-12">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-light">Ready to begin?</p><h2 className="mt-3 max-w-3xl text-[clamp(2.5rem,5vw,4.75rem)] uppercase leading-[0.95] text-white">Let&apos;s plan your next project.</h2></div>
          <Link href="/contact" className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-primary-light">Contact our team <span className="grid size-7 place-items-center rounded-full bg-white text-charcoal transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></Link>
        </div>
        <div className="container mt-8 flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.12em]"><Link href="/business" className="text-muted transition-colors hover:text-primary">← All business</Link><Link href={`/business/${nextService.slug}`} className="text-charcoal transition-colors hover:text-primary">Next: {nextService.title} →</Link></div>
      </section>
    </main>
  );
}
