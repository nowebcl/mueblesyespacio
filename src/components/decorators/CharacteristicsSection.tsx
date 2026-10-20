import React from "react";
import { Droplets, Sliders, ShieldCheck, Hammer, CheckCircle2 } from "lucide-react";

const SPECS = [
  {
    icon: Droplets,
    title: "Sustratos RH Antihumedad",
    text: "Melaminas y tableros MDF hidrófugos de 18mm con resinas especiales que impiden el hinchamiento por vapor en el sur.",
  },
  {
    icon: Sliders,
    title: "Herrajes de Cierre Suave",
    text: "Bisagras clip-on con pistón amortiguador y correderas telescópicas de extracción total Ducasse / Blum.",
  },
  {
    icon: ShieldCheck,
    title: "Cubiertas de Alto Tráfico",
    text: "Piedras de cuarzo bactericidas, granito natural resistente a calor extremo y postformados sellados.",
  },
  {
    icon: Hammer,
    title: "Fabricación Local Directa",
    text: "Taller en Puerto Montt sin intermediarios ni cobros inflados de retail. Servicio postventa en terreno.",
  },
];

export default function CharacteristicsSection() {
  return (
    <section id="caracteristicas" className="default-two-column py-20 lg:py-24 bg-white border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column (spec-column) */}
          <div className="lg:col-span-7">
            {/* Sec Title Three */}
            <div className="sec-title-three">
              <div className="sub-title">Muebles &amp; Espacio</div>
              <h2>Características &amp; Calidad de Taller</h2>
            </div>

            <div className="text text-[#777777] font-sans text-base leading-relaxed mb-8">
              La diferencia entre un mueble que se descalza al primer invierno y uno que permanece perfecto por décadas reside en los sustratos internos y el estándar de armado. Diseñamos para el clima frío y húmedo de Los Lagos.
            </div>

            {/* 4 Spec Blocks in 2x2 Grid */}
            <div className="specs grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
              {SPECS.map((sp, idx) => {
                const Icon = sp.icon;
                return (
                  <div key={idx} className="spec-block group">
                    <div className="inner-box">
                      <div className="icon-box">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3>{sp.title}</h3>
                      <div className="text">{sp.text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Workshop Image Showcase */}
          <div className="lg:col-span-5">
            <div className="relative border-4 border-[#272727] p-2 bg-white shadow-2xl rounded-sm">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-200">
                <img
                  src="/images/craftsmanship_detail.jpg"
                  alt="Detalle de fabricación artesanal - Muebles y Espacio Puerto Montt"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-[#26a422] text-xs font-heading font-black tracking-widest uppercase mb-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Estándar Sur de Chile</span>
                  </div>
                  <h4 className="font-heading font-bold text-lg leading-tight">
                    Corte CNC Milimétrico &amp; Tapacantos Termofusionados 2mm
                  </h4>
                </div>
              </div>

              {/* Bottom spec bar */}
              <div className="p-4 bg-[#272727] text-white flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-heading font-bold uppercase tracking-wider text-neutral-300">
                    Sustrato Certificado
                  </p>
                  <p className="font-heading font-bold text-sm text-[#26a422]">
                    18mm Melamina RH Hidrófuga
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] font-heading font-bold uppercase tracking-wider text-neutral-300">
                    Garantía Taller
                  </p>
                  <p className="font-heading font-bold text-sm text-white">
                    100% Cobertura Real
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
