import type { Metadata } from "next";
import { ABOUT_PARAS, LEGAL_ROWS, PILLARS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Quiénes somos | PRAXIA",
};

export default function QuienesSomosPage() {
  return (
    <div>
      <div className="border-b border-border">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-[72px]">
          <p className="mb-5 font-mono text-[11px] tracking-[0.18em] text-accent">LA FIRMA</p>
          <h1 className="max-w-[900px] font-serif text-[30px] font-semibold leading-[1.12] md:text-[40px] lg:text-[48px]">
            Un centro de estudios tributarios especializado en minería y energía
          </h1>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-16 md:px-10 md:py-[72px] lg:grid-cols-[1fr_minmax(280px,360px)] lg:gap-[72px]">
        <div>
          {ABOUT_PARAS.map((p, i) => (
            <p key={i} className="mb-5.5 max-w-[760px] text-[17px] leading-[1.75]">
              {p}
            </p>
          ))}
          <h2 className="mb-5.5 mt-12 font-serif text-[26px] font-semibold">Sello distintivo</h2>
          <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <div key={i} className="bg-paper p-6.5">
                <p className="mb-2.5 font-serif text-[19px] font-semibold">{p.title}</p>
                <p className="text-sm leading-[1.6] text-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="self-start border border-border bg-offwhite p-7 pt-7.5">
          <p className="mb-5 font-mono text-[10px] tracking-[0.14em] text-muted">
            FICHA LEGAL
          </p>
          {LEGAL_ROWS.map((r, i) => (
            <div
              key={i}
              className={`pb-3.5 mb-3.5 ${
                i < LEGAL_ROWS.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <p className="mb-1 text-xs text-muted">{r.k}</p>
              <p className="text-sm leading-[1.5]">{r.v}</p>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}
