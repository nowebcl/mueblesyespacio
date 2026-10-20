"use client";

import React, { useState } from "react";
import Header from "@/components/decorators/Header";
import HeroSlider from "@/components/decorators/HeroSlider";
import WelcomeSection from "@/components/decorators/WelcomeSection";
import ServicesSection from "@/components/decorators/ServicesSection";
import GallerySection from "@/components/decorators/GallerySection";
import CtaBanner from "@/components/decorators/CtaBanner";
import CharacteristicsSection from "@/components/decorators/CharacteristicsSection";
import TestimonialsSection from "@/components/decorators/TestimonialsSection";
import CatalogSection from "@/components/decorators/CatalogSection";
import QuoterSection from "@/components/decorators/QuoterSection";
import CountersSection from "@/components/decorators/CountersSection";
import SponsorsSection from "@/components/decorators/SponsorsSection";
import NewsSection from "@/components/decorators/NewsSection";
import NewsletterSection from "@/components/decorators/NewsletterSection";
import Footer from "@/components/decorators/Footer";
import { MessageCircle } from "lucide-react";

export default function HomePage() {
  const [selectedQuoterCategory, setSelectedQuoterCategory] = useState<string>("Cocina");

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#272727]">
      {/* 1. Header (Decorators Top Bar + Navigation + Search Modal) */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 2. Main Hero Slider (Decorators Revolution-Style Slider) */}
        <HeroSlider />

        {/* 3. Welcome / About Section (Decorators Overlap Box #1f1f1f + Service Blocks) */}
        <WelcomeSection />

        {/* 4. Best Services Section (Decorators best-service-section & service-block-two with green hover) */}
        <ServicesSection onSelectCategory={(cat) => setSelectedQuoterCategory(cat)} />

        {/* 5. Gallery Section (Decorators gallery-section with slide-down overlay, 5px green border & lightbox) */}
        <GallerySection />

        {/* 6. Call To Action Banner (Decorators call-to-action fixed background banner) */}
        <CtaBanner />

        {/* 7. Characteristics Section (Decorators default-two-column with spec-blocks) */}
        <CharacteristicsSection />

        {/* 8. Testimonials Section (Decorators testimonial-style-one with quote icon & slider) */}
        <TestimonialsSection />

        {/* 9. Catalog & Shop Section (Decorators tabbed-shop-section with filter tabs) */}
        <CatalogSection />

        {/* 10. Interactive Quoter (Presupuesto Express en Línea) */}
        <QuoterSection selectedCategory={selectedQuoterCategory} />

        {/* 11. Counters & Facts (Decorators stats counter bar #212121) */}
        <CountersSection />

        {/* 12. Sponsors & Brand Partners (Decorators sponsors-section) */}
        <SponsorsSection />

        {/* 13. News & Blog Section (Decorators news-section & news-style-one) */}
        <NewsSection />

        {/* 14. Newsletter / Contact Bar (Decorators newsletter-style-one green bar) */}
        <NewsletterSection />
      </main>

      {/* 15. Main Footer (Decorators 4-column rich dark footer with widgets) */}
      <Footer />

      {/* Mobile Floating WhatsApp Trigger */}
      <a
        href="https://wa.me/56954122847?text=Hola,%20quiero%20cotizar%20un%20mueble%20a%20medida%20en%20Puerto%20Montt."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cotizar por WhatsApp +56954122847"
        className="fixed bottom-5 right-5 z-40 sm:hidden inline-flex items-center gap-2 bg-[#26a422] hover:bg-[#1d8535] text-white px-4 py-3 rounded-full shadow-2xl border border-white/20 active:scale-95 transition-transform"
      >
        <MessageCircle className="w-5 h-5 fill-white/20" />
        <span className="font-heading text-xs font-bold uppercase tracking-wider">WhatsApp</span>
      </a>
    </div>
  );
}
