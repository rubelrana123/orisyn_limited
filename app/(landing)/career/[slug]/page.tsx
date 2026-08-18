import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { careerData } from "@/lib/career";
import { absoluteUrl, breadcrumbJsonLd, createMetadata, siteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return careerData.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: PageProps<"/career/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const job = careerData.find((item) => item.slug === slug);
  if (!job) return {};
  return createMetadata({
    title: `${job.title} Job in Dhaka | Orisyn Limited`,
    description: `${job.summary.employmentStatus} opportunity for a ${job.title} in ${job.summary.location}. Review responsibilities, requirements, and application details.`,
    path: `/career/${job.slug}`,
    image: job.image,
  });
}

function List({ items }: { items: string[] }) {
  return <ul className="mt-5 space-y-3">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-7 text-muted sm:text-base"><span className="mt-2.5 size-2 shrink-0 rounded-full bg-primary" />{item}</li>)}</ul>;
}

export default async function CareerDetailPage({ params }: PageProps<"/career/[slug]">) {
  const { slug } = await params;
  const job = careerData.find((career) => career.slug === slug);
  if (!job) notFound();
  const facts = [["Vacancy", job.summary.vacancy], ["Employment", job.summary.employmentStatus], ["Level", job.summary.jobLevel], ["Workplace", job.summary.workplace], ["Location", job.summary.location], ["Deadline", job.summary.deadline]];

  return <main className="bg-background py-10 sm:py-14 lg:py-20"><JsonLd data={[{ "@context": "https://schema.org", "@type": "JobPosting", title: job.title, description: job.jobContext, employmentType: job.summary.employmentStatus.toUpperCase().replaceAll("-", "_"), hiringOrganization: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Orisyn Limited", sameAs: siteUrl }, jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" } }, url: absoluteUrl(`/career/${job.slug}`) }, breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Careers", path: "/career" }, { name: job.title, path: `/career/${job.slug}` }])]} /><div className="container"><Link href="/career" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-charcoal transition-colors hover:text-primary">← All career openings</Link><article className="mt-7 grid gap-10 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-16"><div><div className="relative aspect-[16/8] overflow-hidden rounded-2xl"><Image src={job.image} alt="Architectural visualization workspace" fill priority sizes="(max-width: 1023px) 100vw, 65vw" className="object-cover" /></div><p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-primary">Current opening</p><h1 className="mt-3 text-[clamp(3.2rem,7vw,6.5rem)] uppercase text-charcoal">{job.title}</h1><p className="mt-6 text-base leading-8 text-muted">{job.jobContext}</p><section className="mt-10 border-t border-charcoal/15 pt-8"><h2 className="text-4xl uppercase text-charcoal">Responsibilities</h2><List items={job.responsibilities} /></section><section className="mt-10 border-t border-charcoal/15 pt-8"><h2 className="text-4xl uppercase text-charcoal">Requirements</h2><h3 className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-secondary">Education</h3><List items={job.educationalRequirements} /><h3 className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-secondary">Experience</h3><List items={job.experienceRequirements} /><h3 className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-secondary">Additional skills</h3><List items={job.additionalRequirements} /></section><section className="mt-10 border-t border-charcoal/15 pt-8"><h2 className="text-4xl uppercase text-charcoal">Benefits</h2><List items={job.compensationBenefits} /></section></div><aside className="lg:sticky lg:top-28 lg:h-fit"><div className="rounded-2xl bg-charcoal p-6 text-white shadow-xl sm:p-8"><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-light">Job overview</p><dl className="mt-6 divide-y divide-white/10">{facts.map(([label, value]) => <div key={label} className="flex justify-between gap-4 py-3 text-sm"><dt className="text-white/55">{label}</dt><dd className="text-right font-semibold">{value}</dd></div>)}</dl><a href={job.application.applyLink} target="_blank" rel="noreferrer" className="mt-7 flex justify-center rounded-full bg-primary px-5 py-3.5 text-xs font-bold uppercase tracking-[0.1em] transition hover:bg-primary-light">Apply now ↗</a>{job.application.contactEmail && <p className="mt-4 text-center text-xs leading-5 text-white/55">Questions? <a className="text-primary-light underline" href={`mailto:${job.application.contactEmail}`}>{job.application.contactEmail}</a></p>}</div></aside></article></div></main>;
}
