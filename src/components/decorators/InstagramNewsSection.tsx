import React from "react";
import { Instagram, ArrowUpRight, Calendar, MapPin } from "lucide-react";

const POSTS = [
  {
    id: "n1",
    image: "/images/ai_kitchen_hero.jpg",
    title: "Entrega de Cocina Integral con Isla de Cuarzo",
    date: "Puerto Montt",
    location: "Sector Pelluco",
    desc: "Mobiliario a medida en grafito mate y roble natural, cubierta de cuarzo blanco puro en cascada e isla central con encimera integrada.",
    link: "https://www.instagram.com/mueblesyespaciopuertomontt/",
  },
  {
    id: "n2",
    image: "/images/ai_closet_hero.jpg",
    title: "Optimización Milimétrica de Clóset y Vestidor",
    date: "Puerto Varas",
    location: "Costanera",
    desc: "Cajoneras interiores con correderas telescópicas reforzadas, iluminación LED cálida bajo repisas y distribución personalizada piso a cielo.",
    link: "https://www.instagram.com/mueblesyespaciopuertomontt/",
  },
  {
    id: "n3",
    image: "/images/ai_tv_unit_hero.jpg",
    title: "Centro de Estar y Rack de TV con Panel Alistonado",
    date: "Frutillar",
    location: "Bajo Frutillar",
    desc: "Revestimiento acústico alistonado en roble natural, repisas flotantes con iluminación tenue y consola baja con pasacables ocultos.",
    link: "https://www.instagram.com/mueblesyespaciopuertomontt/",
  },
];

export default function InstagramNewsSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#f7f7f7] border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="decor-title-center">
          <span className="text-xs font-heading font-black tracking-widest text-[#27a343] uppercase block mb-1">
            COMUNIDAD &amp; PUBLICACIONES
          </span>
          <h2>Últimas Novedades de Instagram</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-sm sm:text-base mt-2">
            Síguenos en <a href="https://www.instagram.com/mueblesyespaciopuertomontt/" target="_blank" rel="noopener noreferrer" className="text-[#27a343] font-bold underline">@mueblesyespaciopuertomontt</a> (+4.000 seguidores en la región).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#e5e5e5] rounded-sm overflow-hidden flex flex-col justify-between group hover:border-[#27a343] hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#27a343] text-white text-[11px] font-heading font-bold uppercase tracking-wider px-2.5 py-1 flex items-center gap-1.5">
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#27a343]" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#27a343]" />
                      {item.location}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-[#272727] group-hover:text-[#27a343] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-neutral-100 mt-4">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#272727] hover:text-[#27a343] uppercase tracking-wider transition-colors pt-3"
                >
                  <span>Ver Publicación en Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
