"use client";

import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Mandamos a fabricar la cocina integral completa para nuestra casa en Puerto Varas con isla de cuarzo y muebles en grafito. El nivel de terminación y el calce milimétrico superó todas nuestras expectativas. Cero desajustes y un trato impecable.",
    author: "Marcela Valenzuela",
    role: "Propietaria en Puerto Varas",
    project: "Cocina Integral & Despensa",
  },
  {
    id: 2,
    quote:
      "Excelente trabajo con el walk-in clóset y el vanitorio del baño principal en Valle Volcanes. En Puerto Montt es difícil encontrar talleres que realmente utilicen melamina RH de 18mm y herrajes que no se oxiden. 100% recomendados.",
    author: "Rodrigo Gallardo",
    role: "Cliente en Puerto Montt",
    project: "Walk-in Clóset & Vanitorio",
  },
  {
    id: 3,
    quote:
      "Fabricaron el mueble de televisión con panel alistonado en roble y las repisas flotantes para nuestro living en Frutillar. La atención de los maestros en terreno fue muy profesional, todo limpio y entregado en la fecha prometida.",
    author: "Claudia Hechenleitner",
    role: "Cliente en Frutillar",
    project: "Rack de TV & Revestimiento Alistonado",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[current];

  return (
    <section
      className="relative py-24 bg-cover bg-center bg-fixed text-center overflow-hidden border-b border-[#2d2d2d]"
      style={{ backgroundImage: `url('/images/hero_bathroom_vanity.jpg')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#161616]/90" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote Circle Icon (Decorators testimonial-style-one .icon) */}
        <div className="w-14 h-14 rounded-full border-2 border-white/60 text-white flex items-center justify-center mx-auto mb-8">
          <Quote className="w-6 h-6 text-[#26a422]" />
        </div>

        {/* Stars */}
        <div className="flex items-center justify-center gap-1.5 mb-6 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-400" />
          ))}
        </div>

        {/* Quote text */}
        <p className="text-lg sm:text-xl md:text-2xl text-white font-sans italic font-normal leading-relaxed min-h-[110px] flex items-center justify-center">
          &ldquo;{t.quote}&rdquo;
        </p>

        {/* Author info (Decorators author-info style) */}
        <div className="mt-8 space-y-1">
          <h4 className="font-heading font-bold text-xl text-white tracking-wide">
            {t.author}
          </h4>
          <p className="text-sm text-[#26a422] font-heading font-medium italic">
            {t.role} · {t.project}
          </p>
        </div>

        {/* Carousel controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Testimonio anterior"
            className="w-10 h-10 border border-white/30 hover:border-[#26a422] hover:bg-[#26a422] text-white flex items-center justify-center transition-colors rounded-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-[#26a422] w-6" : "bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Siguiente testimonio"
            className="w-10 h-10 border border-white/30 hover:border-[#26a422] hover:bg-[#26a422] text-white flex items-center justify-center transition-colors rounded-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
