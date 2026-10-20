import React from "react";
import {
  Phone,
  MessageCircle,
  Instagram,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-[#f8fafc] border-t border-slate-200/90">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-200">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <img
                src="/logo.png"
                alt="Logo Muebles & Espacio Puerto Montt Ltda."
                className="h-11 w-auto object-contain"
              />
              <div className="flex flex-col border-l border-slate-300 pl-3.5">
                <span className="text-base font-bold tracking-tight text-[#0f172a] leading-none">
                  MUEBLES <span className="text-[#27a343]">&amp;</span> ESPACIO
                </span>
                <span className="text-[11px] font-normal tracking-[0.18em] uppercase text-[#334155] mt-1">
                  Puerto Montt Ltda.
                </span>
              </div>
            </div>

            <p className="text-sm text-[#334155] max-w-md leading-relaxed">
              Taller especializado en diseño, fabricación e instalación de
              mobiliario arquitectónico a medida: cocinas integrales, clósets,
              vanitorios y muebles de estar con materiales resistentes a la
              humedad del sur de Chile.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#0f172a] bg-white px-3.5 py-2 rounded-lg border border-slate-200">
              <MapPin className="w-3.5 h-3.5 text-[#27a343]" />
              <span>Puerto Montt, Región de Los Lagos, Chile</span>
            </div>
          </div>

          {/* Navigation & Coverage Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#0f172a] font-semibold">
              Cobertura en Terreno
            </h3>
            <ul className="space-y-2.5 text-sm text-[#334155]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#27a343]" />
                <span>Puerto Montt (Urbano, Pelluco, Chamiza, Alerce)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#27a343]" />
                <span>Puerto Varas &amp; Ensenada</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#27a343]" />
                <span>Llanquihue</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#27a343]" />
                <span>Frutillar</span>
              </li>
            </ul>

            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#0f172a] font-semibold mb-2">
                Secciones
              </h4>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-medium text-[#334155]">
                <a href="#proyectos" className="hover:text-[#0f172a]">
                  Proyectos
                </a>
                <a href="#materiales" className="hover:text-[#0f172a]">
                  Materiales
                </a>
                <a href="#servicios" className="hover:text-[#0f172a]">
                  Flujo de Trabajo
                </a>
                <a href="#cotizador" className="hover:text-[#0f172a]">
                  Cotizador Rápido
                </a>
              </div>
            </div>
          </div>

          {/* Direct Contact Channels Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#0f172a] font-semibold">
              Contacto Directo
            </h3>

            <div className="space-y-3">
              {/* WhatsApp Direct */}
              <a
                href="https://wa.me/56954122847"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-lg bg-white border border-slate-200 hover:border-[#27a343] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-[#f2fbf4] border border-[#c3eccb] flex items-center justify-center text-[#1d8535]">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#334155]">
                      WhatsApp Cotizaciones
                    </span>
                    <span className="text-sm font-bold text-[#0f172a]">
                      +56 9 5412 2847
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#1d8535] transition-colors" />
              </a>

              {/* Direct Phone Call */}
              <a
                href="tel:+56954122847"
                className="flex items-center justify-between p-3.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-[#f8fafc] border border-slate-200 flex items-center justify-center text-[#0f172a]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#334155]">
                      Llamado Directo
                    </span>
                    <span className="text-sm font-bold text-[#0f172a]">
                      +56954122847
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0f172a] transition-colors" />
              </a>

              {/* Instagram Direct */}
              <a
                href="https://www.instagram.com/mueblesyespaciopuertomontt/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-[#f8fafc] border border-slate-200 flex items-center justify-center text-[#0f172a]">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-[#334155]">
                      Instagram Oficial (+4.000 seguidores)
                    </span>
                    <span className="text-sm font-bold text-[#0f172a]">
                      @mueblesyespaciopuertomontt
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0f172a] transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#334155]">
          <p>
            © {currentYear} <strong>Muebles &amp; Espacio Puerto Montt Ltda.</strong> Todos los derechos reservados.
          </p>
          <p className="font-mono text-[11px] text-slate-500">
            Puerto Montt, Región de Los Lagos · Sur de Chile
          </p>
        </div>
      </div>
    </footer>
  );
}
