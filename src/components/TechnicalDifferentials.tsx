"use client";

import React, { useState } from "react";
import { Droplets, Sliders, Wrench, ShieldCheck, CheckCircle2 } from "lucide-react";

const DIFFERENTIALS = [
  {
    number: "01",
    icon: Droplets,
    title: "Materiales resistentes a la humedad (Melaminas RH y sellado perimetral)",
    shortTag: "PROTECCIÓN HIGROMÉTRICA SUR",
    description:
      "La lluvia constante, la condensación en ventanas y la calefacción en invierno deterioran los muebles convencionales. Utilizamos tableros RH (Resistentes a la Humedad) de 18mm en zonas húmedas y sellado perimetral con tapacantos de PVC rígido termofusionado que impide que el vapor penetre al sustrato.",
    technicalMetrics: [
      "Tableros aglomerados y MDF hidrofugados de 18mm",
      "Enchapado de cantos en PVC de 1mm a 2mm de espesor",
      "Sellado sanitario de silicona neutra antihongos en encuentros con muro",
    ],
  },
  {
    number: "02",
    icon: Sliders,
    title: "Herrajes de alta durabilidad y cierre suave",
    shortTag: "INGENIERÍA EN MOVIMIENTO",
    description:
      "Un mueble a medida se juzga por cómo se siente al abrirse después de 5 años. Incorporamos bisagras con pistón hidráulico de cierre suave (soft-close) y correderas telescópicas u ocultas de extracción total que soportan el peso real de ollas, vajilla y ropa sin descuadrarse.",
    technicalMetrics: [
      "Bisagras clip-on con amortiguación integrada regulables en 3 ejes",
      "Correderas de alta carga (35kg a 45kg por cajón)",
      "Perfilería de aluminio anodizado en puertas correderas de clóset",
    ],
  },
  {
    number: "03",
    icon: Wrench,
    title: "Fabricación propia en taller local (soporte y garantía postventa directa)",
    shortTag: "TALLER EN PUERTO MONTT",
    description:
      "No tercerizamos tu proyecto ni dependemos de despachos desde Santiago. Fabricamos directamente en nuestro taller de Puerto Montt, lo que nos permite controlar cada corte, cumplir los plazos acordados y responder personalmente en tu domicilio si necesitas regulación o postventa.",
    technicalMetrics: [
      "Trato directo con quienes diseñan, fabrican e instalan tu mueble",
      "Visitas técnicas reales en Puerto Montt, Puerto Varas, Llanquihue y Frutillar",
      "Garantía postventa local para regulación de puertas y herrajes",
    ],
  },
];

const MATERIAL_SAMPLES = [
  {
    id: "melamina-rh",
    name: "Melaminas RH Texturadas (18mm)",
    origin: "Tableros Técnicos Hidrófugos",
    swatchColor: "#d6ccc2",
    swatchSecondary: "#334155",
    idealFor: "Cocinas, Vanitorios de Baño, Interiores de Clóset y Logias",
    summary:
      "Núcleo con resinas resistentes a la humedad y lámina decorativa sincronizada con textura poro madera o acabado mate anti-huella.",
    highlights: ["Alta resistencia al vapor", "Fácil limpieza diaria", "Estabilidad dimensional"],
  },
  {
    id: "cubiertas-piedra",
    name: "Cubiertas de Cuarzo, Granito & Postformado",
    origin: "Superficies de Trabajo de Alto Tráfico",
    swatchColor: "#f1f5f9",
    swatchSecondary: "#0f172a",
    idealFor: "Mesones de Cocina, Islas Centrales y Cubiertas de Baño",
    summary:
      "Desde la nula porosidad e higiene absoluta del Cuarzo y la resistencia térmica del Granito natural, hasta la versatilidad del Postformado con retorno sanitario.",
    highlights: ["Baja absorción de líquidos", "Resistencia a rayaduras", "Cortes a medida para encimera y lavaplatos"],
  },
  {
    id: "maderas-nativas",
    name: "Maderas Nobles & Enchapados Naturales",
    origin: "Tradición Maderera del Sur",
    swatchColor: "#9c6644",
    swatchSecondary: "#7f4f24",
    idealFor: "Racks de TV, Paneles Alistonados, Repisas Vistas y Comedores",
    summary:
      "Vetas auténticas seleccionadas y secadas en cámara, protegidas con lacas poliuretánicas semimate o aceites naturales que realzan el carácter cálido del hogar sureño.",
    highlights: ["Veta natural única", "Tacto cálido y orgánico", "Envejecimiento noble"],
  },
];

