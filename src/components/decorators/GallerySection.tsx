"use client";

import React, { useState } from "react";
import { Camera, ZoomIn, X, MessageCircle, ArrowUpRight } from "lucide-react";

export interface GalleryProject {
  id: string;
  title: string;
  category: "cocinas" | "closets" | "estar" | "banos";
  categoryLabel: string;
  image: string;
  location: string;
  description: string;
}

const PROJECTS: GalleryProject[] = [
  // Cocinas
  {
    id: "g1",
    title: "Cocina Integral con Isla de Cuarzo y Grafito Mate",
    category: "cocinas",
    categoryLabel: "Cocinas & Islas",
    image: "/images/gallery_kitchen_1.jpg",
    location: "Puerto Varas",
    description: "Diseño ergonómico con cubierta de cuarzo blanco puro, muebles base en grafito mate y alacenas en tono roble natural.",
  },
  {
    id: "g2",
    title: "Cocina Abierta en Maderas Nobles y Granito Negro",
    category: "cocinas",
    categoryLabel: "Cocinas & Islas",
    image: "/images/gallery_kitchen_2.jpg",
    location: "Frutillar",
    description: "Mobiliario diseñado para casa de campo. Cubiertas de granito natural y cajoneras reforzadas con cierre suave.",
  },
  {
    id: "g3",
    title: "Cocina en L con Despensero Extraíble y Torres de Horno",
    category: "cocinas",
    categoryLabel: "Cocinas & Islas",
    image: "/images/gallery_kitchen_3.jpg",
    location: "Puerto Montt",
    description: "Distribución perimetral optimizada con cajones telescópicos de 45kg y melaminas RH resistentes al vapor.",
  },
  {
    id: "g4",
    title: "Cocina Moderna con Isla Desayunadora y Enchapes",
    category: "cocinas",
    categoryLabel: "Cocinas & Islas",
    image: "/images/gallery_kitchen_4.jpg",
    location: "Llanquihue",
    description: "Aprovechamiento total de muros altos con zócalos sanitarios de aluminio y grifería monocontrol.",
  },

  // Clósets
  {
    id: "g5",
    title: "Walk-in Clóset Iluminado con Isla de Joyería",
    category: "closets",
    categoryLabel: "Clósets & Vestidores",
    image: "/images/gallery_closet_1.jpg",
    location: "Puerto Varas",
    description: "Vestidor a medida con retroiluminación LED en repisas, pantaloneras, organizadores y cubierta de vidrio templado.",
  },
  {
    id: "g6",
    title: "Clóset de Dormitorio Piso a Cielo en Roble Cálido",
    category: "closets",
    categoryLabel: "Clósets & Vestidores",
    image: "/images/gallery_closet_2.jpg",
    location: "Puerto Montt",
    description: "Estructura ajustada al milímetro con puertas batientes de cierre amortiguado y maletero superior.",
  },
  {
    id: "g7",
    title: "Vestidor Modular Abierto con Perfilería Negra",
    category: "closets",
    categoryLabel: "Clósets & Vestidores",
    image: "/images/gallery_closet_3.jpg",
    location: "Frutillar",
    description: "Diseño minimalista con barras de aluminio anodizado y zapateros inclinados con ventilación.",
  },
  {
    id: "g8",
    title: "Clóset con Puertas Correderas y Riel Oculto",
    category: "closets",
    categoryLabel: "Clósets & Vestidores",
    image: "/images/gallery_closet_4.jpg",
    location: "Llanquihue",
    description: "Rieles de alta precisión con rodamiento ultrasilencioso y compartimentos interiores personalizados.",
  },

  // Estar & TV
  {
    id: "g9",
    title: "Rack de TV Flotante con Panel Alistonado",
    category: "estar",
    categoryLabel: "Estar & Racks TV",
    image: "/images/gallery_tv_1.jpg",
    location: "Puerto Varas",
    description: "Centro de entretenimiento con panel acústico ranurado, repisas flotantes y pasacables completamente invisibles.",
  },
  {
    id: "g10",
    title: "Mueble de Living Integrado con Biblioteca",
    category: "estar",
    categoryLabel: "Estar & Racks TV",
    image: "/images/gallery_tv_2.jpg",
    location: "Puerto Montt",
    description: "Mueble multifuncional en melamina grafito y maderas nativas para equipos de audio, libros y consolas.",
  },
  {
    id: "g11",
    title: "Consola de Estar Minimalista con Luces LED",
    category: "estar",
    categoryLabel: "Estar & Racks TV",
    image: "/images/gallery_tv_3.jpg",
    location: "Frutillar",
    description: "Terminación satinada con fijaciones seguras a muro y puertas abatibles con pistón hidráulico.",
  },

  // Baños
  {
    id: "g12",
    title: "Vanitorio Suspendido en Melamina RH y Cuarzo",
    category: "banos",
    categoryLabel: "Vanitorios & Baños",
    image: "/images/gallery_bath_1.jpg",
    location: "Puerto Varas",
    description: "Mueble de baño flotante con lavamanos bajo cubierta de cuarzo y cajones adaptados al sifón.",
  },
  {
    id: "g13",
    title: "Mueble de Baño en Roble Hidrófugo y Grifería Negra",
    category: "banos",
    categoryLabel: "Vanitorios & Baños",
    image: "/images/gallery_bath_2.jpg",
    location: "Puerto Montt",
    description: "Sustrato antihumedad con sellado perimetral contra el vapor caliente y herrajes anticorrosivos.",
  },
  {
    id: "g14",
    title: "Vanitorio Contemporáneo con Espejo Retroiluminado",
    category: "banos",
    categoryLabel: "Vanitorios & Baños",
    image: "/images/gallery_bath_3.jpg",
    location: "Llanquihue",
    description: "Elegante combinación de madera cálida y cubierta de piedra anti-manchas de fácil limpieza.",
  },
];

