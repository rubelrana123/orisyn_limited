import Image from "next/image";

const directors = [
  {
    id: 1,
    name: "Md Ahosaduj Jaman",
    role: "Chairman",
    image: "/director/Chairman_Md Ahosaduj Jaman.jpeg",
  },
  {
    id: 2,
    name: "Md Mehedi Hasan",
    role: "Managing Director",
    image: "/director/md-mehedi-hasan-white.png",
  },
  {
    id: 3,
    name: "M. Abul Hannan (Retd)",
    role: "Director",
    image: "/director/major-md-abul-hannan-white.png",
  },
  // {
  //   id: 4,
  //   name: "Jibon Roy",
  //   role: "Director Clothing",
  //   image: "/director/jibon-roy-white.png",
  // },
  {
    id: 5,
    name: "Sabbir Ahmed",
    role: "Director",
   image: "/director/md-mehedi-hasan-white.png",
  },
  // {
  //   id: 6,
  //   name: "Gazi Abu Raihan",
  //   role: "Director",
  //   image: "/director/gazi-abu-raihan-white.png",
  // },
  // {
  //   id: 7,
  //   name: "Md Rakib Howlader",
  //   role: "Director",
  //   image: "/director/Director_Md Rakib Howlader.jpeg",
  // },
] as const;

export default function BoardOfDirector() {
  return (
    <section
      id="leadership"
      aria-labelledby="board-heading"
      className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-10 overflow-hidden text-center font-display text-[clamp(4.5rem,14vw,12rem)] leading-none whitespace-nowrap uppercase text-charcoal/[0.035]"
      >
        Board of Directors
      </div>

      <div className="container relative">
        <header className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-1 w-8 bg-primary" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
              Leadership team
            </p>
          </div>
          <h2
            id="board-heading"
            className="text-[clamp(3rem,7vw,6.5rem)] uppercase text-charcoal"
          >
            Board of Directors
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
            Experienced leadership guiding Orisyn Limited with clear direction,
            technical insight, and a commitment to dependable results.
          </p>
        </header>

        <div className="mt-12 grid gap-x-6 gap-y-12 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {directors.map((director, index) => (
            <article key={director.id}>
              <div className="relative aspect-[4/5] overflow-hidden bg-charcoal/5">
                <Image
                  src={director.image}
                  alt={`${director.name}, ${director.role}`}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1 bg-primary"
                />
              </div>

              <div className="flex gap-4 border-b border-charcoal/15 py-5">
                <span className="pt-1 text-xs font-bold tracking-[0.16em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl uppercase leading-none text-charcoal sm:text-3xl">
                    {director.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {director.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
