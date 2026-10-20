"use client";

import React, { useState } from "react";
import { User, Phone, Send, CheckCircle2 } from "lucide-react";

export default function NewsletterSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    const msg = `Hola, mi nombre es ${name.trim()} (Tel: ${phone.trim()}). Quiero solicitar asesoría para un proyecto de muebles a medida en Puerto Montt.`;
    window.open(`https://wa.me/56954122847?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  return (
    <section className="newsletter-style-one bg-[#26a422] text-white py-12 lg:py-14 border-t border-b border-[#1d8535]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Title Column (4 cols) */}
          <div className="lg:col-span-4 space-y-1">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight leading-tight">
              ¿Tienes un Proyecto en Mente?
            </h2>
            <p className="text-white/90 text-sm font-sans italic">
              Déjanos tus datos y un maestro de taller te contactará a la brevedad.
            </p>
          </div>

          {/* Form Column (8 cols) */}
          <div className="lg:col-span-8">
            {sent ? (
              <div className="p-4 bg-white/20 rounded-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span className="font-heading font-bold text-sm">
                  ¡Gracias {name}! Tu mensaje fue derivado directamente a nuestro WhatsApp de taller.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <div className="sm:col-span-4 relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/70">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Tu Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-12 bg-black/15 text-white placeholder-white/70 text-sm pl-10 pr-4 rounded-sm border border-white/30 focus:border-white focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-4 relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/70">
                    <Phone className="w-4 h-4" />
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="Teléfono / WhatsApp"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-12 bg-black/15 text-white placeholder-white/70 text-sm pl-10 pr-4 rounded-sm border border-white/30 focus:border-white focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-4">
                  <button
                    type="submit"
                    className="w-full h-12 bg-white text-[#26a422] hover:bg-[#272727] hover:text-white font-heading font-bold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>SOLICITAR ASESORÍA</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
