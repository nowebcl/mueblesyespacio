import React from "react";
import { ShieldCheck } from "lucide-react";

const SPONSORS = [
  {
    name: "ARAUCO",
    role: "Melaminas Vesto RH",
    description: "Tableros hidrófugos con protección antimicrobiana de cobre.",
  },
  {
    name: "MASISA",
    role: "Tableros de Precisión",
    description: "Sustratos de alto estándar para cortes limpios sin astillado.",
  },
  {
    name: "BLUM",
    role: "Austria Herrajes",
    description: "Bisagras clip top Blumotion y correderas de extracción total.",
  },
  {
    name: "DUCASSE",
    role: "Sistemas Correderos",
    description: "Rieles de aluminio y carros reforzados para puertas pesadas.",
  },
  {
    name: "SILESTONE",
    role: "Superficies de Cuarzo",
    description: "Cubiertas bactericidas resistentes a manchas, rayones y calor.",
  },
  {
    name: "EGGER",
    role: "Diseños Europeos",
    description: "Texturas sincronizadas de madera con acabado ultra mate.",
  },
];

export default function SponsorsSection() {
  return (
    <section className="sponsors-section bg-[#f4f4f4] py-16 lg:py-20 border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-heading font-black tracking-widest text-[#26a422] uppercase block mb-1">
            ALIANZAS &amp; MATERIALES DE PRIMERA LÍNEA
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#272727] uppercase tracking-wide">
            Marcas &amp; Proveedores de Confianza
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500 font-sans max-w-xl mx-auto mt-2">
            Solo utilizamos insumos certificados internacionalmente para garantizar durabilidad en el sur.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {SPONSORS.map((sp, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#e0e0e0] rounded-sm p-5 text-center transition-all duration-300 hover:border-[#26a422] hover:shadow-lg group flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-[#f2fbf4] text-[#26a422] flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-heading font-black text-base text-[#272727] group-hover:text-[#26a422] transition-colors">
                  {sp.name}
                </h4>
                <p className="text-[11px] font-heading font-bold text-neutral-400 uppercase tracking-wider mt-0.5">
                  {sp.role}
                </p>
              </div>
              <p className="text-[11px] text-neutral-500 font-sans mt-3 border-t border-neutral-100 pt-2 leading-tight">
                {sp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
