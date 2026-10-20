import React from "react";
import { Ruler, FileSpreadsheet, Hammer, Home, ArrowRight } from "lucide-react";

const WORKFLOW_STEPS = [
  {
    step: "1",
    code: "FASE 01",
    title: "1. Medición / Envío de planos",
    description:
      "Puedes enviarnos tus medidas preliminares o planos por WhatsApp para una primera estimación, o agendar directamente una visita de rectificación milimétrica en terreno.",
    deliverable: "Levantamiento de medidas reales y puntos sanitarios/eléctricos",
    icon: Ruler,
  },
  {
    step: "2",
    code: "FASE 02",
    title: "2. Diseño & Cotización",
    description:
      "Definimos la distribución interior óptima (cajoneras, repisas, aperturas), seleccionamos colores de melamina y tipo de cubierta, y entregamos un presupuesto claro y cerrado.",
    deliverable: "Propuesta de distribución, elección de materiales y cotización formal",
    icon: FileSpreadsheet,
  },
  {
    step: "3",
    code: "FASE 03",
    title: "3. Fabricación en taller",
    description:
      "Ejecutamos el dimensionado de precisión, enchapado industrial de cantos en PVC y pre-armado de módulos en nuestro taller de Puerto Montt bajo control de calidad directo.",
    deliverable: "Módulos pre-armados y revisados antes de salir a terreno",
    icon: Hammer,
  },
  {
    step: "4",
    code: "FASE 04",
    title: "4. Instalación final en tu hogar",
    description:
      "Nuestro propio equipo traslada e instala el mobiliario en tu vivienda, realizando la nivelación láser, fijación a muro, regulación de bisagras, sellado y limpieza final.",
    deliverable: "Entrega conforme y garantía postventa local directa",
    icon: Home,
  },
];

export default function WorkflowSection() {
  return (
    <section
      id="servicios"
      className="py-20 lg:py-28 bg-[#f8fafc] border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1d8535] font-semibold">
              <span>03 / FLUJO DE TRABAJO SIMPLE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a]">
              De la primera medida en terreno a la instalación limpia en tu casa.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#334155] max-w-md leading-relaxed">
            Un proceso ordenado y transparente de principio a fin, sin costos
            sorpresa ni retrasos por terceros.
          </p>
        </div>

        {/* 4-Step Architectural Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WORKFLOW_STEPS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-white rounded-xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-[0_1px_3px_rgba(15,23,42,0.03)] hover:border-slate-300 transition-all"
              >
                <div>
                  {/* Top Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#1d8535] bg-[#f2fbf4] px-2.5 py-1 rounded border border-[#c3eccb]">
                      {item.code}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center justify-center text-[#0f172a]">
                      <IconComponent className="w-4 h-4 text-[#27a343]" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-bold text-[#0f172a] leading-snug mb-3">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-[#334155] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Deliverable Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                    Entregable de etapa:
                  </span>
                  <p className="text-xs font-medium text-[#0f172a]">
                    {item.deliverable}
                  </p>
                </div>

                {/* Desktop connector arrow */}
                {idx < WORKFLOW_STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-200 items-center justify-center text-slate-400 shadow-sm">
                    <ArrowRight className="w-3 h-3" />
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
