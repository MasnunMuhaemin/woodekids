import React from "react";

export default function Contact() {
  return (
    <section className="relative w-full min-h-[600px] bg-white overflow-hidden flex flex-col lg:flex-row">
      
      {/* Left Side: Image */}
      <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative overflow-hidden">
        <img 
          src="/images/contact/contact-hero.png" 
          alt="Woodekids Playtime" 
          className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-110"
        />
        {/* Subtle overlay to blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:from-transparent"></div>
        
        {/* Playful Floating Badge over image */}
        <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 hidden md:block animate-bounce-slow">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-2xl">🧸</div>
                <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Handmade with</p>
                    <p className="text-lg font-bold text-gray-900 font-heading">Love & Care</p>
                </div>
            </div>
        </div>
      </div>

      {/* Right Side: Contact Information */}
      <div className="w-full lg:w-1/2 flex items-center py-20 px-8 md:px-16 lg:px-24 bg-gray-50/50 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-40 h-40 bg-secondary/5 rounded-full translate-y-1/2 blur-2xl"></div>

        <div className="max-w-xl relative z-10 w-full">
          <div className="inline-block px-5 py-2 bg-primary/10 text-primary rounded-full mb-6 font-sans font-black text-xs uppercase tracking-widest">
            Hubungi Kami
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-gray-900 leading-[1.1] mb-8">
            Mari Bertumbuh <br /> Bersama <span className="text-primary italic">Woodekids</span>
          </h2>
          
          <p className="text-sm md:text-base text-gray-500 font-sans leading-relaxed mb-12">
            Punya pertanyaan tentang produk kustom atau ingin sekadar menyapa? 
            Kami selalu senang mendengarkan cerita dan kebutuhan Anda.
          </p>

          <div className="grid gap-10">
            {/* WhatsApp Link with special styling */}
            <a 
              href="https://wa.me/6281234567890" 
              className="group flex items-center gap-5 p-2 rounded-[2rem] hover:bg-white hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-primary rounded-[1.2rem] flex items-center justify-center text-white shadow-lg shadow-primary/30 transition-transform group-hover:rotate-12">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">WhatsApp Kami</h4>
                <p className="text-lg md:text-xl font-bold text-gray-900 font-sans">+62 812 3456 7890</p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-center gap-5 p-2">
              <div className="w-14 h-14 bg-secondary rounded-[1.2rem] flex items-center justify-center text-white shadow-lg shadow-secondary/30">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Workshop</h4>
                <p className="text-base font-bold text-gray-600 font-sans leading-snug">
                  Jl. Pendidikan No. 123, Kota Kreatif, <br className="hidden md:block" /> Indonesia 12345
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-5 p-2">
              <div className="w-14 h-14 bg-accent rounded-[1.2rem] flex items-center justify-center text-gray-900 shadow-lg shadow-accent/30">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.826a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div className="flex gap-4">
                  {['IG', 'FB', 'YT'].map(s => (
                    <a key={s} href="#" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-400 font-black text-xs hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                        {s}
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
