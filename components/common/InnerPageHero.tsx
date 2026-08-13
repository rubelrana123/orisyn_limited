import Image from "next/image";
import Link from "next/link";

type Breadcrumb = {
  label: string;
  href?: string;
};

type InnerPageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  breadcrumbs?: readonly Breadcrumb[];
};

export default function InnerPageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumbs = [],
}: InnerPageHeroProps) {
  return (
    <section className="relative isolate min-h-[22rem] overflow-hidden bg-charcoal text-white sm:min-h-[25rem] lg:min-h-[28rem]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(20,20,20,0.94)_0%,rgba(25,25,25,0.78)_42%,rgba(25,25,25,0.28)_75%,rgba(25,25,25,0.18)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(20,20,20,0.62)_0%,transparent_55%)]" />
      <div className="absolute -right-20 -top-28 -z-10 size-80 rounded-full border-[4.5rem] border-primary/15 sm:size-[28rem]" />

      <div className="container flex min-h-[22rem] flex-col justify-end pb-8 pt-16 sm:min-h-[25rem] sm:pb-10 lg:min-h-[28rem] lg:pb-12">
        <div className="mb-auto mt-auto flex flex-col items-center text-center">
          {eyebrow && (
            <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-light sm:text-sm">
              <span className="h-0.5 w-8 bg-primary" aria-hidden="true" />
              {eyebrow}
              <span className="h-0.5 w-8 bg-primary" aria-hidden="true" />
            </p>
          )}

          <h1 className="mt-4 max-w-4xl text-[clamp(3.25rem,8vw,6.5rem)] uppercase leading-[0.92] text-white">
            {title}
          </h1>

          {description && (
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              {description}
            </p>
          )}
        </div>

        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mt-5">
            <ol className="flex flex-wrap items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/60 sm:text-xs">
              {breadcrumbs.map((item, index) => (
                <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                  {index > 0 && (
                    <span className="text-primary" aria-hidden="true">
                      /
                    </span>
                  )}
                  {item.href ? (
                    <Link href={item.href} className="transition-colors hover:text-primary-light">
                      {item.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </section>
  );
}
