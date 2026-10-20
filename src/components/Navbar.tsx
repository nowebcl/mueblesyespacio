"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X, ArrowUpRight, MapPin } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Proyectos", href: "#proyectos" },
    { label: "Servicios", href: "#servicios" },
    { label: "Materiales", href: "#materiales" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_1px_3px_rgba(15,23,42,0.03)]"
          : "bg-white border-b border-slate-100"
      }`}
    >
      {/* Top micro-bar editorial */}
      <div className="hidden lg:block bg-[#f8fafc] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-8 flex items-center justify-between text-[11px] tracking-wide text-[#334155]">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#27a343]" />
            <span className="font-medium text-[#0f172a]">
              Muebles &amp; Espacio Puerto Montt Ltda.
            </span>
            <span className="text-slate-300">|</span>
            <span>Taller de fabricación propia a medida</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 text-slate-600">
              <MapPin className="w-3 h-3 text-[#27a343]" />
              Cobertura: Puerto Montt · Puerto Varas · Llanquihue · Frutillar
            </span>
            <span className="text-slate-300">|</span>
            <a
              href="https://www.instagram.com/mueblesyespaciopuertomontt/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0f172a] transition-colors font-medium"
            >
              @mueblesyespaciopuertomontt
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Lockup */}
          <a
            href="#"
            className="group flex items-center gap-3.5 focus:outline-none"
            aria-label="Muebles & Espacio Puerto Montt - Inicio"
          >
            <div className="relative flex items-center justify-center h-11 w-auto overflow-hidden">
              <img
                src="/logo.png"
                alt="Logo Muebles & Espacio Puerto Montt"
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col border-l border-slate-200 pl-3.5">
              <span className="text-sm sm:text-base font-bold tracking-tight text-[#0f172a] leading-none">
                MUEBLES <span className="text-[#27a343]">&amp;</span> ESPACIO
              </span>
              <span className="text-[11px] font-normal tracking-[0.18em] uppercase text-[#334155] mt-1">
                Puerto Montt
              </span>
            </div>
          </a>

          {/* Desktop Anchor Links */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#334155] hover:text-[#0f172a] transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#27a343] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Direct WhatsApp CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/56954122847"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#0f172a] hover:bg-slate-800 text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow active:scale-[0.99] group"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#27a343]/20 text-[#4ade80]">
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
              </span>
              <span>+56 9 5412 2847</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-[#0f172a] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#27a343]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col divide-y divide-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3.5 text-base font-medium text-[#0f172a] hover:text-[#27a343] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </nav>

          <div className="pt-2 space-y-3">
            <a
              href="https://wa.me/56954122847"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-[#0f172a] text-white text-sm font-medium px-5 py-3.5 rounded-lg shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#4ade80]" />
              <span>WhatsApp Directo: +56 9 5412 2847</span>
            </a>
            <p className="text-xs text-center text-[#334155]">
              Puerto Montt · Puerto Varas · Llanquihue · Frutillar
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
