"use client";

import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  MessageCircle,
  ChevronUp,
  ArrowRight,
} from "lucide-react";

const RECENT_WORKS = [
  { img: "/images/gallery_kitchen_1.jpg", alt: "Cocina integral Puerto Varas" },
  { img: "/images/gallery_closet_1.jpg", alt: "Walk-in clóset Puerto Montt" },
  { img: "/images/gallery_tv_1.jpg", alt: "Rack de TV alistonado" },
  { img: "/images/gallery_bath_1.jpg", alt: "Vanitorio cuarzo blanco" },
  { img: "/images/gallery_kitchen_2.jpg", alt: "Cocina madera noble Frutillar" },
  { img: "/images/gallery_closet_2.jpg", alt: "Clóset dormitorio roble" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer id="contacto" className="main-footer bg-[#1a1a1a] text-[#bebebe] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: About Widget with Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="logo-box">
              <a href="#inicio" className="inline-block bg-white p-2 rounded-sm shadow-md">
                <img
                  src="/logo.png"
                  alt="Muebles & Espacio Puerto Montt Ltda."
                  className="h-12 w-auto object-contain"
                />
              </a>
            </div>

            <p className="text-sm text-neutral-400 font-sans leading-relaxed">
              Taller de diseño y fabricación de mobiliario a medida en Puerto Montt. Especialistas en cocinas integrales, clósets, vanitorios y muebles de estar construidos con sustratos hidrófugos RH resistentes al clima del sur.
            </p>

            {/* Contact list with Decorators styling */}
            <ul className="space-y-2.5 pt-2 text-xs text-neutral-300 font-sans">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#26a422] flex-shrink-0" />
                <span>Puerto Montt · Región de Los Lagos, Chile</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#26a422] flex-shrink-0" />
                <a href="tel:+56954122847" className="hover:text-white transition-colors font-bold">
                  +56 9 5412 2847
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#26a422] flex-shrink-0" />
                <a href="mailto:contacto@mueblesyespacio.cl" className="hover:text-white transition-colors">
                  contacto@mueblesyespacio.cl
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Services / Tags Widget (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <div className="relative pb-3">
              <h3 className="font-heading font-bold text-lg text-white uppercase tracking-wider relative inline-block pb-3">
                Nuestros Servicios
                <span className="absolute bottom-1 left-0 w-12 h-[2px] bg-[#26a422]" />
                <span className="absolute bottom-0 left-0 w-12 h-[1px] bg-[#26a422]" />
              </h3>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400 font-sans">
              <li>
                <a href="#servicios" className="hover:text-[#26a422] flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-[#26a422]" />
                  <span>Cocinas Integrales &amp; Islas</span>
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#26a422] flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-[#26a422]" />
                  <span>Cubiertas en Cuarzo &amp; Granito</span>
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#26a422] flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-[#26a422]" />
                  <span>Clósets &amp; Walk-in Clósets</span>
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#26a422] flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-[#26a422]" />
                  <span>Vanitorios y Baños RH</span>
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#26a422] flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-[#26a422]" />
                  <span>Racks de TV &amp; Alistonados</span>
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#26a422] flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-[#26a422]" />
                  <span>Mobiliario Comercial y Oficinas</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Recent Works Thumbnails (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="relative pb-3">
              <h3 className="font-heading font-bold text-lg text-white uppercase tracking-wider relative inline-block pb-3">
                Trabajos
                <span className="absolute bottom-1 left-0 w-12 h-[2px] bg-[#26a422]" />
                <span className="absolute bottom-0 left-0 w-12 h-[1px] bg-[#26a422]" />
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {RECENT_WORKS.map((w, idx) => (
                <a
                  key={idx}
                  href="#proyectos"
                  className="relative aspect-square overflow-hidden rounded-sm group block bg-neutral-800"
                >
                  <img
                    src={w.img}
                    alt={w.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#26a422]/70 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            <p className="text-[11px] text-neutral-400 font-sans">
              Fotos reales de muebles fabricados en nuestro taller.
            </p>
          </div>

          {/* Col 4: Horarios & Contacto Rápido (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <div className="relative pb-3">
              <h3 className="font-heading font-bold text-lg text-white uppercase tracking-wider relative inline-block pb-3">
                Atención de Taller
                <span className="absolute bottom-1 left-0 w-12 h-[2px] bg-[#26a422]" />
                <span className="absolute bottom-0 left-0 w-12 h-[1px] bg-[#26a422]" />
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm font-sans">
              <div className="p-4 bg-[#212121] border-l-2 border-[#26a422] rounded-sm space-y-1">
                <div className="flex items-center gap-2 text-white font-heading font-bold text-xs uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-[#26a422]" />
                  <span>Horarios del Taller</span>
                </div>
                <p className="text-neutral-400 text-xs">
                  Lunes a Viernes: 08:30 - 18:30 hrs
                </p>
                <p className="text-neutral-400 text-xs">
                  Sábados: 09:00 - 14:00 hrs
                </p>
              </div>

              <a
                href="https://wa.me/56954122847?text=Hola,%20quiero%20coordinar%20una%20visita%20técnica%20para%20muebles%20a%20medida."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full theme-btn btn-style-one text-xs flex items-center justify-center gap-2 py-3"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP DIRECTO</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom (Decorators bottom bar #111111) */}
      <div className="bg-[#111111] py-6 border-t border-neutral-800 text-xs text-neutral-400 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            © {year} <strong className="text-white">Muebles &amp; Espacio Puerto Montt Ltda.</strong> Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/mueblesyespaciopuertomontt/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-[#26a422] text-white flex items-center justify-center transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/56954122847"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-[#26a422] text-white flex items-center justify-center transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Volver arriba"
              className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-[#26a422] text-white flex items-center justify-center transition-colors ml-2"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
