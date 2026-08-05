import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { PEOPLE, getAreasFor, getPerson } from "@/lib/data";

export function generateStaticParams() {
  return PEOPLE.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) return {};
  return { title: `${person.name} | PRAXIA` };
}

export default async function PersonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) notFound();

  const areas = getAreasFor(person);

  return (
    <div className="mx-auto max-w-[1320px] px-5 py-11 pb-20 md:px-10 md:py-12 md:pb-24">
      <Link href="/equipo" className="font-mono text-[11px] tracking-[0.12em] no-underline">
        ← EQUIPO
      </Link>

      <div className="mt-9 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(280px,360px)_1fr] lg:gap-[72px]">
        <div>
          <div className="max-w-[380px]">
            <ImagePlaceholder label={person.initials} />
          </div>
          <div className="max-w-[380px] border border-t-0 border-border p-6">
            <p className="mb-3.5 font-mono text-[10px] tracking-[0.14em] text-muted">
              CONTACTO DIRECTO
            </p>
            <p className="mb-2 text-sm">
              <a href={`mailto:${person.email}`} className="text-accent hover:underline">
                {person.email}
              </a>
            </p>
            <p className="mb-4.5 text-[13px] leading-[1.5] text-muted">
              Av. Vitacura 2939, piso 11, of. 1101
              <br />
              Las Condes, Santiago
            </p>
            <p className="mb-2 font-mono text-[10px] tracking-[0.14em] text-muted">IDIOMAS</p>
            <p className="mb-4.5 text-sm">{person.languages}</p>
            {person.linkedin && (
              <div>
                <p className="mb-2 font-mono text-[10px] tracking-[0.14em] text-muted">
                  PERFIL PROFESIONAL
                </p>
                <p className="text-sm">
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    LinkedIn →
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>

        <div>
          <h1 className="mb-2.5 font-serif text-[36px] font-semibold leading-[1.1] md:text-[46px]">
            {person.name}
          </h1>
          <p className="mb-6.5 text-base text-muted">{person.role}</p>
          <div className="mb-8.5 flex flex-wrap gap-2">
            {person.tags.map((t, i) => (
              <span
                key={i}
                className="bg-offwhite px-2.75 py-1.5 font-mono text-[10px] tracking-[0.08em] text-ink"
              >
                {t}
              </span>
            ))}
          </div>

          {person.bio.map((b, i) => (
            <p key={i} className="mb-5 max-w-[740px] text-[17px] leading-[1.75]">
              {b}
            </p>
          ))}

          <h2 className="mb-4 mt-10.5 font-serif text-[22px] font-semibold">Formación</h2>
          <ul className="mb-10.5 flex flex-col gap-2.5">
            {person.education.map((e, i) => (
              <li
                key={i}
                className="border-l-2 border-accent pl-4.5 text-[15px] leading-[1.5] text-ink"
              >
                {e}
              </li>
            ))}
          </ul>

          {person.publications && person.publications.length > 0 && (
            <div className="mb-10.5">
              <h2 className="mb-4 font-serif text-[22px] font-semibold">
                Publicaciones seleccionadas
              </h2>
              <ul className="flex flex-col gap-2.5">
                {person.publications.map((pub, i) => (
                  <li
                    key={i}
                    className="border-l-2 border-border pl-4.5 text-[15px] leading-[1.55] text-ink"
                  >
                    {pub}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {person.honor && (
            <div className="mb-10.5 border border-border bg-offwhite p-5.5">
              <p className="mb-2 font-mono text-[10px] tracking-[0.14em] text-muted">
                RECONOCIMIENTO
              </p>
              <p className="font-serif text-[19px]">{person.honor}</p>
            </div>
          )}

          {areas.length > 0 && (
            <div>
              <h2 className="mb-4 font-serif text-[22px] font-semibold">Áreas que lidera</h2>
              <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
                {areas.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/areas/${a.slug}`}
                    className="bg-paper p-5.5 text-ink no-underline hover:bg-offwhite"
                  >
                    <span className="block font-serif text-lg font-semibold">{a.name}</span>
                    <span className="mt-1.5 block text-[13px] leading-[1.5] text-muted">
                      {a.tagline}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
