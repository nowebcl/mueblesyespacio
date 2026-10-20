import React from "react";
import {
  Utensils,
  FolderKanban,
  Bath,
  Tv,
  Briefcase,
  Trees,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    id: "cocinas",
    icon: Utensils,
    title: "Cocinas Integrales & Cubiertas",
    text: "Muebles base y aéreos en melamina RH de 18mm con cubiertas en cuarzo, granito natural o postformado hidrófugo. Cierre suave garantizado.",
    category: "Cocina",
  },
  {
    id: "closets",
    icon: FolderKanban,
    title: "Clósets & Walk-in Clósets",
    text: "Aprovechamiento de muro a muro y de piso a cielo. Cajoneras telescópicas reforzadas, pantaloneras, zapateros e iluminación LED integrada.",
    category: "Clóset",
  },
  {
    id: "vanitorios",
    icon: Bath,
    title: "Vanitorios y Muebles de Baño",
    text: "Mobiliario suspendido o a piso con sustrato antihumedad para resistir el vapor del agua caliente. Cajones con recorte para sifón y sellado perimetral.",
    category: "Baño",
  },
  {
    id: "racks",
    icon: Tv,
    title: "Centros de TV & Racks Flotantes",
    text: "Paneles acústicos alistonados, repisas flotantes con fijación invisible y gestión oculta de cables para living y salas de estar.",
    category: "Mueble de TV",
  },
  {
    id: "oficinas",
    icon: Briefcase,
    title: "Mobiliario de Oficina & Locales",
    text: "Módulos de recepción, escritorios corporativos ejecutivos, cajoneras con cerradura y estanterías resistentes para comercio y clínicas.",
    category: "Proyecto Completo",
  },
  {
    id: "maderas",
    icon: Trees,
    title: "Maderas Nativas & Rústicos",
    text: "Mesas de comedor, cubiertas en maderas nobles (Roble, Lenga, Coigüe, Ciprés) tratadas con barniz poliuretano mate de alta protección.",
    category: "Proyecto Completo",
  },
];

interface ServicesSectionProps {
  onSelectCategory?: (category: string) => void;
}

export default function ServicesSection({ onSelectCategory }: ServicesSectionProps) {
  const handleClick = (cat: string) => {
    if (onSelectCategory) onSelectCategory(cat);
    const el = document.getElementById("cotizador");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicios" className="best-service-section bg-[#f4f4f4] py-20 lg:py-24 border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title (Decorators clearfix style) */}
        <div className="sec-title flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-heading font-black tracking-widest text-[#26a422] uppercase block mb-1">
              ESPECIALIDADES DE FABRICACIÓN
            </span>
            <h2>Nuestros Mejores Servicios</h2>
          </div>
          <a
            href="#cotizador"
            className="service-link self-start sm:self-auto"
          >
            <span>COTIZAR UN SERVICIO</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6 Service Block Two Cards with Decorators signature hover animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div key={srv.id} className="service-block-two group">
                <div className="inner-box">
                  {/* Left Icon Box */}
                  <div className="icon-box">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Text */}
                  <div>
                    <h3>{srv.title}</h3>
                    <p className="text font-sans">{srv.text}</p>
                  </div>

                  {/* Action Link */}
                  <button
                    type="button"
                    onClick={() => handleClick(srv.category)}
                    className="read-more"
                  >
                    <span>COTIZAR ESTE SERVICIO</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  {/* Watermark Bottom Icon */}
                  <div className="bottom-icon">
                    <Icon className="w-24 h-24 stroke-[1]" />
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
