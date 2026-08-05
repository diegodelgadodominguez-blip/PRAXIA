import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { AREAS, INDUSTRY_PARAS, NORMS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Minería y Energía | PRAXIA",
};

export default function IndustriaPage() {
  return (
    <div>
      <div className="bg-charcoal text-offwhite">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-20">
          <p className="mb-5.5 font-mono text-[11px] tracking-[0.18em] text-accent">
            INDUSTRIA
          </p>
          <h1 className="mb-5.5 max-w-[900px] font-serif text-[34px] font-semibold leading-[1.08] md:text-[46px] lg:text-[56px]">
            Minería y Energía
          </h1>
          <p className="max-w-[780px] text-lg leading-[1.65] text-footer">
            La industria extractiva y de generación opera bajo un régimen tributario, laboral
            y de cumplimiento propio. PRAXIA fue constituida para atender ese régimen de forma
            integrada.
          </p>
        </div>
      </div>

      <ImagePlaceholder aspectClassName="aspect-[24/7]" className="bg-ink" />

      <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-[72px]">
        <div className="mb-18 grid grid-cols-1 gap-9 lg:grid-cols-2 lg:gap-[72px]">
          <div>
            {INDUSTRY_PARAS.map((p, i) => (
              <p key={i} className="mb-5 text-[17px] leading-[1.75]">
                {p}
              </p>
            ))}
          </div>
          <div className="border border-border bg-offwhite p-8">
            <p className="mb-5.5 font-mono text-[10px] tracking-[0.14em] text-muted">
              MARCO NORMATIVO DE REFERENCIA
            </p>
            {NORMS.map((n, i) => (
              <div
                key={i}
                className={`pb-4 mb-4 ${i < NORMS.length - 1 ? "border-b border-border" : ""}`}
              >
                <p className="mb-1.5 font-serif text-lg">{n.title}</p>
                <p className="text-[13px] leading-[1.55] text-muted">{n.note}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="mb-7 font-serif text-[30px] font-semibold">
          Cómo cruzan nuestras áreas en este sector
        </h2>
        <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a) => (
            <Link
              key={a.slug}
              href={`/areas/${a.slug}`}
              className="bg-paper p-7 text-ink no-underline hover:bg-offwhite"
            >
              <span className="mb-2.5 block font-serif text-xl font-semibold">{a.name}</span>
              <span className="block text-sm leading-[1.6] text-muted">
                {a.industryNote}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
