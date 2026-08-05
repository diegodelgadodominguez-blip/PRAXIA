"use client";

import { useState } from "react";
import { AREAS } from "@/lib/data";

const EMPTY_FORM = { name: "", company: "", email: "", area: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const field =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.area || !form.message.trim()) {
      setError("Complete los campos obligatorios: nombre, correo, área de interés y mensaje.");
      setSent(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("El correo electrónico indicado no es válido.");
      setSent(false);
      return;
    }
    setError("");
    setSent(true);
    setForm(EMPTY_FORM);
  }

  return (
    <form onSubmit={onSubmit} className="flex max-w-[660px] flex-col gap-6.5">
      <label className="flex flex-col gap-2">
        <span className="text-[13px] text-muted">Nombre y apellido *</span>
        <input
          value={form.name}
          onChange={field("name")}
          className="border border-border bg-paper px-4 py-3.5 font-sans text-[15px]"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-[13px] text-muted">Empresa u organización</span>
        <input
          value={form.company}
          onChange={field("company")}
          className="border border-border bg-paper px-4 py-3.5 font-sans text-[15px]"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-[13px] text-muted">Correo electrónico *</span>
        <input
          value={form.email}
          onChange={field("email")}
          type="email"
          className="border border-border bg-paper px-4 py-3.5 font-sans text-[15px]"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-[13px] text-muted">Área de interés *</span>
        <select
          value={form.area}
          onChange={field("area")}
          className="border border-border bg-paper px-4 py-3.5 font-sans text-[15px]"
        >
          <option value="">Seleccione un área</option>
          {AREAS.map((a) => (
            <option key={a.slug} value={a.name}>
              {a.name}
            </option>
          ))}
          <option value="Otro">Otro</option>
        </select>
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-[13px] text-muted">Mensaje *</span>
        <textarea
          value={form.message}
          onChange={field("message")}
          rows={6}
          className="resize-y border border-border bg-paper px-4 py-3.5 font-sans text-[15px]"
        />
      </label>

      {error && <p className="text-sm text-accent">{error}</p>}
      {sent && (
        <p className="border border-border bg-offwhite p-4 text-sm text-ink">
          Mensaje registrado. El equipo responderá al correo indicado dentro de los próximos
          días hábiles.
        </p>
      )}

      <div>
        <button
          type="submit"
          className="cursor-pointer border-none bg-accent px-8.5 py-4 font-sans text-sm tracking-[0.04em] text-paper hover:bg-accent-dark"
        >
          {sent ? "Enviar otra consulta" : "Enviar consulta"}
        </button>
      </div>
    </form>
  );
}
