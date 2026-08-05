import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { PEOPLE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Equipo | PRAXIA",
};

export default function EquipoPage() {
  return (
    <div>
      <div className="border-b border-border">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-[72px]">
          <p className="mb-5 font-mono text-[11px] tracking-[0.18em] text-accent">EQUIPO</p>
          <h1 className="mb-4.5 font-serif text-[30px] font-semibold md:text-[40px] lg:text-[48px]">
            Directorio de profesionales
          </h1>
          <p className="max-w-[680px] text-[17px] text-muted">
            Tres directores con trayectoria en tributación, dirección de empresas y estrategia
            financiera aplicada al sector minero-energético.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-8 px-5 py-16 md:grid-cols-2 md:px-10 md:py-[64px] lg:grid-cols-3 lg:py-[64px] lg:pb-[90px]">
        {PEOPLE.map((p) => (
          <Link
            key={p.slug}
            href={`/equipo/${p.slug}`}
            className="block border border-border text-ink no-underline hover:border-ink"
          >
            <ImagePlaceholder label={p.initials} />
            <div className="p-6.5 pb-7.5">
              <p className="mb-1.5 font-serif text-[23px] font-semibold">{p.name}</p>
              <p className="mb-4 text-[13px] text-muted">{p.role}</p>
              <div className="mb-4.5 flex flex-wrap gap-2">
                {p.tags.map((t, i) => (
                  <span
                    key={i}
                    className="border border-border px-2.5 py-1.5 font-mono text-[10px] tracking-[0.08em] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mb-5 text-sm leading-[1.6] text-ink">{p.short}</p>
              <span className="flex items-center justify-between border-t border-border pt-4 font-mono text-[10px] tracking-[0.14em] text-accent">
                <span>VER PERFIL COMPLETO</span>
                <span className="text-[13px]">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
