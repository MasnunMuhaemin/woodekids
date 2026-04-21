import React from "react";

export default function About() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Full-width Container with Background Image */}
      <div className="relative h-[600px] w-full overflow-hidden shadow-xl">
        
        {/* Background Image (Full Screen Width) */}
        <div className="absolute inset-0">
          <img 
            src="/images/about/lifestyle.png" 
            alt="Playtime with Woodekids" 
            className="w-full h-[600px] object-cover transition-transform duration-[2000ms] hover:scale-105"
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-black/5"></div>
        </div>

        {/* Content Layer (Aligned within page layout but over image) */}
        <div className="relative z-10 w-full h-full flex items-center py-12 lg:py-20 px-6 md:px-12 lg:px-24">
          <div className="bg-white p-10 md:p-16 lg:p-20 rounded-[2.5rem] shadow-2xl max-w-2xl w-full relative border border-gray-100">
              {/* Top Playful Icon (Monkey) */}
              <div className="mb-6 relative w-fit">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary/20 rounded-full blur-lg animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-tertiary/10 rounded-full blur-xl"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold font-heading text-gray-900 leading-[1.1] mb-8">
                The play room <br />
                needs an overhaul!
              </h2>
              <p className="text-sm md:text-base text-gray-500 font-sans leading-relaxed mb-10">
                Toys are scattered haphazardly, shelves are overflowing, and   the 
                overall atmosphere lacks the creativity and functionality 
                that a playroom should provide.
              </p>
              <div className="flex items-center gap-8 relative">
                <a 
                  href="#" 
                  className="group flex items-center gap-2 px-6 py-3 md:px-10 md:py-4 border-2 border-secondary/20 rounded-full text-gray-800 font-sans font-bold text-sm md:text-base hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300"
                >
                  Shop Now
                  <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
        </div>

      </div>
    </section>
  );
}

