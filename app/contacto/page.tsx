import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Contacto | PRAXIA",
};

export default function ContactoPage() {
  return (
    <div>
      <div className="border-b border-border">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-[72px]">
          <p className="mb-5 font-mono text-[11px] tracking-[0.18em] text-accent">CONTACTO</p>
          <h1 className="mb-4.5 font-serif text-[30px] font-semibold md:text-[40px] lg:text-[48px]">
            Conversemos sobre su caso
          </h1>
          <p className="max-w-[660px] text-[17px] text-muted">
            Indique el área de interés y un director del equipo responderá directamente.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-16 md:px-10 md:py-[64px] lg:grid-cols-[1fr_minmax(260px,340px)] lg:gap-[72px] lg:pb-24">
        <ContactForm />

        <aside>
          <div className="mb-6 border border-border bg-offwhite p-7 pt-7.5">
            <p className="mb-5 font-mono text-[10px] tracking-[0.14em] text-muted">
              OFICINA
            </p>
            <p className="mb-5 text-[15px] leading-[1.7]">
              Av. Vitacura 2939, piso 11, oficina 1101
              <br />
              Las Condes, Región Metropolitana
              <br />
              Santiago, Chile
            </p>
            <p className="mb-2 text-[15px]">
              <a href="mailto:contacto@praxia.com" className="text-accent hover:underline">
                contacto@praxia.com
              </a>
            </p>
            <p className="text-[15px] text-muted">
              Teléfono:{" "}
              <span className="border border-dashed border-accent bg-paper px-2 py-0.5 font-mono text-[13px] text-accent">
                [COMPLETAR]
              </span>
            </p>
          </div>
          <ImagePlaceholder aspectClassName="aspect-[14/9]" className="border border-border" />
          <p className="mt-3 font-mono text-[10px] tracking-[0.12em] text-muted">
            [ PENDIENTE · reemplazar por mapa de ubicación ]
          </p>
        </aside>
      </div>
    </div>
  );
}
