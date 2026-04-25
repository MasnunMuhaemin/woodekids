import React from "react";
import { Link } from "@inertiajs/react";

const StarRating = ({ rating = 0 }) => {
  return (
    <div className="flex text-accent">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 fill-current ${
            i < Math.round(rating) ? "" : "text-gray-300"
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const limitText = (text, limit = 60) => {
  if (!text) return "Tidak ada deskripsi";
  if (text.length <= limit) return text;
  const trimmed = text.substring(0, limit);
  const lastSpace = trimmed.lastIndexOf(" ");
  return (lastSpace > 0 ? trimmed.substring(0, lastSpace) : trimmed) + "...";
};

const formatRupiah = (value) => {
  if (value === null || value === undefined) return "Rp 0";
  const clean = String(value).replace(/[^\d]/g, "");
  const number = parseInt(clean, 10);
  if (isNaN(number)) return "Rp 0";
  return `Rp ${number.toLocaleString("id-ID")}`;
};

export default function ProductCard({ product }) {
  if (!product) return null;
  return (
    <div className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden transition-all duration-300">      
      <Link href={`/products/${product.slug || ""}`}>
        <div className="relative aspect-square bg-white flex items-center justify-center p-0 mb-4 overflow-hidden rounded-3xl border border-gray-100">
          {product.badge && (
            <div className="absolute top-4 left-4 z-10">
              <span
                className={`${
                  product.badgeClass || "bg-primary"
                } text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm`}
              >
                {product.badge}
              </span>
            </div>
          )}
          <img
            src={product.image || "/images/no-image.png"}
            alt={product.name || "Produk"}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="flex-1 px-4 pb-6 flex flex-col bg-white">
        <Link href={`/products/${product.slug || ""}`}>
          <div className="flex flex-col gap-1 mb-2">            
            <h3 className="text-sm md:text-lg font-bold font-sans text-gray-900 group-hover:text-primary transition-colors mt-2 line-clamp-1">
              {product.name || "Produk tanpa nama"}
            </h3>
            <p className="text-[10px] md:text-sm text-gray-500 leading-snug font-sans line-clamp-2">
              {limitText(product.description)}
            </p>
          </div>
        </Link>        
        <div className="flex items-center gap-1 md:gap-2 mb-4">
          <StarRating rating={product.rating ?? 0} />
        </div>
        <div className="mt-auto flex items-center bg-white">
          <span className="text-sm md:text-base lg:text-xl font-black font-sans text-gray-900 whitespace-nowrap">
            {formatRupiah(product.price)}
          </span>
        </div>
      </div>

    </div>
  );
}