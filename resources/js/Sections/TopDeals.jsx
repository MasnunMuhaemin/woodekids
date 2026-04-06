import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";

export default function TopDeals() {
  const categories = ["All Product", "Key Chains", "Plush toys", "All Sets", "Accessories", "Lunch Boxes", "Easter Gifts"];
  const [activeTab, setActiveTab] = useState("All Product");

  const mainProduct = {
    id: 1,
    name: "Easel Kayu Montessori",
    description: "Papan lukis dua sisi yang sempurna untuk menunjang kreativitas si kecil dalam menggambar dan menulis.",
    price: "Rp 249.000",
    image: "/images/products/easel.png",
    badge: "40% Off",
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
      badge: "10% Off",
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
      badge: "New",
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
      badge: "10% Off",
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
      badge: "15% Off",
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
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-8">
            Top deals just for you today
          </h2>
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-3 overflow-x-auto pb-4 no-scrollbar">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
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
