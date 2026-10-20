"use client";

import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  MapPin,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Clock,
} from "lucide-react";

export type ProjectType =
  | "Cocina"
  | "Clóset"
  | "Mueble de TV"
  | "Baño"
  | "Proyecto Completo";

export type ComunaType =
  | "Puerto Montt"
  | "Puerto Varas"
  | "Llanquihue"
  | "Frutillar"
  | "Otra";

const PROJECT_OPTIONS: { value: ProjectType; hint: string }[] = [
  { value: "Cocina", hint: "Cocina integral, isla o cambio de cubiertas" },
  { value: "Clóset", hint: "Clóset a medida o Walk-in Clóset" },
  { value: "Mueble de TV", hint: "Rack de TV, panel alistonado o estar" },
  { value: "Baño", hint: "Vanitorio RH a medida o columna de baño" },
  { value: "Proyecto Completo", hint: "Vivienda completa / varios ambientes" },
];

const COMUNA_OPTIONS: ComunaType[] = [
  "Puerto Montt",
  "Puerto Varas",
  "Llanquihue",
  "Frutillar",
  "Otra",
];

interface QuickQuoterProps {
  selectedCategory?: ProjectType;
}

export default function QuickQuoter({ selectedCategory }: QuickQuoterProps) {
  const [tipo, setTipo] = useState<ProjectType>("Cocina");
  const [comuna, setComuna] = useState<ComunaType>("Puerto Montt");

  useEffect(() => {
    if (selectedCategory) {
      setTipo(selectedCategory);
    }
  }, [selectedCategory]);

  // Exact required URL formula:
  // https://wa.me/56954122847?text=Hola,%20quiero%20cotizar%20un(a)%20[TIPO]%20en%20la%20comuna%20de%20[COMUNA]
  const whatsappUrl = `https://wa.me/56954122847?text=Hola,%20quiero%20cotizar%20un(a)%20${encodeURIComponent(
    tipo
  )}%20en%20la%20comuna%20de%20${encodeURIComponent(comuna)}`;

  const previewText = `Hola, quiero cotizar un(a) ${tipo} en la comuna de ${comuna}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="cotizador"
      className="py-20 lg:py-28 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1d8535] font-semibold">
              <span>04 / COTIZADOR RÁPIDO DIRECTO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] leading-tight">
              Inicia tu cotización en menos de 30 segundos.
            </h2>

            <p className="text-base text-[#334155] leading-relaxed">
              Selecciona qué mueble necesitas fabricar y tu comuna en la Región
              de Los Lagos. Te atenderemos directamente desde nuestro taller en
              Puerto Montt para orientarte en materiales, medidas o agendar una
              visita.
            </p>

            <div className="pt-2 space-y-3.5 border-t border-slate-200/80">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#27a343] flex-shrink-0 mt-1" />
                <p className="text-sm text-[#334155]">
                  <strong className="text-[#0f172a] font-semibold">
                    ¿Tienes medidas o fotos del espacio?
                  </strong>{" "}
                  Puedes adjuntarlas directamente en el chat de WhatsApp al
                  abrir la conversación.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#27a343] flex-shrink-0 mt-1" />
                <p className="text-sm text-[#334155]">
                  <strong className="text-[#0f172a] font-semibold">
                    Atención personalizada:
                  </strong>{" "}
                  Respondemos de lunes a sábado en horario de taller (+56 9
                  5412 2847).
                </p>
              </div>
            </div>
          </div>

          {/* Right Interactive Form Card (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-[#f8fafc] rounded-xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-[0_12px_35px_-15px_rgba(15,23,42,0.06)] space-y-8"
            >
              {/* Step 1: Tipo de Mueble */}
              <div className="space-y-3.5">
                <label
                  htmlFor="select-tipo"
                  className="flex items-center justify-between text-sm font-bold text-[#0f172a]"
                >
                  <span className="inline-flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#27a343]" />
                    1. ¿Qué necesitas fabricar?
                  </span>
                  <span className="text-xs font-mono font-normal text-slate-500">
                    Requerido
                  </span>
                </label>

                {/* Accessible Native Select */}
                <select
                  id="select-tipo"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value as ProjectType)}
                  className="w-full rounded-lg bg-white border border-slate-300 px-4 py-3 text-sm font-medium text-[#0f172a] shadow-sm focus:border-[#27a343] focus:outline-none focus:ring-2 focus:ring-[#27a343]/20"
                >
                  {PROJECT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.value} — {opt.hint}
                    </option>
                  ))}
                </select>

                {/* Visual Quick Pills */}
                <div
                  className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1"
                  role="group"
                  aria-label="Selección rápida de tipo de proyecto"
                >
                  {PROJECT_OPTIONS.map((opt) => {
                    const active = tipo === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setTipo(opt.value)}
                        className={`text-left px-3.5 py-2.5 rounded-lg border text-xs transition-all ${
                          active
                            ? "bg-[#0f172a] text-white border-[#0f172a] font-semibold shadow-sm"
                            : "bg-white text-[#334155] border-slate-200 hover:border-slate-300 font-medium"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span>{opt.value}</span>
                          {active && (
                            <span className="w-2 h-2 rounded-full bg-[#4ade80]" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Comuna */}
              <div className="space-y-3.5">
                <label
                  htmlFor="select-comuna"
                  className="flex items-center justify-between text-sm font-bold text-[#0f172a]"
                >
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#27a343]" />
                    2. Selecciona tu Comuna
                  </span>
                  <span className="text-xs font-mono font-normal text-slate-500">
                    Región de Los Lagos
                  </span>
                </label>

                {/* Accessible Native Select */}
                <select
                  id="select-comuna"
                  value={comuna}
                  onChange={(e) => setComuna(e.target.value as ComunaType)}
                  className="w-full rounded-lg bg-white border border-slate-300 px-4 py-3 text-sm font-medium text-[#0f172a] shadow-sm focus:border-[#27a343] focus:outline-none focus:ring-2 focus:ring-[#27a343]/20"
                >
                  {COMUNA_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>

                {/* Visual Quick Pills for Comuna */}
                <div
                  className="flex flex-wrap gap-2 pt-1"
                  role="group"
                  aria-label="Selección rápida de comuna"
                >
                  {COMUNA_OPTIONS.map((c) => {
                    const active = comuna === c;
                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setComuna(c)}
                        className={`px-3.5 py-2 rounded-lg border text-xs transition-all ${
                          active
                            ? "bg-[#f2fbf4] text-[#154522] border-[#27a343] font-semibold"
                            : "bg-white text-[#334155] border-slate-200 hover:border-slate-300 font-medium"
                        }`}
                      >
                        {c}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message Preview Box */}
              <div className="bg-white rounded-lg border border-slate-200/90 p-4 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  <span>Vista previa del mensaje a enviar</span>
                  <span className="text-[#1d8535] font-semibold">
                    WhatsApp +56 9 5412 2847
                  </span>
                </div>
                <p className="text-sm font-medium text-[#0f172a]">
                  &ldquo;{previewText}&rdquo;
                </p>
              </div>

              {/* Direct Action Link & Submit Button */}
              <div className="pt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white font-semibold text-base transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.99] group"
                >
                  <MessageCircle className="w-5 h-5 text-[#4ade80] fill-[#4ade80]/15" />
                  <span>
                    Enviar cotización de {tipo} en {comuna}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
