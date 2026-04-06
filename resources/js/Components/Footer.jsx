import React from "react";

export default function Footer() {
  const footerSections = [
    {
      title: "About Us",
      links: ["About the Woodekids", "Compliance Line", "Woodekids News", "Sustainability", "Supply Chain"],
    },
    {
      title: "Support",
      links: ["Replacement parts", "Shipping & Returns", "Payment Methods", "Product Recalls", "Gift Card"],
    },
    {
      title: "Attractions",
      links: ["Woodekids House", "Woodekids Parks", "Discovery Centers", "Woodekids Catalogs", "Find a Store"],
    },
    {
      title: "More from us",
      links: ["Woodekids Education", "Woodekids Foundation", "Affiliate Program", "Braille Bricks", "Woodekids Life", "Woodekids Ideas"],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-16">
      <div className="w-full px-6 md:px-12 lg:px-16">
        
        {/* Main Content: Logo on Left, Nav on Right - Matches Navbar layout exactly */}
        <div className="flex flex-col lg:flex-row justify-between items-start">
          
          {/* Logo & Brand Info (Locked Left) */}
          <div className="w-full lg:w-auto mb-16 lg:mb-0">
            <div className="flex flex-col gap-6 items-start">
              <img 
                src="/logo/logo.png" 
                alt="Woodekids Logo" 
                className="h-10 md:h-12 w-auto object-contain object-left" 
              />
              <p className="text-gray-500 text-sm leading-relaxed font-sans font-medium text-left max-w-sm lg:max-w-md">
                Woodekids hadir sebagai sahabat terbaik dalam mendampingi fase emas tumbuh kembang buah hati Anda. 
                Kami mengkurasi mainan edukasi kayu kualitas premium yang dirancang secara artistik dan aman, 
                demi menstimulasi imajinasi, kreativitas, serta kemandirian anak sejak usia dini. 
                Mari bergabung bersama keluarga besar Woodekids untuk mewujudkan masa kecil yang penuh keceriaan dan eksplorasi makna.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-8">
              {["facebook", "twitter", "linkedin", "instagram", "youtube"].map((social, index) => (
                <a 
                  key={social} 
                  href="#" 
                  className={`w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-500 transition-all duration-300 ${
                    index % 4 === 0 ? "hover:bg-primary hover:text-white" : 
                    index % 4 === 1 ? "hover:bg-secondary hover:text-white" : 
                    index % 4 === 2 ? "hover:bg-tertiary hover:text-white" : "hover:bg-accent hover:text-white"
                  }`}
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                     <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Grid (Pushed to the Far Right) */}
          <div className="w-full lg:w-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 lg:gap-12 xl:gap-20">
                {footerSections.map((section, idx) => (
                    <div key={idx} className="text-left">
                        <h4 className="text-base font-black font-heading text-gray-900 mb-8 uppercase tracking-widest">
                            {section.title}
                        </h4>
                        <ul className="space-y-4 flex flex-col items-start">
                            {section.links.map((link, lIdx) => (
                            <li key={lIdx}>
                                <a 
                                href="#" 
                                className={`font-sans font-semibold text-xs md:text-sm transition-colors whitespace-nowrap ${
                                    idx === 0 ? "text-gray-500 hover:text-primary" : 
                                    idx === 1 ? "text-gray-500 hover:text-secondary" :
                                    idx === 2 ? "text-gray-500 hover:text-tertiary" : "text-gray-500 hover:text-accent"
                                }`}
                                >
                                {link}
                                </a>
                            </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
          </div>

        </div>

        {/* Simple Bottom Row */}
        <div className="mt-20 pt-10 border-t border-gray-100">
           <p className="text-xs text-gray-400 font-sans font-medium text-left">
             © {new Date().getFullYear()} Woodekids. All rights reserved.
           </p>
        </div>

      </div>
    </footer>
  );
}
