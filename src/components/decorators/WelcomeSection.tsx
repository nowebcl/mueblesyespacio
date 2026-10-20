import React from "react";
import { ShieldCheck, Award, Wrench, CheckCircle2 } from "lucide-react";

export default function WelcomeSection() {
  return (
    <section id="nosotros" className="welcome-section relative z-10 py-16 lg:py-20 bg-white border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (welcome-column overlapping dark box) */}
          <div className="lg:col-span-6">
            <div className="welcome-column-content rounded-sm shadow-2xl border-t-4 border-[#26a422]">
              <h2>Bienvenidos a Muebles &amp; Espacio</h2>

              <h3>
                Diseñamos y Fabricamos Mobiliario Exacto para tus Necesidades y Presupuesto{" "}
                <span>Taller en Puerto Montt.</span>
              </h3>

              <div className="text space-y-3 font-sans">
                <p>
                  En <strong>Muebles &amp; Espacio Puerto Montt Ltda.</strong> combinamos la tradición del maestro carpintero sureño con herrajes modernos y sustratos de alta tecnología resistentes a la humedad de la Región de Los Lagos.
                </p>
                <p>
                  No vendemos muebles modulares en serie. Cada cocina, vestidor, vanitorio o mueble de estar es concebido desde las medidas exactas de tu arquitectura, con corte milimétrico, cantos sellados en PVC termofusionado y cubiertas en cuarzo o granito.
                </p>
              </div>

              {/* Founder / Quality Badge */}
              <div className="pt-4 border-t border-neutral-700 flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-white text-base">
                    Equipo Muebles &amp; Espacio, <span className="font-normal italic text-neutral-400">Maestros &amp; Diseñadores</span>
                  </div>
                  <div className="text-xs font-heading font-semibold text-[#26a422] italic mt-0.5">
                    Muebles &amp; Espacio Puerto Montt Ltda.
                  </div>
                </div>

                <div className="hidden sm:block px-3 py-1.5 border border-[#26a422]/40 rounded-sm bg-[#26a422]/10 text-[#26a422] font-heading font-bold text-xs uppercase tracking-wider">
                  Calidad Sur de Chile
                </div>
              </div>
            </div>

            {/* Authentic Workshop & Team Photo Card */}
            <div className="mt-8 relative rounded-sm overflow-hidden border-2 border-[#26a422] shadow-xl group">
              <div className="relative aspect-[16/10] w-full bg-neutral-900">
                <img
                  src="/images/equipo_mueblesyespacio.jpg"
                  alt="Equipo de Maestros de Muebles & Espacio Puerto Montt"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 right-4 bg-[#26a422] text-white px-3.5 py-1.5 rounded-sm font-heading font-black text-xs tracking-wider uppercase shadow-lg flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>+4.000 SEGUIDORES</span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[11px] font-heading font-black tracking-widest text-[#26a422] uppercase mb-0.5">
                    TALLER &amp; MAESTROS CARPINTEROS
                  </div>
                  <p className="font-heading font-bold text-sm sm:text-base leading-snug">
                    Equipo de Muebles &amp; Espacio Puerto Montt Ltda.
                  </p>
                  <p className="text-xs text-neutral-300 font-sans mt-0.5">
                    Fabricando con pasión y montando en terreno en toda la Región de Los Lagos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (service-column with Decorators service-block-one) */}
          <div className="lg:col-span-6 space-y-8 pt-4 lg:pt-0">
            {/* Service Block One #1 */}
            <div className="service-block-one group">
              <div className="inner-box">
                <div className="icon-box">
                  <ShieldCheck className="w-7 h-7 text-[#26a422]" />
                </div>
                <h3>Somos Profesionales</h3>
                <div className="category">
                  Diseño &amp; Fabricación a Medida
                </div>
                <div className="text">
                  Levantamos medidas en terreno, elaboramos propuesta funcional y fabricamos con maquinaria de corte de precisión. Cada puerta y cajón cuenta con herrajes regulables de amortiguación hidráulica.
                </div>
              </div>
            </div>

            {/* Service Block One #2 */}
            <div className="service-block-one group">
              <div className="inner-box">
                <div className="icon-box">
                  <Award className="w-7 h-7 text-[#26a422]" />
                </div>
                <h3>Somos de Confianza</h3>
                <div className="category">
                  Garantía Directa de Fábrica
                </div>
                <div className="text">
                  Al tratar directamente con nuestro taller sin intermediarios de tienda, obtienes el mejor precio por metro lineal, cumplimiento estricto de fechas y servicio técnico postventa en toda la cuenca.
                </div>
              </div>
            </div>

            {/* Service Block One #3 */}
            <div className="service-block-one group">
              <div className="inner-box">
                <div className="icon-box">
                  <Wrench className="w-7 h-7 text-[#26a422]" />
                </div>
                <h3>Instalación Especializada en Terreno</h3>
                <div className="category">
                  Puerto Montt · Puerto Varas · Llanquihue · Frutillar
                </div>
                <div className="text">
                  Nuestro equipo instala, aploma y sella sanitariamente cada módulo, dejando las cubiertas, encimeras y lavaplatos correctamente ajustados para entrega inmediata.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