const FILTERS = [
  { key: "all", label: "Todos los Proyectos" },
  { key: "cocinas", label: "Cocinas & Islas" },
  { key: "closets", label: "Clósets & Vestidores" },
  { key: "estar", label: "Estar & Racks TV" },
  { key: "banos", label: "Vanitorios & Baños" },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="proyectos" className="gallery-section py-20 lg:py-24 bg-white border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title (Decorators sec-title-four centered) */}
        <div className="sec-title-four">
          <span className="text-xs font-heading font-black tracking-widest text-[#26a422] uppercase block mb-1">
            PORTAFOLIO DE TRABAJOS ENTREGADOS
          </span>
          <h2>Proyectos Recientes</h2>
        </div>

        {/* Decorators Filters with Camera Icon Box */}
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center border-b border-[#e0e0e0] flex-wrap justify-center">
            <div className="w-12 h-12 flex items-center justify-center text-[#26a422] border-r border-[#e0e0e0] hidden sm:flex">
              <Camera className="w-5 h-5" />
            </div>
            <ul className="flex flex-wrap items-center justify-center">
              {FILTERS.map((f) => {
                const isActive = activeFilter === f.key;
                return (
                  <li key={f.key}>
                    <button
                      type="button"
                      onClick={() => setActiveFilter(f.key)}
                      className={`font-heading text-sm px-5 py-3 transition-all relative -bottom-[1px] ${
                        isActive
                          ? "text-[#272727] font-bold border-b-2 border-[#26a422]"
                          : "text-[#999999] hover:text-[#272727] font-medium"
                      }`}
                    >
                      {f.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Gallery Items Grid with Decorators Overlay */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="default-portfolio-item cursor-pointer"
              onClick={() => setSelectedProject(item)}
            >
              <div className="inner-box rounded-sm">
                <figure className="image-box relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                  />
                </figure>

                {/* Decorators Slide-down Overlay */}
                <div className="overlay-one">
                  <button
                    type="button"
                    aria-label={`Ver detalles de ${item.title}`}
                    className="proj-link"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>

                  <div className="caption-box-one">
                    <h3 className="font-heading font-bold text-sm text-white">
                      {item.title}
                    </h3>
                    <span className="cat-link block mt-1">
                      {item.categoryLabel} · {item.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Caption Box */}
              <div className="p-3.5 bg-white border-t border-[#e5e5e5]">
                <h3 className="font-heading font-bold text-xs sm:text-sm text-[#272727] truncate hover:text-[#26a422] transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-[11px] text-[#999999] mt-1 font-sans">
                  <span>{item.location}</span>
                  <span className="font-heading font-semibold text-[#26a422]">Ver Detalles</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Quoter */}
        <div className="mt-14 text-center">
          <a
            href="#cotizador"
            className="theme-btn btn-style-one text-xs"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            COTIZAR UN PROYECTO SIMILAR
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-white max-w-3xl w-full rounded-sm overflow-hidden shadow-2xl border border-neutral-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 z-20 w-9 h-9 bg-black/70 hover:bg-[#26a422] text-white flex items-center justify-center rounded-sm transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-neutral-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <span className="text-xs font-heading font-black tracking-widest text-[#26a422] uppercase">
                  {selectedProject.categoryLabel}
                </span>
                <span className="text-xs font-sans text-neutral-500 font-medium">
                  {selectedProject.location}, Chile
                </span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#272727] leading-snug">
                {selectedProject.title}
              </h3>

              <p className="text-neutral-600 text-sm leading-relaxed font-sans">
                {selectedProject.description}
              </p>

              <div className="pt-3 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={`https://wa.me/56954122847?text=${encodeURIComponent(
                    `Hola, vi este proyecto en su web (${selectedProject.title}) y quiero cotizar algo similar en la zona.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-btn btn-style-one text-xs flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>COTIZAR ESTE PROYECTO</span>
                </a>

                <a
                  href="https://www.instagram.com/mueblesyespaciopuertomontt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-xs font-bold text-[#272727] hover:text-[#26a422] flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                >
                  <span>Ver en Instagram</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
