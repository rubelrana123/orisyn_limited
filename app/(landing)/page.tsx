import CompanyOverview from "@/components/home/CompanyOverview";
import CoreWork from "@/components/home/CoreWork";
import HeroSec from "@/components/home/HeroSec";
import MissionVisionValues from "@/components/home/MissionVisionValues";
import ServicesTicker from "@/components/home/ServicesTicker";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import BoardOfDirector from "@/components/home/BoardOfDirector";

export default function Home() {
  return (
    <main>
      <HeroSec />
      <ServicesTicker />
      <CompanyOverview />
      <CoreWork />
      <ServicesShowcase />
      <MissionVisionValues />
      <BoardOfDirector/>
      {/* <ClientsPartners /> */}
    </main>
  );
}

{
  /* <section className="container flex min-h-screen flex-col justify-between py-8 sm:py-12">
  <p className="text-sm font-semibold uppercase tracking-[0.18em]">
    Orisyn Limited
  </p>
  <div className="max-w-5xl py-20">
    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
      Quality you can trust
    </p>
    <h1 className="text-[clamp(5rem,18vw,14rem)] uppercase text-charcoal">
      Orisyn
    </h1>
    <p className="mt-8 max-w-xl text-lg text-muted">
      A bold, modern foundation built with Orisyn&apos;s signature color palette
      and Anton display typography.
    </p>
  </div>
  <div className="grid grid-cols-5" aria-label="Orisyn brand colors">
    <div className="h-3 bg-primary" title="Primary orange" />
    <div className="h-3 bg-secondary" title="Secondary blue" />
    <div className="h-3 bg-accent" title="Accent yellow" />
    <div className="h-3 bg-cta" title="CTA red" />
    <div className="h-3 bg-charcoal" title="Charcoal" />
  </div>
</section>; */
}
