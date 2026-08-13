import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const people = {
  "md-mehedi-hasan": {
    name: "Md Mehedi Hasan",
    role: "Managing Director",
    image: "/director/md-mehedi-hasan-white.png",
    introduction:
      "Leading Orisyn Limited with a practical vision for dependable engineering, responsible growth, and lasting value for every client.",
    details:
      "His leadership keeps the company focused on quality, accountability, and practical solutions that serve clients for the long term.",
  },
  "sabbir-ahmed": {
    name: "Sabbir Ahmed",
    role: "Director",
    image: "/director/sabbirAhmed.jpeg",
    introduction:
      "Supporting the company’s strategic direction with a focus on strong partnerships, disciplined delivery, and sustainable progress.",
    details:
      "He contributes to business planning and delivery oversight, helping teams maintain clear priorities and dependable standards.",
  },
} as const;

type PersonSlug = keyof typeof people;

export function generateStaticParams() {
  return Object.keys(people).map((person) => ({ person }));
}

export default async function PersonPage({
  params,
}: PageProps<"/about/[person]">) {
  const { person } = await params;

  if (!(person in people)) notFound();

  const profile = people[person as PersonSlug];

  return (
    <main className="min-h-screen bg-background py-16 sm:py-20 lg:py-28">
      <div className="container">
        <Link
          href="/#leadership"
          className="text-xs font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:text-charcoal sm:text-sm"
        >
          Back to leadership
        </Link>

        <article className="mt-10 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="relative aspect-square overflow-hidden rounded-md bg-surface shadow-[0_24px_70px_rgba(34,34,34,0.12)]">
            <Image
              src={profile.image}
              alt={`${profile.name}, ${profile.role}`}
              fill
              sizes="(max-width: 1023px) 100vw, 40vw"
              className="object-cover"
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
          </div>
        </article>
      </div>
    </main>
  );
}
