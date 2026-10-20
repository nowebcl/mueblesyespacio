"use client";

import React from "react";
import { ArrowUpRight, Layers, Check, Sparkles } from "lucide-react";

export interface SpecialtyItem {
  id: string;
  number: string;
  title: string;
  quoterCategory: "Cocina" | "Clóset" | "Mueble de TV" | "Baño";
  subtitle: string;
  description: string;
  materials: string[];
  specs: string[];
  locationExample: string;
  image: string;
  imageAlt: string;
  colSpan: string;
  aspectClass: string;
}

const SPECIALTIES: SpecialtyItem[] = [
  {
    id: "cocinas-integrales",
    number: "01",
    title: "Cocinas Integrales & Cubiertas (Granito, Cuarzo, Postformado)",
    quoterCategory: "Cocina",
    subtitle: "Diseño ergonómico, islas centrales y resistencia real al uso diario",
    description:
      "Proyectamos cocinas a medida que aprovechan cada centímetro de tu planta arquitectónica. Estructuras interiores en melamina RH de 18mm con cantos de PVC termofusionados, despensas extraíbles y cubiertas a elección en Cuarzo, Granito natural o Postformado de alta densidad.",
    materials: ["Cubiertas de Cuarzo", "Granito Natural", "Postformado", "Melamina RH 18mm"],
    specs: [
      "Cajoneras de extracción total con freno suave",
      "Integración exacta de encimera, horno y campana",
      "Zócalos retranqueados resistentes a la humedad del piso",
    ],
    locationExample: "Puerto Montt & Puerto Varas",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85",
    imageAlt:
      "Cocina integral moderna con isla de cuarzo y mobiliario en madera natural y gris grafito",
    colSpan: "lg:col-span-7",
    aspectClass: "aspect-[16/10]",
  },
  {
    id: "closets-walkin",
    number: "02",
    title: "Clósets & Walk-in Clósets optimizados",
    quoterCategory: "Clóset",
    subtitle: "Orden milimétrico de piso a cielo para dormitorios y vestidores",
    description:
      "Diseñamos interiores de clóset según tus hábitos reales de guardado: barras de colgado largo y corto en aluminio estriado, cajoneras con correderas telescópicas silenciosas, zapateros ventilados, maleteros superiores y puertas correderas o abatibles de ajuste preciso.",
    materials: ["Texturas Lino & Roble", "Rieles de Aluminio", "Correderas Ocultas"],
    specs: [
      "Aprovechamiento de altura total piso a cielo",
      "Fondos traseros ventilados anti-condensación",
      "Divisiones interiores personalizadas a medida",
    ],
    locationExample: "Llanquihue & Puerto Varas",
    image:
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Walk-in clóset de madera cálida con cajoneras organizadoras e iluminación arquitectónica",
    colSpan: "lg:col-span-5",
    aspectClass: "aspect-[4/3] lg:aspect-[16/12]",
  },
  {
    id: "estar-racks-maderas",
    number: "03",
    title: "Muebles de Estar, Racks de TV y Maderas Nativas",
    quoterCategory: "Mueble de TV",
    subtitle: "Calidez sureña con paneles alistonados, repisas flotantes y maderas nobles",
    description:
      "Creamos centros de entretenimiento, bibliotecas empotradas, arrimos y muebles de living que integran calidez acústica y visual. Combinamos tableros técnicos de última generación con detalles en maderas nobles del sur (Lenga, Mañío, Laurel y Roble) y canalización oculta de cables.",
    materials: ["Maderas Nativas", "Paneles Ranurados", "Enchapados Naturales"],
    specs: [
      "Pasacables invisibles y ventilación para equipos de audio/TV",
      "Fijación estructural oculta a muros de tabiquería u hormigón",
      "Terminaciones en barniz poliuretano mate o aceite cera natural",
    ],
    locationExample: "Frutillar & Puerto Montt",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85",
    imageAlt:
      "Mueble de estar y rack de TV a medida con revestimiento alistonado en madera natural",
    colSpan: "lg:col-span-5",
    aspectClass: "aspect-[4/3] lg:aspect-[16/12]",
  },
  {
    id: "vanitorios-banos",
    number: "04",
    title: "Vanitorios y Mobiliario a Medida para Baños",
    quoterCategory: "Baño",
    subtitle: "Construcción 100% hidrofugada para el ambiente de mayor vapor del hogar",
    description:
      "En el sur de Chile el baño exige materiales sin concesiones. Fabricamos vanitorios suspendidos o a piso, botiquines con espejo y columnas de guardado utilizando exclusivamente sustratos RH (Resistentes a la Humedad), sellado sanitario de silicona neutra y cubiertas impermeables.",
    materials: ["Sustrato 100% RH", "Cubierta Cuarzo / Loza", "Sellado Perimetral"],
    specs: [
      "Cajones con recorte en U a medida para sifón y desagüe",
      "Herrajes con recubrimiento anticorrosivo de alta durabilidad",
      "Modelos suspendidos que facilitan la limpieza diaria del piso",
    ],
    locationExample: "Puerto Montt, Pelluco & Chamiza",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=85",
    imageAlt:
      "Vanitorio de baño suspendido a medida en madera resistente a la humedad con cubierta blanca",
    colSpan: "lg:col-span-7",
    aspectClass: "aspect-[16/10]",
  },
];

