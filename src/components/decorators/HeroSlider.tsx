"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, ChevronLeft, ChevronRight, Check } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    image: "/images/ai_kitchen_hero.jpg",
    position: "center center",
    tag: "TALLER PROPIO EN PUERTO MONTT",
    title: "MUEBLES & ESPACIO\nCOCINAS Y MUEBLES A MEDIDA",
    subtitle:
      "Expertos en cocinas integrales, clósets y mobiliario personalizado en melaminas RH resistentes a la humedad, cubiertas de alta gama y herrajes de cierre suave garantizados.",
    buttonPrimary: "COTIZAR POR WHATSAPP",
    buttonPrimaryLink:
      "https://wa.me/56954122847?text=Hola,%20quiero%20cotizar%20un%20proyecto%20a%20medida%20con%20Muebles%20y%20Espacio.",
    buttonSecondary: "VER PROYECTOS REALES",
    buttonSecondaryLink: "#galeria",
    trustPoints: [
      "Fabricación propia en Puerto Montt",
      "Sustratos RH antihumedad",
      "Garantía directa de taller",
    ],
  },
  {
    id: 2,
    image: "/images/ai_closet_hero.jpg",
    position: "center center",
    tag: "OPTIMIZACIÓN DE ESPACIO INTERIOR",
    title: "WALK-IN CLÓSETS &\nVESTIDORES INTELIGENTES",
    subtitle:
      "Aprovechamiento total de muro a muro y piso a cielo. Módulos con cajoneras telescópicas de extracción total, pantaloneras e iluminación LED cálida integrada.",
    buttonPrimary: "COTIZAR CLÓSET A MEDIDA",
    buttonPrimaryLink:
      "https://wa.me/56954122847?text=Hola,%20quiero%20cotizar%20un%20cl%C3%B3set%20o%20vestidor%20a%20medida.",
    buttonSecondary: "VER CATÁLOGO",
    buttonSecondaryLink: "#catalogo",
    trustPoints: [
      "Ajuste milimétrico a tus paredes",
      "Cajoneras con rieles de 45kg",
      "Asesoría y diseño 3D",
    ],
  },
  {
    id: 3,
    image: "/images/ai_tv_unit_hero.jpg",
    position: "center center",
    tag: "ESTÉTICA & CONFORT PARA EL SUR",
    title: "CENTROS DE ENTRETENIMIENTO\n& PANELES ALISTONADOS",
    subtitle:
      "Elegancia contemporánea con maderas nobles y listones acústicos. Racks flotantes con pasacables ocultos para living, dormitorios y salas de estar.",
    buttonPrimary: "COTIZAR MUEBLE DE ESTAR",
    buttonPrimaryLink:
      "https://wa.me/56954122847?text=Hola,%20quiero%20cotizar%20un%20rack%20de%20TV%20o%20panel%20alistonado.",
    buttonSecondary: "COTIZADOR ONLINE",
    buttonSecondaryLink: "#cotizador",
    trustPoints: [
      "Fijaciones invisibles de alta resistencia",
      "Maderas nativas y melaminas sincronizadas",
      "Instalación en Puerto Varas y Frutillar",
    ],
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section id="inicio" className="main-slider relative w-full h-[620px] sm:h-[680px] lg:h-[750px] overflow-hidden bg-[#111111]">
      {/* Slides */}
      {SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image with Slow Zoom Effect */}
            <div
              className={`absolute inset-0 bg-cover transition-transform duration-7000 ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: slide.position || "center",
              }}
            />
            {/* Gradient Overlays (Decorators Dark Revolution Slider Style) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />
            <div className="absolute inset-0 bg-black/20" />

            {/* Slide Content */}
            <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-2xl text-white space-y-6">
                {/* Yellow/Green Tag Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#26a422] text-white text-[11px] font-heading font-black tracking-widest uppercase rounded-sm shadow">
                  <span>{slide.tag}</span>
                </div>

                {/* Big Uppercase Title (Decorators 66px Montserrat Style) */}
                <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.08] drop-shadow-md whitespace-pre-line">
                  {slide.title}
                </h1>

                {/* Subtitle / Paragraph */}
                <p className="text-base sm:text-lg text-neutral-200 font-sans leading-relaxed max-w-xl font-normal drop-shadow">
                  {slide.subtitle}
                </p>

                {/* Action Buttons in Decorators Style */}
                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <a
                    href={slide.buttonPrimaryLink}
                    target={slide.buttonPrimaryLink.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="theme-btn btn-style-one min-w-[170px]"
                  >
                    <span>{slide.buttonPrimary}</span>
                  </a>

                  <a
                    href={slide.buttonSecondaryLink}
                    target={slide.buttonSecondaryLink.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="theme-btn btn-style-outline-white min-w-[170px]"
                  >
                    <span>{slide.buttonSecondary}</span>
                  </a>
                </div>

                {/* Trust Points */}
                <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-neutral-300">
                  {slide.trustPoints.map((point, pIdx) => (
                    <span key={pIdx} className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-[#26a422]" />
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slider Arrow Controls */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Diapositiva anterior"
        className="absolute left-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/50 hover:bg-[#26a422] text-white flex items-center justify-center transition-colors border border-white/20 rounded-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Siguiente diapositiva"
        className="absolute right-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/50 hover:bg-[#26a422] text-white flex items-center justify-center transition-colors border border-white/20 rounded-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slider Pagination Dots */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Ir a diapositiva ${idx + 1}`}
            className={`h-3 transition-all rounded-full ${
              idx === currentSlide ? "bg-[#26a422] w-8" : "bg-white/50 w-3 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
