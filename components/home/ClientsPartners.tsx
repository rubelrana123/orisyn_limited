import Image from "next/image";

const clients = [
  { name: "Bangladesh Army", logo: "/clients/bdarmy.png" },
  { name: "Bangladesh Navy", logo: "/clients/bangladeshnavy.png" },
  { name: "Bangladesh Air Force", logo: "/clients/bdairforce.png" },
  { name: "BUET", logo: "/clients/BUET.png" },
  { name: "BUP", logo: "/clients/BUP.png" },
  { name: "MIST", logo: "/clients/mist.png" },
  { name: "Public Works Department", logo: "/clients/pwd.png" },
  { name: "ICT Division", logo: "/clients/ictdivision.png" },
  { name: "Civil Aviation Authority", logo: "/clients/civilaviaton.png" },
  { name: "Border Guard Bangladesh", logo: "/clients/borderguard.png" },
  { name: "Jolshiri Abashon", logo: "/clients/jolshiri.png" },
  { name: "Bangladesh Ordnance Factories", logo: "/clients/bdof.png" },
] as const;

function ClientCard({ client }: { client: (typeof clients)[number] }) {
  return (
    <div className="group flex w-40 shrink-0 flex-col items-center sm:w-48 lg:w-52">
      <div className="relative grid size-24 place-items-center rounded-full border border-charcoal/10 bg-surface p-5 shadow-[0_10px_35px_rgba(34,34,34,0.05)] transition-[transform,border-color,box-shadow] duration-300 group-hover:-translate-y-1 group-hover:border-primary/35 group-hover:shadow-[0_16px_40px_rgba(34,34,34,0.1)] sm:size-28">
        <Image
          src={client.logo}
          alt={`${client.name} logo`}
          fill
          sizes="112px"
          className="object-contain p-5"
        />
      </div>
      <p className="mt-4 max-w-full truncate text-center text-xs font-semibold text-muted transition-colors duration-200 group-hover:text-charcoal sm:text-sm">
        {client.name}
      </p>
    </div>
  );
}

export default function ClientsPartners() {
  return (
    <section
      aria-labelledby="clients-heading"
      className="relative isolate overflow-hidden bg-surface py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute left-1/2 top-1/2 -z-10 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.035] blur-3xl" />
      <div className="container text-center">
        <p className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
          <span className="h-px w-7 bg-primary" aria-hidden="true" />
          Trusted by
          <span className="h-px w-7 bg-primary" aria-hidden="true" />
        </p>
        <h2
          id="clients-heading"
          className="mt-5 text-[clamp(2.75rem,5vw,5rem)] uppercase leading-[0.96] text-charcoal"
        >
          Our partners and clients
        </h2>

      </div>

      <div className="relative mt-12 overflow-hidden lg:mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent sm:w-28" />
        <div className="clients-track flex w-max items-start gap-4 py-3 hover:[animation-play-state:paused] sm:gap-7">
          {[...clients, ...clients].map((client, index) => (
            <ClientCard key={`${client.name}-${index}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
