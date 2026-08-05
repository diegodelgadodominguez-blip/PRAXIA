import type { Metadata } from "next";
import { INSIGHTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Insights | PRAXIA",
};

export default function InsightsPage() {
  return (
    <div>
      <div className="border-b border-border">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-[72px]">
          <p className="mb-5 font-mono text-[11px] tracking-[0.18em] text-accent">
            PUBLICACIONES
          </p>
          <h1 className="mb-4.5 font-serif text-[30px] font-semibold md:text-[40px] lg:text-[48px]">
            Insights
          </h1>
          <p className="max-w-[700px] text-[17px] text-muted">
            Análisis normativo y notas técnicas del equipo. Sección estructurada sobre un
            índice de datos: incorporar una publicación nueva no requiere rehacer la página.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1320px] px-5 py-14 pb-20 md:px-10 md:py-[56px] md:pb-24">
        {INSIGHTS.map((i, idx) => (
          <article
            key={idx}
            className="grid grid-cols-1 gap-3.5 border-b border-border py-7.5 md:grid-cols-[170px_1fr_150px] md:items-baseline"
          >
            <p className="font-mono text-[11px] tracking-[0.12em] text-muted">{i.date}</p>
            <div>
              <h2 className="mb-2.5 font-serif text-[25px] font-semibold leading-[1.3]">
                {i.title}
              </h2>
              <p className="max-w-[680px] text-[15px] leading-[1.65] text-muted">
                {i.excerpt}
              </p>
            </div>
            <p className="font-mono text-[10px] tracking-[0.12em] text-accent md:text-right">
              {i.status}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
