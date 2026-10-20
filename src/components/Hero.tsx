import React from "react";
import {
  MessageCircle,
  ArrowRight,
  Users,
  Ruler,
  Compass,
  CheckCircle2,
  MapPin,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-white border-b border-slate-200/80 overflow-hidden">
      {/* Subtle architectural background hairlines */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Editorial Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow Location Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#f8fafc] border border-slate-200/90 text-xs font-medium text-[#334155]">
              <span className="w-2 h-2 rounded-full bg-[#27a343]" />
              <span>TALLER PROPIO · REGIÓN DE LOS LAGOS</span>
              <span className="hidden sm:inline text-slate-300">|</span>
              <span className="hidden sm:inline text-[#0f172a] font-semibold">
                Puerto Montt · Puerto Varas · Llanquihue · Frutillar
              </span>
            </div>

            {/* Main Direct Headline */}
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-[#0f172a] leading-[1.08]">
                Mobiliario a medida diseñado y fabricado en{" "}
                <span className="underline decoration-[#27a343]/50 decoration-2 underline-offset-8">
                  Puerto Montt
                </span>
                .
              </h1>

              {/* Grounded Subtitle */}
              <p className="text-lg sm:text-xl text-[#334155] leading-relaxed max-w-2xl font-normal">
                Cocinas integrales, clósets y proyectos personalizados con
                maderas nobles y melaminas de alta durabilidad para el clima del
                sur.
              </p>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="https://wa.me/56954122847?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20de%20mobiliario%20a%20medida."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white font-medium text-base transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.99] group"
              >
                <MessageCircle className="w-5 h-5 text-[#4ade80] fill-[#4ade80]/15" />
                <span>Cotizar por WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-white hover:bg-[#f8fafc] text-[#0f172a] border border-slate-300 hover:border-slate-400 font-medium text-base transition-all duration-200"
              >
                <span>Ver proyectos realizados</span>
              </a>
            </div>

            {/* Micro-Trust Data Bar */}
            <div className="pt-6 border-t border-slate-200/80">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-md bg-[#f2fbf4] border border-[#c3eccb] flex items-center justify-center text-[#1d8535]">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0f172a]">
                      +4.000 seguidores en la región
                    </p>
                    <p className="text-xs text-[#334155] mt-0.5">
                      Comunidad real en @mueblesyespaciopuertomontt
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-md bg-[#f2fbf4] border border-[#c3eccb] flex items-center justify-center text-[#1d8535]">
                    <Ruler className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0f172a]">
                      Instalación en terreno
                    </p>
                    <p className="text-xs text-[#334155] mt-0.5">
                      Montaje limpio por nuestro propio equipo
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-md bg-[#f2fbf4] border border-[#c3eccb] flex items-center justify-center text-[#1d8535]">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0f172a]">
                      Asesoría en diseño
                    </p>
                    <p className="text-xs text-[#334155] mt-0.5">
                      Optimización de espacio y muestrario real
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial Photography Composition (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Architectural Frame */}
              <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-[#f8fafc] shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
                {/* Top technical header bar inside frame */}
                <div className="px-4 py-2.5 bg-white border-b border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-[#334155]">
                  <span>PROYECTO · COCINA INTEGRAL SUR</span>
                  <span className="text-[#1d8535] font-semibold">
                    ESPESOR 18MM RH
                  </span>
                </div>

                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                  <img
                    src="/images/08ce74d3-fd8b-4eb9-beda-d732fd031c43.png"
                    alt="Cocina integral a medida en melamina RH y cubierta de mármol negro fabricada en Puerto Montt"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  />

                  {/* Subtle architectural caption card at bottom of photo */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#1d8535] font-semibold">
                        Especificación de Taller
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#334155]">
                        <MapPin className="w-3 h-3 text-[#27a343]" />
                        Cuenca del Llanquihue
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-[#0f172a]">
                      Melamina RH Hidrófuga + Cubierta de Cuarzo &amp; Herrajes Cierre Suave
                    </p>
                    <div className="mt-2 pt-2 border-t border-slate-100 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#334155]">
                      <span className="inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-[#27a343]" />
                        Sellado perimetral PVC 2mm
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-[#27a343]" />
                        Garantía directa local
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Architectural corner marker */}
              <div className="hidden sm:flex -bottom-4 -left-4 absolute bg-[#0f172a] text-white px-4 py-3 rounded-lg shadow-md items-center gap-3 border border-slate-800">
                <div className="w-2 h-8 bg-[#27a343] rounded-full" />
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-300">
                    Fabricación Directa
                  </p>
                  <p className="text-xs font-semibold text-white">
                    Sin intermediarios en Puerto Montt
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