interface ProjectsGridProps {
  onSelectCategory?: (
    category: "Cocina" | "Clóset" | "Mueble de TV" | "Baño" | "Proyecto Completo"
  ) => void;
}

export default function ProjectsGrid({ onSelectCategory }: ProjectsGridProps) {
  const handleQuoteCategory = (
    category: "Cocina" | "Clóset" | "Mueble de TV" | "Baño"
  ) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    }
    const element = document.getElementById("cotizador");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="proyectos"
      className="py-20 lg:py-28 bg-[#f8fafc] border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1d8535] font-semibold">
              <span>01 / ESPECIALIDADES DE TALLER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a]">
              Mobiliario pensado desde la arquitectura interior de tu casa.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#334155] max-w-md leading-relaxed">
            No vendemos módulos estándar de retail. Cada mueble se levanta en
            terreno, se fabrica al milímetro en nuestro taller de Puerto Montt y
            se entrega instalado.
          </p>
        </div>

        {/* Magazine Editorial Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {SPECIALTIES.map((item) => (
            <article
              key={item.id}
              className={`${item.colSpan} group bg-white rounded-xl border border-slate-200/90 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:shadow-[0_16px_40px_-12px_rgba(15,23,42,0.07)]`}
            >
              <div>
                {/* Editorial Top Index Bar */}
                <div className="px-6 py-3.5 border-b border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono font-bold text-[#1d8535] bg-[#f2fbf4] px-2 py-0.5 rounded border border-[#c3eccb]">
                      {item.number}
                    </span>
                    <span className="font-medium text-[#334155]">
                      {item.subtitle}
                    </span>
                  </div>
                  <span className="hidden sm:inline font-mono text-[11px] text-slate-400">
                    {item.locationExample}
                  </span>
                </div>

                {/* Image Container */}
                <div className={`relative w-full ${item.aspectClass} overflow-hidden bg-slate-100`}>
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  {/* Material Badges Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                    {item.materials.map((mat) => (
                      <span
                        key={mat}
                        className="px-2.5 py-1 text-[11px] font-medium bg-white/95 backdrop-blur-sm text-[#0f172a] rounded border border-slate-200/80 shadow-sm"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Editorial Content Body */}
                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Technical Checklist */}
                  <ul className="pt-2 space-y-2 border-t border-slate-100">
                    {item.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]"
                      >
                        <Check className="w-4 h-4 text-[#27a343] flex-shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 sm:px-8 py-4 bg-[#f8fafc] border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => handleQuoteCategory(item.quoterCategory)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0f172a] hover:text-[#1d8535] transition-colors"
                >
                  <Layers className="w-4 h-4 text-[#27a343]" />
                  <span>Seleccionar en el cotizador rápido</span>
                </button>

                <a
                  href={`https://wa.me/56954122847?text=${encodeURIComponent(
                    `Hola, quiero cotizar un proyecto de ${item.title} con Muebles & Espacio Puerto Montt.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#1d8535] hover:text-[#154522] transition-colors group/link"
                >
                  <span>Consultar por WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Editorial Callout for Full Home Projects */}
        <div className="mt-10 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#f2fbf4] border border-[#c3eccb] flex items-center justify-center text-[#1d8535] flex-shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#0f172a]">
                ¿Construyendo o remodelando una vivienda completa en la Región de Los Lagos?
              </h3>
              <p className="text-sm text-[#334155] mt-1">
                Trabajamos junto a propietarios, arquitectos y constructoras en
                proyectos integrales (cocina + clósets + baños + estar) unificando
                materialidades y plazos de entrega.
              </p>
            </div>
          </div>
          <a
            href="#cotizador"
            onClick={() => onSelectCategory && onSelectCategory("Proyecto Completo")}
            className="flex-shrink-0 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white text-sm font-medium transition-colors"
          >
            Cotizar Proyecto Completo
          </a>
        </div>
      </div>
    </section>
  );
}
