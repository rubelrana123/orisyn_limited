import type { Metadata } from "next";
import Image from "next/image";
import BoardOfDirector from "@/components/home/BoardOfDirector";
import InnerPageHero from "@/components/common/InnerPageHero";
import MissionVisionValues from "@/components/home/MissionVisionValues";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About Us | Orisyn Limited",
  description:
    "Learn about Orisyn Limited, our integrated engineering expertise, leadership, mission, vision, and values.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <InnerPageHero
        eyebrow="Company profile"
        title="About Orisyn"
        description="One integrated team delivering practical engineering, dependable supply, and lasting value across every project stage."
        image="/services/project-engineering.png"
        imageAlt="Engineering professionals coordinating a major construction project"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About us" }]}
      />

      <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
        <div
          className="absolute -left-28 top-24 size-72 rounded-full border-[4rem] border-secondary/[0.045]"
          aria-hidden="true"
        />
        <div className="container relative grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24">
          <div className="relative w-full max-w-xl justify-self-start pb-8 sm:pb-10 lg:sticky lg:top-28 lg:pb-0">
            <div
              className="absolute -bottom-5 -right-5 h-full w-full rounded-2xl bg-primary/10"
              aria-hidden="true"
            />
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border-[0.6rem] border-white bg-surface p-7 shadow-[0_24px_70px_rgba(34,34,34,0.14)] sm:p-10 lg:p-12">
              <div
                className="absolute -left-16 -top-16 size-56 rounded-full bg-primary/10 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-20 -right-16 size-64 rounded-full bg-secondary/10 blur-3xl"
                aria-hidden="true"
              />
              <Image
                src="/brand/orisyn-logo.png"
                alt="Orisyn Limited"
                width={1748}
                height={382}
                sizes="(max-width: 1024px) 80vw, 38vw"
                className="relative z-10 h-auto w-full max-w-md object-contain object-center"
              />
              <span className="absolute bottom-7 left-7 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted/70 sm:bottom-10 sm:left-10">
                Engineering with purpose
              </span>
            </div>
            <div className="absolute bottom-0 left-4 flex items-center gap-4 rounded-xl bg-charcoal px-5 py-4 text-white shadow-xl sm:left-8 sm:px-6 lg:-bottom-8">
              <span className="font-display text-3xl leading-none text-primary-light sm:text-4xl">
                2026
              </span>
              <span className="border-l border-white/20 pl-4 text-xs font-bold uppercase leading-5 tracking-[0.16em] text-white/75">
                Established
                <span className="block text-white">In Bangladesh</span>
              </span>
            </div>
          </div>

          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
              <span className="h-0.5 w-8 bg-primary" aria-hidden="true" />
              Who we are
            </p>
            <h2 className="mt-5 max-w-3xl text-[clamp(3rem,5.5vw,5.5rem)] uppercase leading-[0.94] text-charcoal">
              Engineering confidence into every project
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
              <p>
                Established in 2026, Orisyn Limited is an integrated
                engineering, construction, supply, and investment company
                serving public, private, commercial, industrial, and
                institutional clients across Bangladesh. We bring civil,
                electrical, electronic, mechanical, and project engineering
                expertise together within one coordinated team, helping clients
                move confidently from early planning and technical review to
                procurement, execution, completion, and long-term operational
                support.
              </p>
              <p>
                Our approach is practical and accountable. Every assignment
                begins with a clear understanding of the client&apos;s
                objectives, site conditions, technical requirements, budget, and
                schedule. From there, our specialists develop dependable
                solutions that balance performance, safety, quality, efficiency,
                and lasting value. Close coordination between disciplines allows
                us to identify risks early, reduce unnecessary complexity, and
                keep people, materials, information, and decisions moving in the
                same direction.
              </p>
              <p>
                Orisyn&apos;s capabilities include building construction,
                infrastructure and site development, power and control systems,
                electronic installations, HVAC, machinery, piping, technical
                coordination, global sourcing, import-export support, equipment
                supply, and strategic investment. Whether we are delivering a
                complete project or supporting one critical stage, we apply
                consistent standards and maintain transparent communication
                throughout the process.
              </p>
              <p>
                We believe strong engineering should solve real problems and
                continue creating value after handover. That belief shapes our
                commitment to responsible planning, disciplined site practices,
                quality assurance, and sustainable decision-making. Guided by
                integrity and strengthened by collaboration, Orisyn Limited aims
                to become a trusted long-term partner for organizations building
                the infrastructure, industries, workplaces, and opportunities of
                tomorrow. Our success is measured not only by completed work,
                but by safe outcomes, reliable performance, enduring
                relationships, and the confidence clients place in our team.
              </p>
              <p>
                As we grow, we continue investing in capable people, modern
                methods, dependable supplier relationships, and knowledge shaped
                by local conditions. We listen carefully, communicate clearly,
                and remain available when challenges arise. This combination of
                technical depth and responsive service enables us to adapt to
                projects of different scales while protecting the standards that
                define Orisyn.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BoardOfDirector />
      <MissionVisionValues />
    </main>
  );
}
