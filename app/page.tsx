import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { AREAS, CREDENTIALS, FACTS, INSIGHTS, PEOPLE } from "@/lib/data";

export default function Home() {
  const homeInsights = INSIGHTS.slice(0, 3);

  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 py-20 md:px-10 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-[72px] lg:py-[96px]">
          <div>
            <p className="mb-6.5 font-mono text-[11px] tracking-[0.2em] text-accent">
              CENTRO DE ESTUDIOS TRIBUTARIOS EN MINERÍA Y ENERGÍA SpA
            </p>
            <h1 className="mb-7 font-serif text-[34px] font-semibold leading-[1.08] tracking-[-0.015em] md:text-[46px] lg:text-[60px]">
              Asesoría tributaria y corporativa para la industria minero-energética
            </h1>
            <p className="mb-9.5 max-w-[620px] text-lg leading-[1.65] text-muted">
              Acompañamos a compañías mineras, generadoras y family offices en la
              estructuración tributaria, el cumplimiento normativo y la planificación
              patrimonial, bajo el marco legal chileno vigente.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                href="/areas"
                className="bg-accent px-7.5 py-4 text-sm tracking-[0.04em] text-paper no-underline hover:bg-accent-dark"
              >
                Áreas de práctica
              </Link>
              <Link
                href="/contacto"
                className="border border-ink px-7.5 py-4 text-sm tracking-[0.04em] text-ink no-underline hover:bg-ink hover:text-paper"
              >
                Contactar
              </Link>
            </div>
          </div>
          <ImagePlaceholder aspectClassName="aspect-[8/5]" />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 px-5 md:grid-cols-4 md:px-10">
          {FACTS.map((f, i) => (
            <div
              key={i}
              className={`py-8.5 pr-7.5 ${i < FACTS.length - 1 ? "border-r border-border" : ""}`}
            >
              <p className="mb-2 font-serif text-[30px] font-semibold">{f.value}</p>
              <p className="text-[13px] leading-[1.5] text-muted">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-20 md:px-10 md:py-[88px]">
        <div className="mb-11 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
          <h2 className="font-serif text-[34px] font-semibold">Áreas de práctica</h2>
          <Link href="/areas" className="font-mono text-[11px] tracking-[0.12em] no-underline">
            VER TODAS →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a) => (
            <Link
              key={a.slug}
              href={`/areas/${a.slug}`}
              className="flex min-h-[210px] flex-col bg-paper p-8 pb-8.5 text-ink no-underline hover:bg-offwhite"
            >
              <span className="font-mono text-[10px] tracking-[0.16em] text-accent">
                {a.num}
              </span>
              <span className="my-4 font-serif text-[23px] font-semibold leading-[1.25]">
                {a.name}
              </span>
              <span className="text-sm leading-[1.6] text-muted">{a.tagline}</span>
              <span className="mt-auto pt-5.5 font-mono text-[10px] tracking-[0.14em] text-accent">
                CONOCER MÁS →
              </span>
            </Link>
          ))}
          <Link
            href="/contacto"
            className="flex min-h-[210px] flex-col items-start justify-center gap-3.5 bg-charcoal p-8 pb-8.5 text-offwhite no-underline hover:bg-charcoal-2"
          >
            <span className="font-serif text-[23px] font-semibold leading-[1.3]">
              ¿No sabe cuál de estas áreas cubre su caso?
            </span>
            <span className="text-sm leading-[1.6] text-footer">
              Escríbanos y un director revisará el encargo.
            </span>
            <span className="font-mono text-[10px] tracking-[0.14em] text-accent">
              CONTACTAR →
            </span>
          </Link>
        </div>
      </section>

      <section className="bg-charcoal text-offwhite">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 py-16 md:px-10 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[72px]">
          <div>
            <p className="mb-5.5 font-mono text-[11px] tracking-[0.18em] text-accent">
              INDUSTRIA
            </p>
            <h2 className="mb-5.5 font-serif text-[40px] font-semibold leading-[1.15]">
              Minería y Energía
            </h2>
            <p className="mb-7.5 text-[17px] leading-[1.7] text-footer">
              Nuestras siete áreas de práctica convergen en un sector con reglas propias:
              royalty minero, depreciación de activos de larga vida, contratos de suministro
              eléctrico y estándares de cumplimiento exigidos por matrices extranjeras.
            </p>
            <Link
              href="/industrias/mineria-y-energia"
              className="inline-block border border-offwhite px-7 py-3.5 text-sm text-offwhite no-underline hover:bg-offwhite hover:text-charcoal"
            >
              Ver página de industria
            </Link>
          </div>
          <ImagePlaceholder aspectClassName="aspect-[7/5]" className="bg-ink" />
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-20 md:px-10 md:py-[88px]">
        <div className="mb-11 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
          <div>
            <h2 className="mb-2 font-serif text-[34px] font-semibold">Directorio</h2>
            <p className="text-sm text-muted">
              Cada director cuenta con una ficha propia: trayectoria, formación y contacto
              directo.
            </p>
          </div>
          <Link href="/equipo" className="font-mono text-[11px] tracking-[0.12em] no-underline">
            VER EQUIPO →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3">
          {PEOPLE.map((p) => (
            <Link key={p.slug} href={`/equipo/${p.slug}`} className="block text-ink no-underline">
              <ImagePlaceholder label={p.initials} />
              <p className="mt-5 mb-1.5 font-serif text-[22px] font-semibold">{p.name}</p>
              <p className="mb-3 text-[13px] text-muted">{p.role}</p>
              <p className="mb-4 text-sm leading-[1.6] text-ink">{p.short}</p>
              <span className="inline-flex items-center gap-2 border-b border-accent pb-1 font-mono text-[10px] tracking-[0.14em] text-accent">
                VER PERFIL COMPLETO →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-offwhite">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-[72px]">
          <h2 className="mb-2.5 font-serif text-[28px] font-semibold">
            Credenciales y membresías
          </h2>
          <p className="mb-10 text-[15px] text-muted">
            Rankings, membresías gremiales y publicaciones. Estructura preparada para
            incorporar nuevos registros.
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CREDENTIALS.map((c, i) => (
              <div
                key={i}
                className="flex min-h-[150px] flex-col border border-border bg-paper p-6.5"
              >
                <span className="font-mono text-[10px] tracking-[0.14em] text-accent">
                  {c.kind}
                </span>
                <span className="my-3.5 font-serif text-[19px] leading-[1.3]">{c.title}</span>
                <span className="mt-auto text-[13px] leading-[1.55] text-muted">{c.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-20 md:px-10 md:py-[88px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
          <h2 className="font-serif text-[34px] font-semibold">Insights</h2>
          <Link href="/insights" className="font-mono text-[11px] tracking-[0.12em] no-underline">
            TODAS LAS PUBLICACIONES →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {homeInsights.map((i, idx) => (
            <article key={idx} className="border-t-2 border-ink pt-5">
              <p className="mb-3.5 font-mono text-[10px] tracking-[0.14em] text-muted">
                {i.date} · {i.topic}
              </p>
              <h3 className="mb-3 font-serif text-[21px] font-semibold leading-[1.3]">
                {i.title}
              </h3>
              <p className="text-sm leading-[1.6] text-muted">{i.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
