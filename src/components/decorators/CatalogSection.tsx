"use client";

import React, { useState } from "react";
import { Star, MessageCircle, Ruler, Check } from "lucide-react";

export interface CatalogItem {
  id: string;
  name: string;
  category: "cocina" | "closet" | "rack" | "bano";
  categoryLabel: string;
  image: string;
  priceFrom: string;
  dimensions: string;
  features: string[];
}

const ITEMS: CatalogItem[] = [
  {
    id: "cat-1",
    name: "Cocina Integral Nórdica Grafito & Roble",
    category: "cocina",
    categoryLabel: "Cocina Integral",
    image: "/images/ai_kitchen_hero.jpg",
    priceFrom: "$680.000 / metro lineal",
    dimensions: "A medida (lineal, L o isla)",
    features: ["Melamina RH 18mm", "Cubierta cuarzo blanco", "Herrajes soft-close"],
  },
  {
    id: "cat-2",
    name: "Walk-in Clóset Matrimonial con Isla",
    category: "closet",
    categoryLabel: "Clóset & Vestidor",
    image: "/images/ai_closet_hero.jpg",
    priceFrom: "$520.000 / metro lineal",
    dimensions: "Ajuste piso a cielo milimétrico",
    features: ["Cajoneras telescópicas", "Barras reforzadas", "Iluminación perimetral"],
  },
  {
    id: "cat-3",
    name: "Rack TV Flotante con Panel Alistonado",
    category: "rack",
    categoryLabel: "Mueble de Estar",
    image: "/images/ai_tv_unit_hero.jpg",
    priceFrom: "$450.000 / unidad base",
    dimensions: "Desde 1.80m hasta 3.00m",
    features: ["Maderas nobles nativas", "Gestión oculta de cables", "Fijación oculta"],
  },
  {
    id: "cat-4",
    name: "Vanitorio de Baño Suspendido Hidrófugo",
    category: "bano",
    categoryLabel: "Mueble de Baño",
    image: "/images/ai_bathroom_vanity_hero.jpg",
    priceFrom: "$380.000 / unidad",
    dimensions: "0.80m a 1.60m doble bacha",
    features: ["Sustrato antihumedad", "Cajón con calce para sifón", "Sellado sanitario"],
  },
];

const TABS = [
  { key: "all", label: "Todos los Modelos" },
  { key: "cocina", label: "Cocinas" },
  { key: "closet", label: "Clósets" },
  { key: "rack", label: "Estar & TV" },
  { key: "bano", label: "Vanitorios" },
];

export default function CatalogSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? ITEMS
      : ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="catalogo" className="tabbed-shop-section py-20 lg:py-24 bg-[#f4f4f4] border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="sec-title-four">
          <span className="text-xs font-heading font-black tracking-widest text-[#26a422] uppercase block mb-1">
            TIPOLOGÍAS DE FABRICACIÓN
          </span>
          <h2>Catálogo &amp; Modelos Destacados</h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`font-heading text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2.5 transition-all rounded-sm border ${
                  isActive
                    ? "bg-[#26a422] text-white border-[#26a422] shadow-md"
                    : "bg-white text-[#272727] border-[#e0e0e0] hover:bg-[#272727] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#e5e5e5] rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:border-[#26a422] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#272727] text-white text-[10px] font-heading font-bold uppercase tracking-wider px-2 py-0.5">
                    {item.categoryLabel}
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 space-y-3">
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  <h3 className="font-heading font-bold text-base text-[#272727] group-hover:text-[#26a422] transition-colors leading-snug">
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-sans">
                    <Ruler className="w-3.5 h-3.5 text-[#26a422]" />
                    <span>{item.dimensions}</span>
                  </div>

                  {/* Bullet features */}
                  <ul className="pt-2 border-t border-neutral-100 space-y-1 text-xs text-neutral-600">
                    {item.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-[#26a422]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="pt-2">
                    <span className="text-[11px] font-heading uppercase text-neutral-400 block">
                      Referencia de Taller:
                    </span>
                    <span className="font-heading font-black text-sm text-[#26a422]">
                      {item.priceFrom}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <a
                  href={`https://wa.me/56954122847?text=${encodeURIComponent(
                    `Hola, me interesa cotizar el modelo "${item.name}" visto en su catálogo web.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full theme-btn btn-style-one text-xs flex items-center justify-center gap-2 py-2.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>COTIZAR MODELO</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
