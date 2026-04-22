import React from "react";
import ProductCard from "../Components/ProductCard";

export default function TopProducts() {
  const products = [
    {
      id: 1,
      name: "Pelangi Montessori",
      description: "Mainan kayu edukatif untuk melatih motorik halus dan pengenalan warna.",
      price: "Rp 149.000",
      image: "/images/products/rainbow.png",
      badge: "Diskon 10%",
      badgeClass: "bg-secondary",
      rating: 5,
      reviews: "9.5k"
    },
    {
      id: 2,
      name: "Abjad & Angka Kayu",
      description: "Balok susun huruf dan angka untuk dasar belajar membaca dan berhitung.",
      price: "Rp 189.000",
      image: "/images/products/blocks.png",
      badge: "Eksklusif",
      badgeClass: "bg-primary",
      rating: 5,
      reviews: "7.9k"
    },
    {
      id: 3,
      name: "Puzzle Hewan",
      description: "Meningkatkan kemampuan memecahkan masalah melalui dekorasi kayu.",
      price: "Rp 129.000",
      image: "/images/products/puzzle.png",
      badge: "Terbaru",
      badgeClass: "bg-tertiary",
      rating: 4,
      reviews: "472"
    },
    {
      id: 4,
      name: "Kereta Kayu Ceria",
      description: "Mainan kereta tarik kayu yang ceria dan tahan lama untuk petualangan si kecil.",
      price: "Rp 169.000",
      image: "/images/products/train.png",
      badge: "Eksklusif",
      badgeClass: "bg-accent",
      rating: 5,
      reviews: "4.2k"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-6 md:px-12 lg:px-16 mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 tracking-tight">
            Mainan Terpopuler
          </h2>
          <a 
            href="/products" 
            className="group flex items-center gap-2 px-6 py-2.5 md:px-8 md:py-3 border-2 border-primary/20 rounded-full text-gray-800 font-sans font-bold text-sm md:text-base hover:border-primary hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Lihat Koleksi
            <svg 
              className="w-4 h-4 md:w-5 md:h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}

