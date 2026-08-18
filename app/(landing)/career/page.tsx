import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InnerPageHero from "@/components/common/InnerPageHero";
import { careerBenefits, careerData } from "@/lib/career";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Careers | Orisyn Limited",
  description: "Explore current career opportunities and build your future with the Orisyn Limited team in Dhaka, Bangladesh.",
  path: "/career",
});

export default function CareerPage() {
  return (
    <main>
      <InnerPageHero
        eyebrow="Careers at Orisyn"
        title="Make your mark"
        description="Join a team that turns ambitious ideas into purposeful spaces, dependable projects, and stronger communities."
        image="/career-hero.png"
        imageAlt="Orisyn team collaborating in a design studio"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Career" }]}
      />

      <section id="openings" className="bg-background py-16 sm:py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-5 border-b border-charcoal/10 pb-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Current opportunities</p>
              <h2 className="mt-4 text-[clamp(3rem,6vw,6rem)] uppercase text-charcoal">Find your next role.</h2>
            </div>
            {/* <p className="max-w-sm text-sm leading-7 text-muted sm:text-base">Explore open positions and build a career with a team that values curiosity, ownership, and craft.</p> */}
          </div>
          <div className="mt-9 grid gap-6 lg:grid-cols-2">
            {careerData.map((job) => (
              <article key={job.id} className="group overflow-hidden rounded-2xl border border-charcoal/10 bg-surface shadow-[0_18px_50px_rgba(34,34,34,0.08)]">
                <div className="relative aspect-[16/8] overflow-hidden">
                  <Image src={job.image} alt="Architectural visualization workspace" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-5 top-5 rounded-full bg-primary px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white">Featured opening</span>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-secondary">{job.summary.employmentStatus} · {job.summary.location}</p>
                  <h3 className="mt-3 text-4xl uppercase text-charcoal sm:text-5xl">{job.title}</h3>
                  <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3 border-y border-charcoal/10 py-5 text-sm text-muted"><span>Vacancy <strong className="float-right text-charcoal">{job.summary.vacancy}</strong></span><span>Salary <strong className="float-right text-charcoal">{job.summary.salary}</strong></span><span>Level <strong className="float-right text-charcoal">{job.summary.jobLevel}</strong></span><span>Deadline <strong className="float-right text-charcoal">{job.summary.deadline}</strong></span></div>
                  <Link href={`/career/${job.slug}`} className="mt-6 inline-flex border-b-2 border-primary pb-1 text-xs font-bold uppercase tracking-[0.14em] text-charcoal transition-colors hover:text-primary">View job details →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 text-white sm:py-20 lg:py-28">
        <div className="container">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-light">Life at Orisyn</p><h2 className="mt-4 text-[clamp(3rem,6vw,6rem)] uppercase">More than a job.</h2><p className="mt-5 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">We create room for people to learn, contribute, and do work they can be proud of.</p></div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {careerBenefits.map((benefit, index) => <div key={benefit} className="flex min-h-32 items-end bg-charcoal p-5 sm:p-6"><span className="mr-4 grid size-9 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold">{String(index + 1).padStart(2, "0")}</span><p className="text-lg font-medium leading-6 text-white">{benefit}</p></div>)}
          </div>
        </div>
      </section>
    </main>
  );
}
