import Link from "next/link";
import { services } from "@/lib/services";

function TickerItems() {
  return (
    <>
      {services.map((service) => (
        <span key={service.id} className="flex shrink-0 items-center gap-5 sm:gap-7">
          <Link
            href={`/business/${service.slug}`}
            className="font-display text-lg uppercase leading-none tracking-[-0.01em] text-charcoal transition-colors hover:text-primary sm:text-xl lg:text-2xl"
          >
            {service.title}
          </Link>
          <span aria-hidden="true" className="text-xl leading-none text-primary sm:text-2xl">
            ✦
          </span>
        </span>
      ))}
    </>
  );
}

export default function ServicesTicker() {
  return (
    <section
      aria-label="Our business areas"
      className="overflow-hidden border-y border-charcoal/10 bg-surface py-5 sm:py-6"
    >
      <div className="ticker-track flex w-max items-center gap-5 sm:gap-7">
        <div className="flex shrink-0 items-center gap-5 sm:gap-7" aria-hidden="false">
          <TickerItems />
        </div>
        <div className="flex shrink-0 items-center gap-5 sm:gap-7" aria-hidden="true">
          <TickerItems />
        </div>
      </div>
    </section>
  );
}
