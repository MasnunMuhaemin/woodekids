import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";

export default function TopDeals() {
  const categories = ["Semua Produk", "Gantungan Kunci", "Boneka Plush", "Set Lengkap", "Aksesoris", "Kotak Makan", "Hadiah Spesial"];
  const [activeTab, setActiveTab] = useState("Semua Produk");

  const mainProduct = {
    id: 1,
    name: "Easel Kayu Montessori",
    description: "Papan lukis dua sisi yang sempurna untuk menunjang kreativitas si kecil dalam menggambar dan menulis.",
    price: "Rp 249.000",
    image: "/images/products/easel.png",
    badge: "Diskon 40%",
    badgeClass: "bg-secondary",
    rating: 5,
    reviews: "1.2k"
  };

  const deals = [
    {
      id: 2,
      name: "Pelangi Montessori",
      description: "Mainan kayu edukatif warna ceria.",
      price: "Rp 149.000",
      image: "/images/products/rainbow.png",
      badge: "Diskon 10%",
      badgeClass: "bg-red-500",
      rating: 5,
      reviews: "409"
    },
    {
      id: 3,
      name: "Abjad & Angka Blok",
      description: "Belajar huruf dengan balok kayu.",
      price: "Rp 189.000",
      image: "/images/products/blocks.png",
      badge: "Terbaru",
      badgeClass: "bg-primary",
      rating: 5,
      reviews: "72"
    },
    {
      id: 4,
      name: "Puzzle Hewan Lucu",
      description: "Teka-teki kayu berkualitas tinggi.",
      price: "Rp 129.000",
      image: "/images/products/puzzle.png",
      badge: "Diskon 10%",
      badgeClass: "bg-tertiary",
      rating: 4,
      reviews: "215"
    },
    {
      id: 5,
      name: "Kereta Ceria",
      description: "Mainan kereta tarik kayu klasik.",
      price: "Rp 169.000",
      image: "/images/products/train.png",
      badge: "Diskon 15%",
      badgeClass: "bg-accent",
      rating: 5,
      reviews: "3.5k"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="w-full px-6 md:px-12 lg:px-16 mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-8">
            Penawaran Terbaik Hari Ini
          </h2>
          
          {/* Tabs */}
          <div className="flex flex-nowrap md:flex-wrap items-center gap-2 md:gap-3 overflow-x-auto pb-6 no-scrollbar px-1">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 border whitespace-nowrap ${
                  activeTab === tab 
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105" 
                  : "bg-white text-gray-500 border-gray-200 hover:border-primary/50 hover:text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          <ProductCard key={mainProduct.id} product={mainProduct} />
          {deals.map((deal) => (
            <ProductCard key={deal.id} product={deal} />
          ))}
        </div>


      </div>
    </section>
  );
}
