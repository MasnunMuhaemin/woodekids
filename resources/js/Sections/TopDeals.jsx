import React from "react";
import { Link } from "@inertiajs/react";
import ProductCard from "../Components/ProductCard";

export default function TopDeals({ 
  products = [], 
  categories = [], 
  activeCategory 
}) {

  const isEmpty = !products || products.length === 0;

  return (
    <section className="py-24 bg-white">
      <div className="w-full px-6 md:px-12 lg:px-16 mx-auto">        
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-8">
            Penawaran Terbaik Hari Ini
          </h2>
          <div className="flex flex-nowrap md:flex-wrap items-center gap-2 md:gap-3 overflow-x-auto pb-6 no-scrollbar px-1">
            <Link
              href="/"
              preserveScroll
              className={`px-4 py-1.5 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 border whitespace-nowrap ${
                !activeCategory
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105"
                  : "bg-white text-gray-500 border-gray-200 hover:border-primary/50 hover:text-primary"
              }`}
            >
              Semua Produk
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/?category=${cat.slug}`} 
                preserveScroll
                className={`px-4 py-1.5 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 border whitespace-nowrap ${
                  activeCategory == cat.slug 
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105"
                    : "bg-white text-gray-500 border-gray-200 hover:border-primary/50 hover:text-primary"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
        {isEmpty ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              Belum ada penawaran saat ini 😢
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            <ProductCard 
              key={products[0].id} 
              product={{
                ...products[0],
                badge: "Diskon",
                badgeClass: "bg-secondary"
              }} 
            />
            {products.slice(1).map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  ...product,
                  badge: "Promo",
                  badgeClass: "bg-primary"
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}