import React from "react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex text-accent">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 fill-current ${i < rating ? "" : "text-gray-300"}`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function ProductCard({ product }) {
  return (
    <div className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden transition-all duration-300">
      
      {/* Image & Badges Layer */}
      <div className="relative aspect-square bg-white flex items-center justify-center p-0 mb-4 overflow-hidden rounded-3xl border border-gray-100">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`${product.badgeClass} text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm`}>
            {product.badge}
          </span>
        </div>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Text Info */}
      <div className="flex-1 px-4 pb-6 flex flex-col bg-white">
        <div className="flex flex-col gap-1 mb-2">
          <h3 className="text-xl font-bold font-sans text-gray-900 group-hover:text-primary transition-colors mt-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 leading-snug font-sans line-clamp-2">
            {product.description}
          </p>
        </div>
        
        {/* Stars & Reviews */}
        <div className="flex items-center gap-2 mb-4">
          <StarRating rating={product.rating} />
          <span className="text-xs text-gray-400 font-sans">({product.reviews})</span>
        </div>

        {/* Price & Add to Cart */}
        <div className="mt-auto flex justify-between items-center bg-white">
          <span className="text-2xl font-black font-sans text-gray-900">
            {product.price}
          </span>
          <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-800 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm hover:shadow-lg hover:shadow-primary/20">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
}
