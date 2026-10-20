"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, MapPin, Layers, ArrowRight, CheckCircle2, Phone, Clock } from "lucide-react";

export type ProjectType = "Cocina" | "Clóset" | "Mueble de TV" | "Baño" | "Proyecto Completo";
export type ComunaType = "Puerto Montt" | "Puerto Varas" | "Llanquihue" | "Frutillar" | "Otra Comuna";

const PROJECT_TYPES: { value: ProjectType; label: string; desc: string }[] = [
  { value: "Cocina", label: "Cocina Integral", desc: "Muebles base, aéreos, isla o cubiertas en cuarzo" },
  { value: "Clóset", label: "Clóset o Walk-in", desc: "Ajuste piso a cielo milimétrico con cajoneras" },
  { value: "Mueble de TV", label: "Mueble de TV / Estar", desc: "Panel acústico alistonado y maderas nativas" },
  { value: "Baño", label: "Vanitorio de Baño", desc: "Sustrato RH 100% resistente a vapor y condensación" },
  { value: "Proyecto Completo", label: "Vivienda Completa", desc: "Mobiliario integral para remodelación o nueva casa" },
];

const COMUNAS: ComunaType[] = [
  "Puerto Montt",
  "Puerto Varas",
  "Llanquihue",
  "Frutillar",
  "Otra Comuna",
];

interface QuoterSectionProps {
  selectedCategory?: string;
}

export default function QuoterSection({ selectedCategory }: QuoterSectionProps) {
  const [tipo, setTipo] = useState<ProjectType>("Cocina");
  const [comuna, setComuna] = useState<ComunaType>("Puerto Montt");
  const [metros, setMetros] = useState<string>("3.0");

  useEffect(() => {
    if (selectedCategory) {
      const match = PROJECT_TYPES.find((p) => p.value === selectedCategory);
      if (match) setTipo(match.value);
    }
  }, [selectedCategory]);

  const whatsappUrl = `https://wa.me/56954122847?text=${encodeURIComponent(
    `Hola, quiero cotizar un(a) ${tipo} de aprox. ${metros}m lineales en la comuna de ${comuna}. ¿Podrían orientarme con presupuesto y visita técnica?`
  )}`;

  return (
    <section id="cotizador" className="py-20 lg:py-24 bg-white border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (5 cols): Context and Trust */}
          <div className="lg:col-span-5 space-y-6">
            <div className="sec-title mb-6">
              <span className="text-xs font-heading font-black tracking-widest text-[#26a422] uppercase block mb-1">
                PRESUPUESTO DIRECTO DE TALLER
              </span>
              <h2>Cotizador en Línea</h2>
            </div>

            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#272727] leading-snug">
              Configura tu solicitud en 30 segundos y recibe atención directa por WhatsApp.
            </h3>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-sans">
              Selecciona qué mueble necesitas, los metros estimados y tu comuna en la Región de Los Lagos. Podrás enviarnos tus planos, bocetos o coordinar visita en terreno con nuestro equipo maestro.
            </p>

            <div className="space-y-3 pt-4 border-t border-neutral-200">
              <div className="flex items-center gap-3 text-sm text-[#272727] font-medium font-sans">
                <CheckCircle2 className="w-4 h-4 text-[#26a422] flex-shrink-0" />
                <span>Atención directa de lunes a sábado (+56 9 5412 2847)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#272727] font-medium font-sans">
                <CheckCircle2 className="w-4 h-4 text-[#26a422] flex-shrink-0" />
                <span>Presupuesto transparente sin costos ocultos</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#272727] font-medium font-sans">
                <CheckCircle2 className="w-4 h-4 text-[#26a422] flex-shrink-0" />
                <span>Muestrarios de melaminas y cubiertas físicas en terreno</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Interactive Quoter Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#f7f7f7] border-2 border-[#272727] p-6 sm:p-10 shadow-2xl rounded-sm space-y-8">
              {/* Step 1: Select Type */}
              <div className="space-y-3">
                <label className="font-heading font-bold text-xs uppercase tracking-wider text-[#272727] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#26a422]" />
                  <span>1. ¿Qué necesitas fabricar?</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PROJECT_TYPES.map((item) => {
                    const active = tipo === item.value;
                    return (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => setTipo(item.value)}
                        className={`text-left p-3.5 border transition-all rounded-sm ${
                          active
                            ? "bg-[#272727] text-white border-[#272727] shadow-md"
                            : "bg-white text-[#272727] border-[#e0e0e0] hover:border-[#26a422]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-heading font-bold text-xs uppercase tracking-wide">
                            {item.label}
                          </span>
                          <span
                            className={`w-2.5 h-2.5 rounded-full ${
                              active ? "bg-[#26a422]" : "bg-neutral-300"
                            }`}
                          />
                        </div>
                        <p className={`text-[11px] mt-1 font-sans ${active ? "text-neutral-300" : "text-neutral-500"}`}>
                          {item.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Metros Lineales Aproximados */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="font-heading font-bold text-xs uppercase tracking-wider text-[#272727]">
                    2. Metros Lineales Estimados: <span className="text-[#26a422] font-black">{metros} metros</span>
                  </label>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="0.5"
                  value={metros}
                  onChange={(e) => setMetros(e.target.value)}
                  className="w-full accent-[#26a422] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-neutral-400 font-mono">
                  <span>1 metro</span>
                  <span>4 metros</span>
                  <span>8 metros</span>
                  <span>12+ metros</span>
                </div>
              </div>

              {/* Step 3: Select Comuna */}
              <div className="space-y-3">
                <label className="font-heading font-bold text-xs uppercase tracking-wider text-[#272727] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#26a422]" />
                  <span>3. Selecciona tu Comuna de Instalación</span>
                </label>

                <div className="flex flex-wrap gap-2">
                  {COMUNAS.map((c) => {
                    const active = comuna === c;
                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setComuna(c)}
                        className={`font-heading text-xs font-bold uppercase tracking-wider px-4 py-2.5 transition-all rounded-sm border ${
                          active
                            ? "bg-[#26a422] text-white border-[#26a422]"
                            : "bg-white text-[#272727] border-[#e0e0e0] hover:bg-neutral-100"
                        }`}
                      >
                        {c}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message Preview Box */}
              <div className="p-4 bg-[#f2fbf4] border border-[#26a422]/30 rounded-sm space-y-1">
                <div className="flex items-center justify-between text-[11px] font-heading font-bold uppercase tracking-wider text-[#1d8535]">
                  <span>Mensaje listo para enviar a WhatsApp:</span>
                  <span>+56 9 5412 2847</span>
                </div>
                <p className="font-sans text-xs sm:text-sm font-semibold text-[#0f172a]">
                  &ldquo;Hola, quiero cotizar un(a) {tipo} de aprox. {metros}m en {comuna}&rdquo;
                </p>
              </div>

              {/* Submit CTA Button */}
              <div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full theme-btn btn-style-one flex items-center justify-center gap-3 py-4 text-xs font-black"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>ENVIAR COTIZACIÓN A WHATSAPP</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
