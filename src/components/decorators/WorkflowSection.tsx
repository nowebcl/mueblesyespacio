import React from "react";
import { Ruler, FileSpreadsheet, Hammer, Home, ArrowRight } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "1. Medición / Envío de Planos",
    desc: "Envíanos tus medidas o planos preliminares por WhatsApp para una primera estimación, o coordinamos una visita de rectificación técnica en terreno.",
    icon: Ruler,
  },
  {
    step: "02",
    title: "2. Diseño & Cotización",
    desc: "Definimos la distribución óptima de cajones y puertas, elegimos los colores de melamina RH y tipo de cubierta, y emitimos una cotización cerrada.",
    icon: FileSpreadsheet,
  },
  {
    step: "03",
    title: "3. Fabricación en Taller",
    desc: "Corte milimétrico, enchapado industrial de cantos en PVC termofusionado y pre-armado de módulos bajo estricto control de calidad en Puerto Montt.",
    icon: Hammer,
  },
  {
    step: "04",
    title: "4. Instalación Final en tu Hogar",
    desc: "Montaje limpio por nuestro propio equipo de maestros, nivelación láser, regulación de bisagras con cierre suave y entrega con garantía local.",
    icon: Home,
  },
];

export default function WorkflowSection() {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="decor-title-center">
          <span className="text-xs font-heading font-black tracking-widest text-[#27a343] uppercase block mb-1">
            MÉTODO ORDENADO DE TRABAJO
          </span>
          <h2>Flujo de Trabajo Simple</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-sm sm:text-base mt-2">
            Desde la primera conversación hasta la entrega final de tus llaves con garantía directa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={st.step}
                className="relative bg-[#f7f7f7] border border-[#e5e5e5] p-6 sm:p-7 rounded-sm flex flex-col justify-between hover:border-[#27a343] transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-black text-2xl text-[#27a343]">
                      {st.step}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-white border border-[#e5e5e5] flex items-center justify-center text-[#272727] group-hover:bg-[#27a343] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-base text-[#272727] mb-2 leading-snug">
                    {st.title}
                  </h3>

                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-[#e5e5e5] text-neutral-400 flex items-center justify-center shadow-sm">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
