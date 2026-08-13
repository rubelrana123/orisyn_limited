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
    experience: null,
    expertise: null,
    credentials: null,
    linkedin: null,
  },
  "sabbir-ahmed": {
    name: "Lt. Col. Sabbir Ahmed",
    role: "Chairman, Orisyn Limited",
    image: "/director/sabbirAhmed.jpeg",
    introduction:
      "Lt. Col. Sabbir Ahmed, BGBM, PBGM, psc (Retd.), is a seasoned leadership and administration professional with more than 22 years of distinguished service in the Bangladesh Army.",
    details:
      "As Chairman of Orisyn Limited, he provides strategic direction, disciplined governance, operational insight, and extensive institutional experience. His leadership supports responsible growth, strong stakeholder relationships, effective project oversight, and dependable business delivery.",
    experience: [
      "Currently serving as Chief Executive Officer of Dhaka Club, overseeing administration, finance, logistics, security, compliance, employee welfare, and services for more than 4,500 members and 450 staff.",
      "Commanded an 850-member Border Guard Bangladesh battalion, leading operations, personnel management, training, security, logistics, and stakeholder coordination.",
      "Served in United Nations peacekeeping missions in the Democratic Republic of the Congo and Mali, including leadership of approximately 180 personnel as a Company Commander.",
      "Developed and coordinated security plans for key installations, VVIP movements, national events, and complex operational environments.",
    ],
    expertise: [
      "Leadership & Team Management",
      "Operations & Project Management",
      "Strategic Administration",
      "Security & Crisis Management",
      "Human Resource Management",
      "Government & Stakeholder Engagement",
      "Communication & Coordination",
      "Organizational Development",
    ],
    credentials:
      "BGBM, PBGM, psc (Retd.) · Staff College graduate, Defence Services Command and Staff College · Master of Science in Military Studies",
    linkedin: "https://www.linkedin.com/in/ltcol-sabbir-ahmed/",
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
    <main className="min-h-screen bg-background py-14 sm:py-20 lg:py-24">
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

            {profile.expertise && (
              <section className="mt-10 border-t border-charcoal/15 pt-8">
                <h2 className="text-3xl uppercase text-charcoal sm:text-4xl">
                  Core expertise
                </h2>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {profile.expertise.map((item) => (
                    <li key={item} className="rounded-full border border-charcoal/10 bg-surface px-4 py-2 text-xs font-semibold text-charcoal shadow-sm">
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
