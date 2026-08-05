import type { Metadata } from "next";
import Link from "next/link";
import { AREAS, getLeadFor } from "@/lib/data";

export const metadata: Metadata = {
  title: "Áreas de práctica | PRAXIA",
};

export default function AreasPage() {
  return (
    <div>
      <div className="border-b border-border">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-[72px]">
          <p className="mb-5 font-mono text-[11px] tracking-[0.18em] text-accent">PRÁCTICA</p>
          <h1 className="mb-4.5 font-serif text-[30px] font-semibold md:text-[40px] lg:text-[48px]">
            Áreas de práctica
          </h1>
          <p className="max-w-[700px] text-[17px] text-muted">
            Siete áreas que operan de forma integrada sobre un mismo expediente: estructura
            societaria, carga tributaria, relación laboral y cumplimiento normativo.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1320px] px-5 py-14 pb-20 md:px-10 md:py-[56px] md:pb-24">
        {AREAS.map((a) => {
          const lead = getLeadFor(a);
          return (
            <Link
              key={a.slug}
              href={`/areas/${a.slug}`}
              className="grid grid-cols-1 items-center gap-4.5 border-b border-border py-7.5 text-ink no-underline hover:bg-offwhite md:grid-cols-[72px_1fr_200px]"
            >
              <span className="font-mono text-[11px] tracking-[0.14em] text-accent">
                {a.num}
              </span>
              <span>
                <span className="block font-serif text-[27px] font-semibold">{a.name}</span>
                <span className="mt-2 block max-w-[640px] text-[15px] leading-[1.6] text-muted">
                  {a.tagline}
                </span>
              </span>
              <span className="font-mono text-[10px] tracking-[0.12em] text-muted md:text-right">
                {lead.name} →
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
