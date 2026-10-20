import React from "react";
import { Users, Hammer, MapPin, Award } from "lucide-react";

const STATS = [
  {
    icon: Users,
    value: "+4.000",
    label: "Seguidores en la Región",
    desc: "@mueblesyespaciopuertomontt",
  },
  {
    icon: Hammer,
    value: "100%",
    label: "Fabricación Propia",
    desc: "En nuestro taller de Puerto Montt",
  },
  {
    icon: MapPin,
    value: "4 Comunas",
    label: "Cobertura en Terreno",
    desc: "Pto. Montt, Pto. Varas, Llanquihue, Frutillar",
  },
  {
    icon: Award,
    value: "100%",
    label: "Garantía de Armado",
    desc: "Ajuste, regulación y postventa",
  },
];

export default function CountersSection() {
  return (
    <section className="py-16 bg-[#212121] text-white border-b border-[#2d2d2d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-4 p-5 border-l-2 border-[#26a422] bg-[#272727]/70 rounded-sm"
              >
                <div className="w-12 h-12 rounded-sm bg-[#26a422]/15 flex items-center justify-center text-[#26a422] flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight leading-none">
                    {st.value}
                  </div>
                  <div className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-200 mt-1.5">
                    {st.label}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5 font-sans">
                    {st.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
