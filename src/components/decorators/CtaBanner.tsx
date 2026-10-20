import React from "react";
import { MessageCircle, FileText } from "lucide-react";

export default function CtaBanner() {
  return (
    <section
      className="relative py-28 lg:py-32 bg-cover bg-center bg-fixed text-center overflow-hidden"
      style={{ backgroundImage: `url('/images/craftsmanship_detail.jpg')` }}
    >
      {/* Dark Overlay (Decorators style rgba(0,0,0,0.65)) */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-lg sm:text-xl text-neutral-300 font-sans italic">
          Trabaja de la mano con Muebles &amp; Espacio y...
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
          ¡Ahora Haz de Tu Hogar un Espacio Acogedor, Funcional y Duradero!
        </h2>

        <p className="text-sm sm:text-base text-neutral-300 font-sans max-w-2xl mx-auto leading-relaxed">
          Diseño personalizado, sustratos RH resistentes a la humedad de la cuenca y fabricación directa en nuestro taller de Puerto Montt.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/56954122847?text=Hola,%20quiero%20cotizar%20un%20proyecto%20a%20medida%20en%20Puerto%20Montt."
            target="_blank"
            rel="noopener noreferrer"
            className="theme-btn btn-style-one min-w-[200px]"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            <span>COTIZAR POR WHATSAPP</span>
          </a>

          <a
            href="#cotizador"
            className="theme-btn btn-style-outline-white min-w-[200px]"
          >
            <FileText className="w-4 h-4 mr-2" />
            <span>PRESUPUESTO EN LÍNEA</span>
          </a>
        </div>
      </div>
    </section>
  );
}
