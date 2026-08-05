"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AREAS, PEOPLE, INSIGHTS } from "@/lib/data";

type SearchResult = {
  kind: string;
  label: string;
  href: string;
};

export default function Header() {
  const pathname = usePathname();
  const [renderedPathname, setRenderedPathname] = useState(pathname);
  const [megaOpen, setMegaOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [mobileAreas, setMobileAreas] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("es");
  const [query, setQuery] = useState("");

  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setMegaOpen(false);
    setSearchOpen(false);
    setMobileNav(false);
    setMobileAreas(false);
    setQuery("");
  }

  const q = query.trim().toLowerCase();
  const results: SearchResult[] = !q
    ? []
    : [
        ...AREAS.filter((a) => (a.name + " " + a.tagline).toLowerCase().includes(q)).map(
          (a) => ({ kind: "ÁREA", label: a.name, href: "/areas/" + a.slug })
        ),
        ...PEOPLE.filter((p) =>
          (p.name + " " + p.role + " " + p.tags.join(" ")).toLowerCase().includes(q)
        ).map((p) => ({
          kind: "PROFESIONAL",
          label: p.name + " — " + p.role,
          href: "/equipo/" + p.slug,
        })),
        ...INSIGHTS.filter((i) => i.title.toLowerCase().includes(q)).map((i) => ({
          kind: "INSIGHT",
          label: i.title,
          href: "/insights",
        })),
      ].slice(0, 8);
  const noResults = q.length > 1 && results.length === 0;

  const navLinkClass =
    "text-sm text-offwhite no-underline hover:text-paper hover:underline";

  return (
    <header className="sticky top-0 z-[60] bg-charcoal text-offwhite">
      <div className="mx-auto flex h-[76px] max-w-[1320px] items-center gap-10 px-5 md:px-10">
        <Link
          href="/"
          aria-label="PRAXIA, ir a inicio"
          className="flex flex-col leading-none no-underline text-offwhite hover:text-offwhite"
        >
          <span className="font-serif text-[26px] font-bold tracking-[0.14em]">
            PRAXIA
          </span>
          <span className="mt-1.5 font-mono text-[9px] tracking-[0.18em] text-nav-muted">
            ESTUDIOS TRIBUTARIOS · MINERÍA Y ENERGÍA
          </span>
        </Link>

        <nav
          className="ml-auto hidden items-center gap-7 whitespace-nowrap lg:flex"
          aria-label="Navegación principal"
        >
          <Link href="/quienes-somos" className={navLinkClass}>
            Quiénes somos
          </Link>

          <div
            className="relative flex items-center"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <Link
              href="/areas"
              onFocus={() => setMegaOpen(true)}
              aria-haspopup="true"
              aria-expanded={megaOpen}
              className="flex items-center gap-2 text-sm text-offwhite no-underline hover:text-paper"
            >
              Áreas de práctica
              <span className="text-[9px] text-nav-muted">▼</span>
            </Link>
            {megaOpen && (
              <div className="absolute left-1/2 top-[52px] w-[min(880px,90vw)] -translate-x-1/2 border border-border border-t-[3px] border-t-accent bg-paper p-9 text-ink shadow-2xl">
                <div className="grid grid-cols-2 gap-x-10 gap-y-1">
                  {AREAS.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/areas/${a.slug}`}
                      className="-mx-3.5 block min-w-0 border-b border-offwhite px-3.5 py-3 no-underline text-ink hover:bg-offwhite"
                    >
                      <span className="block font-serif text-[17px] font-semibold">
                        {a.name}
                      </span>
                      <span className="mt-1 block text-[13px] leading-[1.45] text-muted">
                        {a.tagline}
                      </span>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/industrias/mineria-y-energia"
                  className="mt-5 flex items-center justify-between bg-charcoal px-4.5 py-4 text-offwhite no-underline hover:bg-charcoal-2"
                >
                  <span className="font-serif text-[17px]">
                    Industria: Minería y Energía
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.12em]">
                    VER PÁGINA →
                  </span>
                </Link>
              </div>
            )}
          </div>

          <Link href="/equipo" className={navLinkClass}>
            Equipo
          </Link>
          <Link href="/insights" className={navLinkClass}>
            Insights
          </Link>
          <Link href="/contacto" className={navLinkClass}>
            Contacto
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-4 pl-5 lg:ml-0">
          <button
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Buscar"
            className="cursor-pointer border-none bg-none p-1.5 text-[15px] text-offwhite"
          >
            ⌕
          </button>
          <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.08em]">
            <button
              onClick={() => setLang("es")}
              className={`cursor-pointer border-none px-2 py-1 font-mono text-[11px] tracking-[0.08em] ${
                lang === "es" ? "bg-accent text-paper" : "bg-transparent text-nav-muted"
              }`}
            >
              ES
            </button>
            <span className="text-[#4A4844]">/</span>
            <button
              onClick={() => setLang("en")}
              className={`cursor-pointer border-none px-2 py-1 font-mono text-[11px] tracking-[0.08em] ${
                lang === "en" ? "bg-accent text-paper" : "bg-transparent text-nav-muted"
              }`}
            >
              EN
            </button>
          </div>
          <button
            onClick={() => setMobileNav((v) => !v)}
            aria-label="Abrir menú de navegación"
            aria-expanded={mobileNav}
            className="cursor-pointer border border-white/25 bg-none px-3 py-2 text-base leading-none text-offwhite lg:hidden"
          >
            {mobileNav ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {mobileNav && (
        <nav
          className="border-t border-white/15 px-5 pb-6 pt-3 lg:hidden"
          aria-label="Navegación principal"
        >
          <Link
            href="/quienes-somos"
            className="block border-b border-white/15 py-4 text-base text-offwhite no-underline"
          >
            Quiénes somos
          </Link>
          <button
            onClick={() => setMobileAreas((v) => !v)}
            aria-expanded={mobileAreas}
            className="flex w-full cursor-pointer items-center justify-between border-b border-white/15 bg-none py-4 text-base text-offwhite"
          >
            <span>Áreas de práctica</span>
            <span className="text-lg text-accent">{mobileAreas ? "−" : "+"}</span>
          </button>
          {mobileAreas && (
            <div className="flex flex-col bg-ink px-4 py-1.5">
              {AREAS.map((a) => (
                <Link
                  key={a.slug}
                  href={`/areas/${a.slug}`}
                  className="border-b border-[#302F2C] py-3.5 text-[15px] text-footer no-underline"
                >
                  {a.name}
                </Link>
              ))}
              <Link
                href="/industrias/mineria-y-energia"
                className="py-3.5 text-[15px] text-accent no-underline"
              >
                Industria: Minería y Energía →
              </Link>
            </div>
          )}
          <Link
            href="/equipo"
            className="block border-b border-white/15 py-4 text-base text-offwhite no-underline"
          >
            Equipo
          </Link>
          <Link
            href="/insights"
            className="block border-b border-white/15 py-4 text-base text-offwhite no-underline"
          >
            Insights
          </Link>
          <Link href="/contacto" className="block py-4 text-base text-offwhite no-underline">
            Contacto
          </Link>
        </nav>
      )}

      {searchOpen && (
        <div className="border-t border-white/15 bg-ink">
          <div className="mx-auto max-w-[1320px] px-5 pb-8 pt-6 md:px-10">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar áreas de práctica, profesionales, publicaciones…"
              aria-label="Buscar en el sitio"
              autoFocus
              className="w-full border-0 border-b border-white/25 bg-transparent py-2.5 font-serif text-xl text-paper outline-none placeholder:text-nav-muted md:text-2xl"
            />
            <div className="mt-4 flex flex-col gap-0.5">
              {results.map((r, i) => (
                <Link
                  key={i}
                  href={r.href}
                  className="flex items-baseline gap-4 border-b border-[#302F2C] py-2.5 text-offwhite no-underline hover:text-paper"
                >
                  <span className="w-24 shrink-0 font-mono text-[10px] tracking-[0.14em] text-accent">
                    {r.kind}
                  </span>
                  <span className="text-[15px]">{r.label}</span>
                </Link>
              ))}
            </div>
            {noResults && (
              <p className="mt-4 text-sm text-nav-muted">
                Sin coincidencias para esta búsqueda.
              </p>
            )}
          </div>
        </div>
      )}

      {lang === "en" && (
        <div className="bg-accent px-5 py-2.5 text-center font-mono text-[11px] tracking-[0.1em] text-paper">
          EN — ENGLISH CONTENT IN PREPARATION. SPANISH VERSION SHOWN.
        </div>
      )}
    </header>
  );
}
