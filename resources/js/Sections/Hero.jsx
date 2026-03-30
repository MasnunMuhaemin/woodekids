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
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold font-heading tracking-wider leading-tight animate-fade-in-down">
          MAINAN KAYU, ALAT KREATIVITAS, <br className="hidden md:block" />
          HINGGA KEBUTUHAN EDUKASI ANAK <br className="hidden md:block" />
          <span className="text-primary">— SEMUA BISA CUSTOM</span>
        </h1>

        {/* Subheading (Nunito) */}
        <p className="mt-8 text-gray-300 text-base md:text-xl lg:text-2xl font-sans max-w-3xl mx-auto leading-relaxed opacity-90">
          Kami merancang dan memproduksi setiap produk dengan detail, aman, dan proses yang cepat 
          untuk kebutuhan tumbuh kembang serta inovasi kreatif anak Anda.
        </p>

        {/* CTA Button Area (Centered below subtext) */}
        <div className="mt-12 flex flex-col items-center">
          {/* The Horizontal Line from Reference */}
          <div className="w-16 h-0.5 bg-primary/40 mb-8"></div>
          
          <a 
            href="#" 
            className="inline-flex items-center px-10 py-4 bg-transparent border-2 border-primary/50 text-white rounded-full font-sans font-semibold text-lg tracking-widest hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 ease-in-out shadow-[0_0_20px_-5px_rgba(93,169,233,0.5)]"
          >
            AYO KEMON !
          </a>
        </div>
      </div>
    </div>
  );
}