export default function TechnicalDifferentials() {
  const [selectedMaterial, setSelectedMaterial] = useState(MATERIAL_SAMPLES[0]);

  return (
    <section
      id="materiales"
      className="py-20 lg:py-28 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1d8535] font-semibold">
            <span>02 / POR QUÉ ELEGIRNOS EN EL SUR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a]">
            Estándar constructivo pensado para el clima y uso real de la Región de Los Lagos.
          </h2>
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
            La diferencia entre un mueble que se hincha al año y uno que dura décadas está en lo que no se ve a simple vista: el sustrato interior, el sellado de cantos y la calidad del herraje.
          </p>
        </div>

        {/* 3 Core Technical Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DIFFERENTIALS.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.number}
                className="bg-[#f8fafc] rounded-xl border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold tracking-wider text-[#1d8535] bg-[#f2fbf4] px-2.5 py-1 rounded border border-[#c3eccb]">
                      {item.shortTag}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0f172a] shadow-sm">
                      <IconComponent className="w-5 h-5 text-[#27a343]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#0f172a] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#334155] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200/80 space-y-2.5">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                    Especificación estándar:
                  </p>
                  {item.technicalMetrics.map((metric) => (
                    <div
                      key={metric}
                      className="flex items-start gap-2 text-xs text-[#0f172a] font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#27a343] flex-shrink-0 mt-0.5" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Material Swatch Explorer */}
        <div className="mt-14 rounded-xl bg-[#f1f5f9] border border-slate-200/90 p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#0f172a] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#27a343]" />
                <span>Muestrario Físico en Terreno</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a] tracking-tight">
                Elige texturas y cubiertas viendo las muestras reales en la luz de tu casa.
              </h3>
              <p className="text-sm text-[#334155] leading-relaxed">
                Cuando agendamos una visita técnica, llevamos muestrarios físicos de melaminas, cantos y cubiertas para que compares tonos directamente con tu piso, muros e iluminación.
              </p>

              {/* Selector Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                {MATERIAL_SAMPLES.map((sample) => {
                  const isActive = selectedMaterial.id === sample.id;
                  return (
                    <button
                      key={sample.id}
                      type="button"
                      onClick={() => setSelectedMaterial(sample)}
                      className={`text-left px-4 py-3.5 rounded-lg border transition-all flex items-center justify-between ${
                        isActive
                          ? "bg-white border-[#0f172a] shadow-sm text-[#0f172a]"
                          : "bg-white/60 border-slate-200/80 text-[#334155] hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-5 h-5 rounded-full border border-slate-300 flex-shrink-0"
                          style={{ backgroundColor: sample.swatchColor }}
                        />
                        <span className="text-sm font-semibold">
                          {sample.name}
                        </span>
                      </div>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isActive ? "bg-[#27a343]" : "bg-slate-300"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Material Spec Sheet */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#1d8535] font-semibold">
                    {selectedMaterial.origin}
                  </span>
                  <h4 className="text-xl font-bold text-[#0f172a] mt-0.5">
                    {selectedMaterial.name}
                  </h4>
                </div>
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-6 h-6 rounded border border-slate-200"
                    style={{ backgroundColor: selectedMaterial.swatchColor }}
                    title="Tono base referencial"
                  />
                  <span
                    className="w-6 h-6 rounded border border-slate-200"
                    style={{ backgroundColor: selectedMaterial.swatchSecondary }}
                    title="Tono contraste referencial"
                  />
                </div>
              </div>

              <div className="py-5 space-y-4">
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  {selectedMaterial.summary}
                </p>

                <div className="bg-[#f8fafc] rounded-lg p-4 border border-slate-200/60">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-1">
                    Aplicación recomendada:
                  </span>
                  <span className="text-sm font-semibold text-[#0f172a]">
                    {selectedMaterial.idealFor}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {selectedMaterial.highlights.map((h) => (
                    <div
                      key={h}
                      className="px-3 py-2.5 rounded-lg bg-[#f2fbf4] border border-[#c3eccb] text-xs font-medium text-[#154522] flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#27a343] flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
