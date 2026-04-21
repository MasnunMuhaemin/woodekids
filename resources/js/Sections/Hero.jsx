import React from "react";

export default function Hero() {
  return (
    <div 
      className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      {/* Darkened Overlay */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Heading (All Caps, Bold, Baloo 2) */}
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold font-heading tracking-wider leading-tight animate-fade-in-down">
          MAINAN KAYU, ALAT KREATIVITAS, <br className="hidden md:block" />
          HINGGA KEBUTUHAN EDUKASI ANAK <br className="hidden md:block" />
          <span className="text-primary">— SEMUA BISA CUSTOM</span>
        </h1>

        {/* Subheading (Nunito) */}
        <p className="mt-8 text-gray-300 text-xs md:text-lg lg:text-xl font-sans max-w-3xl mx-auto leading-relaxed opacity-90">
          Kami merancang dan memproduksi setiap produk dengan detail, aman, dan proses yang cepat 
          untuk kebutuhan tumbuh kembang serta inovasi kreatif anak Anda.
        </p>

        {/* CTA Button Area (Centered below subtext) */}
        <div className="mt-12 flex flex-col items-center">
          {/* The Horizontal Line from Reference */}
          <div className="flex gap-2 mb-8">
            <div className="w-12 h-1 bg-primary/60 rounded-full"></div>
            <div className="w-4 h-1 bg-secondary/60 rounded-full"></div>
            <div className="w-2 h-1 bg-tertiary/60 rounded-full"></div>
          </div>
          
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 md:px-10 md:py-4 bg-transparent border-2 border-primary/50 text-white rounded-full font-sans font-semibold text-sm md:text-lg tracking-widest hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 ease-in-out shadow-[0_0_20px_-5px_rgba(93,169,233,0.5)]"
          >
            AYO KEMON !
          </a>
        </div>
      </div>
    </div>
  );
}
