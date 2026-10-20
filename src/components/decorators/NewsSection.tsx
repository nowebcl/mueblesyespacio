import React from "react";
import { Calendar, Tag, ArrowRight, Plus, Instagram } from "lucide-react";

export default function NewsSection() {
  return (
    <section id="novedades" className="news-section py-20 lg:py-24 bg-white border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="sec-title flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-heading font-black tracking-widest text-[#26a422] uppercase block mb-1">
              CONSEJOS, PROYECTOS &amp; TALLER
            </span>
            <h2>Novedades del Taller</h2>
          </div>
          <a
            href="https://www.instagram.com/mueblesyespaciopuertomontt/"
            target="_blank"
            rel="noopener noreferrer"
            className="service-link self-start sm:self-auto"
          >
            <span>VER MÁS EN INSTAGRAM</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 2-Column News Layout (Decorators news-style-one) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Featured Post (7 cols) */}
          <div className="lg:col-span-7">
            <div className="border border-[#e9e9e9] rounded-sm p-5 sm:p-6 bg-white shadow-sm hover:shadow-xl hover:border-[#26a422] transition-all duration-300 group">
              {/* Image with overlay-link */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-200 mb-6 rounded-sm">
                <img
                  src="/images/gallery_kitchen_1.jpg"
                  alt="Cocina Integral Grafito y Cuarzo - Muebles y Espacio Puerto Montt"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-[#26a422]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-[#26a422] flex items-center justify-center shadow-lg">
                    <Plus className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 text-xs text-[#999999] mb-3 font-sans">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#26a422]" />
                  Julio 2026
                </span>
                <span className="text-neutral-300">|</span>
                <span className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-[#26a422]" />
                  Cocinas &amp; Cuarzo
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#272727] group-hover:text-[#26a422] transition-colors leading-snug mb-3">
                <a href="https://www.instagram.com/mueblesyespaciopuertomontt/p/DbeW-GmlpHK/" target="_blank" rel="noopener noreferrer">
                  Cómo Protegemos tus Muebles de la Humedad en el Sur de Chile
                </a>
              </h3>

              {/* Excerpt */}
              <p className="text-neutral-600 font-sans text-sm sm:text-base leading-relaxed mb-6">
                En nuestro taller de Puerto Montt utilizamos exclusivamente tableros hidrófugos RH de 18mm y tapacantos en PVC de 2mm termofusionados con cola PUR para evitar filtraciones de vapor en cocinas y baños.
              </p>

              {/* Author footer */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f2fbf4] border border-[#26a422]/30 flex items-center justify-center text-[#26a422] font-heading font-bold text-xs">
                    M&amp;E
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs text-[#272727]">
                      Taller Muebles &amp; Espacio
                    </h4>
                    <p className="text-[11px] text-neutral-400 font-sans">
                      Puerto Montt, Chile
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/mueblesyespaciopuertomontt/p/DbeW-GmlpHK/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-xs font-bold text-[#26a422] hover:text-[#272727] uppercase tracking-wider flex items-center gap-1.5"
                >
                  <span>Ver Post</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Side Post Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Side Card 1 */}
            <div className="p-5 border border-[#e9e9e9] rounded-sm bg-white hover:border-[#26a422] hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-4 group">
              <div className="sm:w-36 h-28 flex-shrink-0 overflow-hidden rounded-sm bg-neutral-200">
                <img
                  src="/images/gallery_kitchen_3.jpg"
                  alt="Cubiertas de Granito y Cuarzo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                />
              </div>
              <div className="space-y-1.5 flex-grow">
                <div className="flex items-center gap-2 text-[11px] text-[#999999]">
                  <Calendar className="w-3 h-3 text-[#26a422]" />
                  <span>Agosto 2026</span>
                </div>
                <h4 className="font-heading font-bold text-sm text-[#272727] group-hover:text-[#26a422] transition-colors leading-snug">
                  <a href="https://www.instagram.com/mueblesyespaciopuertomontt/" target="_blank" rel="noopener noreferrer">
                    Guía de Cubiertas: Cuarzo vs. Granito Natural vs. Postformado
                  </a>
                </h4>
                <p className="text-xs text-neutral-500 font-sans line-clamp-2">
                  Conoce las ventajas térmicas y de resistencia a manchas para elegir la cubierta adecuada para tu cocina.
                </p>
              </div>
            </div>

            {/* Side Card 2 */}
            <div className="p-5 border border-[#e9e9e9] rounded-sm bg-white hover:border-[#26a422] hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-4 group">
              <div className="sm:w-36 h-28 flex-shrink-0 overflow-hidden rounded-sm bg-neutral-200">
                <img
                  src="/images/ai_tv_unit_hero.jpg"
                  alt="Muebles de TV en Maderas Nobles"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                />
              </div>
              <div className="space-y-1.5 flex-grow">
                <div className="flex items-center gap-2 text-[11px] text-[#999999]">
                  <Calendar className="w-3 h-3 text-[#26a422]" />
                  <span>Septiembre 2026</span>
                </div>
                <h4 className="font-heading font-bold text-sm text-[#272727] group-hover:text-[#26a422] transition-colors leading-snug">
                  <a href="https://www.instagram.com/mueblesyespaciopuertomontt/" target="_blank" rel="noopener noreferrer">
                    Tendencia 2026: Revestimientos Alistonados y Aislamiento Acústico
                  </a>
                </h4>
                <p className="text-xs text-neutral-500 font-sans line-clamp-2">
                  La calidez de la madera combinada con listones verticales para living y dormitorios familiares.
                </p>
              </div>
            </div>

            {/* Side Card 3 */}
            <div className="p-5 border border-[#e9e9e9] rounded-sm bg-white hover:border-[#26a422] hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-4 group">
              <div className="sm:w-36 h-28 flex-shrink-0 overflow-hidden rounded-sm bg-neutral-200">
                <img
                  src="/images/craftsmanship_detail.jpg"
                  alt="Detalles de Armado y Terminación"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                />
              </div>
              <div className="space-y-1.5 flex-grow">
                <div className="flex items-center gap-2 text-[11px] text-[#999999]">
                  <Calendar className="w-3 h-3 text-[#26a422]" />
                  <span>Julio 2026</span>
                </div>
                <h4 className="font-heading font-bold text-sm text-[#272727] group-hover:text-[#26a422] transition-colors leading-snug">
                  <a href="https://www.instagram.com/mueblesyespaciopuertomontt/" target="_blank" rel="noopener noreferrer">
                    Fabricación Propia vs. Muebles de Retail: Comparativa Real
                  </a>
                </h4>
                <p className="text-xs text-neutral-500 font-sans line-clamp-2">
                  Por qué un mueble a medida hecho en taller dura el triple que un módulo estándar desarmable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
