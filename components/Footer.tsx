import Link from "next/link";
import { AREAS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-footer">
      <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-10 px-5 py-16 md:grid-cols-4 md:px-10">
        <div className="col-span-2 md:col-span-1">
          <p className="mb-4 font-serif text-2xl font-bold tracking-[0.14em] text-offwhite">
            PRAXIA
          </p>
          <p className="mb-4.5 text-[13px] leading-[1.7]">
            Centro de Estudios Tributarios en Minería y Energía SpA
            <br />
            RUT 78.471.797-6
          </p>
          <p className="text-[13px] leading-[1.7]">
            Av. Vitacura 2939, piso 11, of. 1101
            <br />
            Las Condes, Región Metropolitana
          </p>
        </div>

        <div>
          <p className="mb-4.5 font-mono text-[10px] tracking-[0.16em] text-footer-muted">
            FIRMA
          </p>
          <div className="flex flex-col gap-2.5">
            <Link href="/quienes-somos" className="text-sm text-footer no-underline hover:text-paper">
              Quiénes somos
            </Link>
            <Link href="/equipo" className="text-sm text-footer no-underline hover:text-paper">
              Equipo
            </Link>
            <Link
              href="/industrias/mineria-y-energia"
              className="text-sm text-footer no-underline hover:text-paper"
            >
              Minería y Energía
            </Link>
            <Link href="/insights" className="text-sm text-footer no-underline hover:text-paper">
              Insights
            </Link>
            <Link href="/contacto" className="text-sm text-footer no-underline hover:text-paper">
              Contacto
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-4.5 font-mono text-[10px] tracking-[0.16em] text-footer-muted">
            ÁREAS DE PRÁCTICA
          </p>
          <div className="flex flex-col gap-2.5">
            {AREAS.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="text-sm text-footer no-underline hover:text-paper"
              >
                {a.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4.5 font-mono text-[10px] tracking-[0.16em] text-footer-muted">
            CONTACTO
          </p>
          <div className="mb-6.5 flex flex-col gap-2.5">
            <a
              href="mailto:contacto@praxia.com"
              className="text-sm text-footer no-underline hover:text-paper"
            >
              contacto@praxia.com
            </a>
            <span className="text-sm text-footer-muted">Teléfono: [completar]</span>
            <a
              href="https://www.linkedin.com"
              className="text-sm text-footer no-underline hover:text-paper"
            >
              LinkedIn
            </a>
          </div>
          <p className="mb-3.5 font-mono text-[10px] tracking-[0.16em] text-footer-muted">
            LEGAL
          </p>
          <div className="flex flex-col gap-2.5">
            <Link href="/aviso-legal" className="text-sm text-footer no-underline hover:text-paper">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="text-sm text-footer no-underline hover:text-paper">
              Política de privacidad
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-7 border-t border-white/15 px-5 py-6 font-mono text-[11px] tracking-[0.12em] text-[#ABA69E] md:px-10">
        <span>
          © 2026 CENTRO DE ESTUDIOS TRIBUTARIOS EN MINERÍA Y ENERGÍA SpA · RUT 78.471.797-6
        </span>
        <div className="flex flex-wrap items-center gap-4.5">
          <Link href="/aviso-legal" className="tracking-[0.12em] text-footer no-underline hover:text-offwhite">
            AVISO LEGAL
          </Link>
          <span className="text-[#4A4844]">·</span>
          <Link href="/privacidad" className="tracking-[0.12em] text-footer no-underline hover:text-offwhite">
            PRIVACIDAD
          </Link>
          <span className="text-[#4A4844]">·</span>
          <a
            href="mailto:contacto@praxia.com"
            className="tracking-[0.12em] text-footer no-underline hover:text-offwhite"
          >
            CONTACTO@PRAXIA.COM
          </a>
          <span className="text-[#4A4844]">·</span>
          <span>SANTIAGO, CHILE</span>
        </div>
      </div>
    </footer>
  );
}
