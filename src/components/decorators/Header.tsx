"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
  Menu,
  X,
  MapPin,
  Search,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { label: "INICIO", href: "#inicio" },
    { label: "NOSOTROS", href: "#nosotros" },
    { label: "SERVICIOS", href: "#servicios" },
    { label: "PROYECTOS", href: "#proyectos" },
    { label: "CARACTERÍSTICAS", href: "#caracteristicas" },
    { label: "CATÁLOGO", href: "#catalogo" },
    { label: "COTIZADOR", href: "#cotizador" },
    { label: "NOVEDADES", href: "#novedades" },
    { label: "CONTACTO", href: "#contacto" },
  ];

  return (
    <header className="main-header w-full relative z-50">
      {/* 1. Header Top (Decorators Dark Bar #212121) */}
      <div className="header-top bg-[#212121] text-[#ffffff] text-[13px] border-b border-[#2d2d2d] hidden lg:block font-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between">
          {/* Top Left: Coverage & Region Selector */}
          <div className="flex items-center gap-6 text-neutral-300">
            <span className="flex items-center gap-2">
              <span className="text-base">🇨🇱</span>
              <span className="text-white font-medium">Puerto Montt &amp; Cuenca del Lago</span>
            </span>
            <span className="text-neutral-600">|</span>
            <span className="flex items-center gap-1.5 text-xs">
              <Clock className="w-3.5 h-3.5 text-[#26a422]" />
              <span>Lun - Sáb: 09:00 - 18:30 hrs</span>
            </span>
          </div>

          {/* Top Right: Social Icons + Email + Phone */}
          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-3 pr-4 border-r border-neutral-700">
              <a
                href="https://www.instagram.com/mueblesyespaciopuertomontt/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-neutral-400 hover:text-[#26a422] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://wa.me/56954122847"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-neutral-400 hover:text-[#26a422] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>

            <ul className="flex items-center gap-6 text-xs text-white">
              <li>
                <a
                  href="mailto:contacto@mueblesyespacio.cl"
                  className="flex items-center gap-1.5 hover:text-[#26a422] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#26a422]" />
                  <span>contacto@mueblesyespacio.cl</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+56954122847"
                  className="flex items-center gap-1.5 hover:text-[#26a422] transition-colors font-bold"
                >
                  <Phone className="w-3.5 h-3.5 text-[#26a422]" />
                  <span>+56 9 5412 2847</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Main Box / Navigation Bar (Decorators Clean White Style with Montserrat) */}
      <div className="main-box bg-white border-b border-[#e5e5e5] shadow-sm sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo Box */}
            <div className="logo-box flex-shrink-0">
              <a href="#inicio" className="flex items-center gap-3 group">
                <img
                  src="/logo.png"
                  alt="Muebles & Espacio Puerto Montt Ltda."
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </a>
            </div>

            {/* Desktop Navigation Links (Montserrat 13px bold uppercase) */}
            <nav className="main-menu hidden xl:flex items-center gap-6">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-heading text-[13px] font-bold text-[#111111] hover:text-[#26a422] transition-colors uppercase tracking-wider py-2 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#26a422] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Actions: Search trigger + Button Style One */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Search Button */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Buscar en la web"
                className="w-10 h-10 rounded-full border border-neutral-300 hover:border-[#26a422] hover:text-[#26a422] text-[#272727] flex items-center justify-center transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Decorators Primary Button (theme-btn btn-style-one) */}
              <a
                href="#cotizador"
                className="theme-btn btn-style-one text-xs flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>COTIZAR AHORA</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded text-[#272727] hover:text-[#26a422] hover:bg-neutral-100"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#272727] text-white px-6 py-6 space-y-4 border-b border-[#373737]">
          <nav className="flex flex-col divide-y divide-[#373737]">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 font-heading text-xs font-bold tracking-wider text-neutral-200 hover:text-[#26a422] transition-colors uppercase"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-3">
            <a
              href="https://wa.me/56954122847"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full theme-btn btn-style-one flex items-center justify-center gap-2 py-3.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>COTIZAR: +56 9 5412 2847</span>
            </a>
          </div>
        </div>
      )}

      {/* Search Popup Modal (Decorators style) */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="relative max-w-xl w-full bg-[#1f1f1f] border-2 border-[#26a422] p-8 rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wider mb-2">
              Buscar en Muebles &amp; Espacio
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Encuentra cocinas integrales, clósets, cubiertas, materiales y proyectos.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSearchOpen(false);
                const el = document.getElementById("proyectos");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative"
            >
              <input
                type="text"
                placeholder="Escribe lo que buscas (ej. cocina en L, vanitorio, clóset roble)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#272727] text-white px-4 py-3.5 text-sm border border-neutral-700 focus:border-[#26a422] focus:outline-none rounded-sm"
                autoFocus
              />
              <button
                type="submit"
                className="mt-4 w-full theme-btn btn-style-one py-3 text-xs"
              >
                BUSCAR EN PROYECTOS
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
