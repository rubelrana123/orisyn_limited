import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { people, type PersonSlug } from "@/lib/people";
import { absoluteUrl, breadcrumbJsonLd, createMetadata, siteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(people).map((person) => ({ person }));
}

export async function generateMetadata({ params }: PageProps<"/about/[person]">): Promise<Metadata> {
  const { person } = await params;
  if (!(person in people)) return {};
  const profile = people[person as PersonSlug];
  return createMetadata({
    title: `${profile.name}, ${profile.role} | Orisyn Limited`,
    description: profile.introduction,
    path: `/about/${person}`,
    image: profile.image,
  });
}

export default async function PersonPage({
  params,
}: PageProps<"/about/[person]">) {
  const { person } = await params;

  if (!(person in people)) notFound();

  const profile = people[person as PersonSlug];

  return (
    <main className="min-h-screen bg-background py-14 sm:py-20 lg:py-24">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: profile.name,
            jobTitle: profile.role,
            description: profile.introduction,
            image: absoluteUrl(profile.image),
            url: absoluteUrl(`/about/${person}`),
            worksFor: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Orisyn Limited" },
            ...(profile.linkedin ? { sameAs: [profile.linkedin] } : {}),
          },
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: profile.name, path: `/about/${person}` },
          ]),
        ]}
      />
      <div className="container">
        <Link
          href="/about#leadership"
          className="group inline-flex min-h-11 items-center gap-3 rounded-full border border-primary/25 bg-surface py-2 pl-2 pr-5 text-xs font-bold uppercase tracking-[0.12em] text-charcoal shadow-[0_5px_16px_rgba(34,34,34,0.08)] transition-[border-color,background-color,box-shadow,transform,color] duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white hover:shadow-[0_10px_24px_rgba(255,100,46,0.24)] sm:min-h-12 sm:pr-6"
        >
          <span
            className="grid size-7 shrink-0 place-items-center rounded-full bg-primary text-white transition-[background-color,transform,color] duration-200 group-hover:-translate-x-0.5 group-hover:bg-white group-hover:text-primary sm:size-8"
            aria-hidden="true"
          >
            ←
          </span>
          Back to leadership
        </Link>

        <article className="mt-9 grid items-start gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 xl:gap-20">
          <div className="relative aspect-[4/5] max-w-xl overflow-hidden rounded-2xl border-[0.6rem] border-white bg-surface shadow-[0_24px_70px_rgba(34,34,34,0.12)] lg:sticky lg:top-28">
            <Image
              src={profile.image}
              alt={`${profile.name}, ${profile.role}`}
              fill
              sizes="(max-width: 1023px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-1 w-8 bg-primary" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
                Leadership profile
              </p>
            </div>
            <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-secondary">
              {profile.role}
            </p>
            <h1 className="mt-3 text-[clamp(3.5rem,8vw,7rem)] uppercase text-charcoal">
              {profile.name}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted">
              {profile.introduction}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
              {profile.details}
            </p>

            {profile.credentials && (
              <div className="mt-7 rounded-xl border-l-4 border-secondary bg-surface px-5 py-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">
                  Credentials
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {profile.credentials}
                </p>
              </div>
            )}

            {profile.experience && (
              <section className="mt-10 border-t border-charcoal/15 pt-8">
                <h2 className="text-3xl uppercase text-charcoal sm:text-4xl">
                  Professional experience
                </h2>
                <ul className="mt-5 space-y-4">
                  {profile.experience.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-muted sm:text-base">
                      <span className="mt-2.5 size-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="group mt-9 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition-[background-color,box-shadow,transform] hover:-translate-y-0.5 hover:bg-primary-light hover:shadow-[0_10px_24px_rgba(255,100,46,0.25)]">
                View LinkedIn profile
                <span className="grid size-7 place-items-center rounded-full bg-white text-charcoal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}
