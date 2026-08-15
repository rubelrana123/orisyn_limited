import type { ReactNode } from "react";

type SectionSubheadingProps = {
  children: ReactNode;
  align?: "left" | "center";
};

export default function SectionSubheading({
  children,
  align = "left",
}: SectionSubheadingProps) {
  const isCentered = align === "center";

  return (
    <p
      className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm ${isCentered ? "justify-center" : ""}`}
    >
      <span className="h-px w-7 bg-primary" aria-hidden="true" />
      {children}
      {isCentered && (
        <span className="h-px w-7 bg-primary" aria-hidden="true" />
      )}
    </p>
  );
}
