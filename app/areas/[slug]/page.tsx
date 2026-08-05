import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { AREAS, getArea, getLeadFor } from "@/lib/data";

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return { title: `${area.name} | PRAXIA` };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const lead = getLeadFor(area);
  const otherAreas = AREAS.filter((a) => a.slug !== area.slug);

  return (
    <div>
      <div className="border-b border-border bg-offwhite">
        <div className="mx-auto max-w-[1320px] px-5 py-11 pb-16 md:px-10 md:pb-[64px]">
          <Link href="/areas" className="font-mono text-[11px] tracking-[0.12em] no-underline">
            ← ÁREAS DE PRÁCTICA
          </Link>
          <h1 className="mt-7.5 mb-4 max-w-[900px] font-serif text-[32px] font-semibold leading-[1.1] md:text-[42px] lg:text-[50px]">
            {area.name}
          </h1>
          <p className="max-w-[760px] text-lg leading-[1.6] text-muted">{area.tagline}</p>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-16 md:px-10 md:py-[72px] lg:grid-cols-[1fr_minmax(280px,340px)] lg:gap-[72px]">
        <div>
          {area.paras.map((p, i) => (
            <p key={i} className="mb-5.5 max-w-[760px] text-[17px] leading-[1.75]">
              {p}
            </p>
          ))}

          <h2 className="mb-5 mt-11.5 font-serif text-[26px] font-semibold">
            Alcance de servicios
          </h2>
          <ul className="flex flex-col gap-px border border-border bg-border">
            {area.services.map((s, i) => (
              <li key={i} className="flex gap-4 bg-paper p-5.5 text-[15px] leading-[1.6]">
                <span className="font-mono text-xs text-accent">—</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-8 bg-charcoal p-9 px-10 text-offwhite">
            <p className="max-w-[560px] font-serif text-[27px] leading-[1.3]">{area.cta}</p>
            <Link
              href="/contacto"
              className="whitespace-nowrap bg-accent px-7 py-3.5 text-sm text-paper no-underline hover:bg-accent-dark"
            >
              Escribir al equipo
            </Link>
          </div>
        </div>

        <aside className="self-start">
          <p className="mb-4 font-mono text-[10px] tracking-[0.14em] text-muted">
            QUIÉN LIDERA ESTA ÁREA
          </p>
          <Link
            href={`/equipo/${lead.slug}`}
            className="block max-w-[360px] border border-border text-ink no-underline hover:border-ink"
          >
            <ImagePlaceholder label={lead.initials} />
            <div className="p-5.5 pb-6.5">
              <p className="mb-1.5 font-serif text-[21px] font-semibold">{lead.name}</p>
              <p className="mb-4 text-[13px] text-muted">{lead.role}</p>
              <span className="font-mono text-[10px] tracking-[0.14em] text-accent">
                VER FICHA →
              </span>
            </div>
          </Link>

          <div className="mt-6.5 max-w-[360px] border border-border p-5.5">
            <p className="mb-3.5 font-mono text-[10px] tracking-[0.14em] text-muted">
              OTRAS ÁREAS
            </p>
            <div className="flex flex-col gap-2.5">
              {otherAreas.map((o) => (
                <Link
                  key={o.slug}
                  href={`/areas/${o.slug}`}
                  className="text-sm text-ink no-underline hover:text-accent"
                >
                  {o.name}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
