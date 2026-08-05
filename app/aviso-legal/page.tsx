import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal | PRAXIA",
};

const BODY = [
  "El presente sitio pertenece a Centro de Estudios Tributarios en Minería y Energía SpA, RUT 78.471.797-6, con domicilio en Av. Vitacura 2939, piso 11, oficina 1101, Las Condes, Región Metropolitana, Chile.",
  "Los contenidos publicados tienen carácter informativo y no constituyen asesoría legal ni tributaria para un caso particular. La aplicación de las normas citadas depende de los hechos concretos de cada situación.",
  "Este documento constituye un texto base y debe ser revisado por el equipo antes de la publicación del sitio.",
];

export default function AvisoLegalPage() {
  return (
    <div className="mx-auto max-w-[820px] px-5 py-16 pb-24 md:px-10 md:py-[72px] md:pb-24">
      <h1 className="mb-6 font-serif text-[40px] font-semibold">Aviso legal</h1>
      {BODY.map((p, i) => (
        <p key={i} className="mb-5 text-base leading-[1.75] text-ink">
          {p}
        </p>
      ))}
    </div>
  );
}
