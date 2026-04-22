import React from "react";

export default function Footer() {
  const footerSections = [
    {
      title: "Menu Utama",
      links: [
        { name: "Produk", href: "/#produk" },
        { name: "Tentang", href: "/#tentang" },
        { name: "Promo", href: "/#promo" },
        { name: "Klien", href: "/#klien" },
        { name: "Kontak", href: "/#kontak" }
      ],
    },
    {
      title: "Koleksi",
      links: [
        { name: "Montessori", href: "/products" },
        { name: "Puzzle", href: "/products" },
        { name: "Balok Susun", href: "/products" },
        { name: "Alat Musik", href: "/products" },
        { name: "Seni & Lukis", href: "/products" }
      ],
    },
    {
      title: "Layanan",
      links: [
        { name: "Konsultasi Gratis", href: "https://wa.me/yournumber" },
        { name: "Produk Kustom", href: "https://wa.me/yournumber" },
        { name: "Hubungi WhatsApp", href: "https://wa.me/yournumber" }
      ],
    },
    {
      title: "Jam Operasional",
      links: [
        { name: "Senin - Sabtu"},
        { name: "09:00 - 17:00 WIB"},
        { name: "Minggu: Chat Only"},
        { name: "Lokasi: Jawa Barat"}
      ],
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
              {[
                { 
                  name: "Instagram", 
                  href: "https://instagram.com/woodekids", 
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" 
                },
                { 
                  name: "Email", 
                  href: "mailto:info@woodekids.com", 
                  path: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" 
                },
              ].map((social, index) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target={social.name === "Email" ? "_self" : "_blank"}
                  rel={social.name === "Email" ? "" : "noopener noreferrer"}
                  className={`w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-500 transition-all duration-300 ${
                    index === 0 ? "hover:bg-primary hover:text-white hover:border-primary" : "hover:bg-secondary hover:text-white hover:border-secondary"
                  }`}
                >
                  <span className="sr-only">{social.name}</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d={social.path} />
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
                                href={link.href} 
                                className={`font-sans font-semibold text-xs md:text-sm transition-colors whitespace-nowrap ${
                                    idx === 0 ? "text-gray-500 hover:text-primary" : 
                                    idx === 1 ? "text-gray-500 hover:text-secondary" :
                                    idx === 2 ? "text-gray-500 hover:text-tertiary" : "text-gray-500 hover:text-accent"
                                }`}
                                >
                                {link.name}
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
