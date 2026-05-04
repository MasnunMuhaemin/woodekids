import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProductCard from "../Components/ProductCard";
import WhatsAppButton from "../Components/Common/WhatsAppButton";
import Breadcrumbs from "../Components/Common/Breadcrumbs";

const formatRupiah = (value) => {
  if (value === null || value === undefined) return "Rp 0";
  const clean = String(value).replace(/[^\d]/g, "");
  const number = parseInt(clean, 10);
  if (isNaN(number)) return "Rp 0";
  return `Rp ${number.toLocaleString("id-ID")}`;
};

export default function ProductDetail({ product, relatedProducts }) {
  const [selectedImg, setSelectedImg] = useState(0);
  const [activeTab, setActiveTab] = useState("description"); // description, additional, reviews

  if (!product) return null;

  // Map backend data to layout structure
  const images = product.images && product.images.length > 0 
    ? product.images.map(img => `/storage/${img.image_path}`)
    : ["/images/no-image.png"];
  
  const thumbnails = images;
  const badge = product.is_popular ? "Paling Populer" : "Terbaru";
  const badgeClass = product.is_popular ? "bg-secondary" : "bg-primary";
  
  // Create specifications from type and additional items
  const specifications = [
    { label: "Kategori", value: product.category?.name || "-" },
    { label: "Tipe", value: product.type?.name || "-" },
    ...(product.additional_items?.map(item => ({ label: "Fitur", value: item.name })) || [])
  ].slice(0, 5); // Limit to 5 for layout consistency

  return (
    <>
      <Head title={`${product.name} - Woodekids`} />
      <Navbar />

      <main className="pt-24 lg:pt-32 pb-20 bg-white min-h-screen">
        
        <div className="w-full px-6 md:px-12 lg:px-16 mb-8 lg:mb-12">
            <Breadcrumbs 
                items={[
                    { label: "Beranda", href: "/" },
                    { label: "Produk", href: "/products" },
                    { 
                        label: product.category?.name || "Kategori", 
                        href: `/products?category=${product.category?.slug}` 
                    },
                    { label: product.name }
                ]}
            />
        </div>

        <div className="w-full px-6 md:px-12 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                
                {/* Left: Image Gallery */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <div className="relative aspect-square bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 group shadow-inner">
                        <img 
                            src={thumbnails[selectedImg]} 
                            alt={product.name}
                            className="w-full h-full object-contain p-10 transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-6 left-6">
                            <span className={`${badgeClass} text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg`}>
                                {badge}
                            </span>
                        </div>
                    </div>
                    
                    <div className="flex gap-4">
                        {thumbnails.map((img, idx) => (
                            <button 
                                key={idx}
                                onClick={() => setSelectedImg(idx)}
                                className={`w-24 h-24 rounded-2xl border-2 transition-all p-2 bg-gray-50 overflow-hidden ${
                                    selectedImg === idx ? "border-primary shadow-lg shadow-primary/10" : "border-transparent opacity-60 hover:opacity-100"
                                }`}
                            >
                                <img src={img} alt="" className="w-full h-full object-contain" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right: Product Info */}
                <div className="w-full lg:w-1/2 flex flex-col pt-4">
                    <div className="flex items-center gap-2 mb-6 text-accent">
                         <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                         </div>
                         <span className="text-sm font-sans font-bold text-gray-500">({product.rating || 0} Rating)</span>
                    </div>

                    <h1 className="text-2xl md:text-5xl font-black font-heading text-gray-900 mb-4 md:mb-6 leading-tight">
                        {product.name}
                    </h1>

                    <p className="text-2xl md:text-3xl font-black font-sans text-primary mb-6 md:mb-8">
                        {formatRupiah(product.price)}
                    </p>

                    <p className="text-sm md:text-lg text-gray-500 font-sans leading-relaxed mb-8 md:mb-10 pb-8 md:pb-10 border-b border-gray-100">
                        {product.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {specifications.map((spec, i) => (
                            <div key={i} className="flex flex-col gap-1">
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{spec.label}</span>
                                <span className="text-sm font-sans font-bold text-gray-800">{spec.value}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-auto space-y-4">
                        <a 
                            href={`https://wa.me/628123456789?text=Halo Woodekids, saya tertarik dengan produk ${product.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-3 md:gap-4 py-3.5 md:py-5 bg-primary text-white rounded-[2rem] font-sans font-black text-base md:text-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            Beli via WhatsApp
                        </a>
                        <p className="text-center text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest">Tersedia Stok: <span className="text-secondary">Terbatas!</span></p>
                    </div>
                </div>

            </div>

             {/* Tab Section Full Description */}
            <div className="mt-16 md:mt-24 lg:mt-32">
                <div className="flex border-b border-gray-100 mb-8 md:mb-12 overflow-x-auto no-scrollbar">
                    <button 
                        onClick={() => setActiveTab("description")}
                        className={`px-6 md:px-8 py-3 md:py-4 border-b-4 font-black font-heading text-sm md:text-lg uppercase tracking-widest whitespace-nowrap transition-all ${
                            activeTab === "description" ? "border-primary text-gray-900" : "border-transparent text-gray-400 hover:text-gray-900"
                        }`}
                    >
                        Deskripsi
                    </button>
                    <button 
                        onClick={() => setActiveTab("additional")}
                        className={`px-6 md:px-8 py-3 md:py-4 border-b-4 font-black font-heading text-sm md:text-lg uppercase tracking-widest transition-all whitespace-nowrap ${
                            activeTab === "additional" ? "border-primary text-gray-900" : "border-transparent text-gray-400 hover:text-gray-900"
                        }`}
                    >
                        Informasi Tambahan
                    </button>
                </div>
                
                <div className="max-w-4xl min-h-[200px]">
                    {activeTab === "description" && (
                        <div className="text-sm md:text-lg text-gray-500 font-sans leading-relaxed md:leading-loose whitespace-pre-line animate-in fade-in duration-500">
                            {product.description}
                        </div>
                    )}

                    {activeTab === "additional" && (
                        <div className="animate-in slide-in-from-left-4 duration-700">
                            <div className="flex flex-col items-start text-left mb-12">
                                <div className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-xl text-[10px] font-black uppercase tracking-[0.2em] mb-4">Extra Joy</div>
                                <h4 className="text-3xl md:text-5xl font-black font-heading text-gray-900 mb-2">Item Tambahan</h4>
                                <p className="text-gray-400 font-sans text-sm md:text-lg font-bold">Lengkapi Kebahagiaan Belajar Si Kecil</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                                {product.additional_items && product.additional_items.length > 0 ? (
                                    product.additional_items.map((item, idx) => {
                                        const themes = [
                                            { 
                                                bg: "bg-primary/5", 
                                                iconBg: "bg-white shadow-primary/10", 
                                                iconColor: "text-primary",
                                                border: "border-primary/10",
                                                icon: (
                                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                                        <path d="M11.5 22C5.42 22 0.5 17.08 0.5 11V5C0.5 3.34 1.84 2 3.5 2H9.5C10.83 2 12 3.17 12 4.5V11H18.5C19.83 11 21 12.17 21 13.5V19.5C21 21.16 19.66 22.5 18 22.5H11.5z M2.5 5V11C2.5 15.97 6.53 20 11.5 20H18C18.83 20 19.5 19.33 19.5 18.5V13.5C19.5 13.22 19.28 13 19 13H11.5C10.17 13 9 11.83 9 10.5V4C9 3.72 8.78 3.5 8.5 3.5H3.5C3.22 3.5 3 3.72 3 4V5H2.5z"/>
                                                    </svg>
                                                )
                                            },
                                            { 
                                                bg: "bg-secondary/5", 
                                                iconBg: "bg-white shadow-secondary/10", 
                                                iconColor: "text-secondary",
                                                border: "border-secondary/10",
                                                icon: (
                                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                                    </svg>
                                                )
                                            },
                                            { 
                                                bg: "bg-tertiary/5", 
                                                iconBg: "bg-white shadow-tertiary/10", 
                                                iconColor: "text-tertiary",
                                                border: "border-tertiary/10",
                                                icon: (
                                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                                        <path d="M13.13 22.19L11.5 18.36L9.87 22.19L5.33 21L6.03 16.13L2.19 14.5L6.03 12.87L5.33 8L9.87 6.81L11.5 3L13.13 6.81L17.67 8L16.97 12.87L20.81 14.5L16.97 16.13L17.67 21L13.13 22.19z"/>
                                                    </svg>
                                                )
                                            },
                                            { 
                                                bg: "bg-accent/5", 
                                                iconBg: "bg-white shadow-accent/10", 
                                                iconColor: "text-accent",
                                                border: "border-accent/10",
                                                icon: (
                                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                                    </svg>
                                                )
                                            },
                                        ];
                                        const theme = themes[idx % themes.length];
                                        
                                        return (
                                            <div key={idx} className={`${theme.bg} ${theme.border} border-2 p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-200`}>
                                                <div className="relative z-10 flex items-center gap-4 md:gap-6">
                                                    <div className={`${theme.iconBg} ${theme.iconColor} w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                                        <div className="scale-75 md:scale-100 flex items-center justify-center">
                                                            {theme.icon}
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-0.5 md:mb-1">Item Ekstra</span>
                                                        <span className="text-base md:text-2xl font-black font-heading text-gray-900 group-hover:text-primary transition-colors">{item.name}</span>
                                                    </div>
                                                </div>
                                                
                                                {/* Decorative Circle */}
                                                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-white/40 rounded-full blur-xl md:blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="col-span-full py-20 text-center bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
                                        <div className="text-5xl mb-4">🎁</div>
                                        <p className="text-gray-400 font-sans font-bold italic">Belum ada item tambahan untuk saat ini.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Related Products */}
            <div className="mt-20 md:mt-32">
                <h3 className="text-2xl md:text-4xl font-black font-heading text-gray-900 mb-8 md:mb-12">
                    Mungkin Si Kecil <span className="text-secondary italic">Suka Ini Juga</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedProducts && relatedProducts.length > 0 ? (
                        relatedProducts.map((p) => (
                            <ProductCard 
                                key={p.id} 
                                product={p} 
                            />
                        ))
                    ) : (
                        <p className="text-gray-400 font-sans">Belum ada produk terkait.</p>
                    )}
                </div>
            </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
