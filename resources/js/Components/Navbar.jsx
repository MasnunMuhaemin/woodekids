import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Tentang", href: "/#tentang" },
    { name: "Produk", href: "/#produk" },
    { name: "Kontak", href: "/#kontak" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen ? "bg-black/80 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-16">

        <div className="flex justify-between items-center">
          
          {/* Logo (Using user's logo from public/logo/logo.png) */}
          <Link href="/" className="flex items-center group">
            <img 
              src="/logo/logo.png" 
              alt="Woodekids Logo" 
              className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-white/90 hover:text-white font-sans text-sm font-semibold tracking-wide transition-colors relative group py-2"
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  index % 3 === 0 ? "bg-primary" : index % 3 === 1 ? "bg-secondary" : "bg-tertiary"
                }`}></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-2">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="block text-white/80 hover:text-white px-3 py-4 text-lg font-sans border-b border-white/5 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
