import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad | PRAXIA",
};

const BODY = [
  "PRAXIA, Centro de Estudios Tributarios en Minería y Energía SpA, RUT 78.471.797-6, trata los datos personales que los usuarios entregan a través del formulario de contacto con la única finalidad de responder la consulta formulada.",
  "Los datos no son cedidos a terceros ni utilizados con fines comerciales distintos de aquel para el que fueron entregados. El titular puede solicitar en cualquier momento el acceso, rectificación o eliminación de sus datos escribiendo a contacto@praxia.com.",
  "Este documento constituye un texto base y debe ser revisado por el equipo antes de la publicación del sitio.",
];

export default function PrivacidadPage() {
  return (
    <div className="mx-auto max-w-[820px] px-5 py-16 pb-24 md:px-10 md:py-[72px] md:pb-24">
      <h1 className="mb-6 font-serif text-[40px] font-semibold">Política de privacidad</h1>
      {BODY.map((p, i) => (
        <p key={i} className="mb-5 text-base leading-[1.75] text-ink">
          {p}
        </p>
      ))}
    </div>
  );
}
