import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProductCard from "../Components/ProductCard";
import WhatsAppButton from "../Components/Common/WhatsAppButton";

const product = {
  id: 1,
  name: "Pelangi Montessori Premium",
  category: "Montessori",
  description: "Wujudkan imajinasi si kecil dengan Pelangi Montessori Premium Woodekids. Mainan kayu ikonik ini dirancang khusus untuk merangsang kreativitas, kognitif, dan kemampuan motorik halus anak melalui eksplorasi warna dan bentuk yang tak terbatas.",
  fullDescription: "Pelangi Montessori Woodekids bukan sekadar mainan, melainkan alat peraga edukasi multifungsi. Terdiri dari 7 lengkungan kayu yang presisi, anak-anak dapat membangun jembatan, terowongan, rumah boneka, atau susunan artistik lainnya. \n\nTerbuat dari kayu pinus pilihan berkualitas tinggi dengan sisa kadar air yang minimal, menjadikannya kokoh dan tahan lama. Proses pewarnaan menggunakan cat berbasis air (Water-based) yang non-toxic sehingga sangat aman jika tidak sengaja tergigit oleh sikecil.",
  price: "Rp 149.000",
  image: "/images/products/rainbow.png",
  thumbnails: [
    "/images/products/rainbow.png",
    "/images/products/rainbow.png",
    "/images/products/rainbow.png",
  ],
  badge: "Paling Populer",
  badgeClass: "bg-secondary",
  rating: 5,
  reviews: "9.5k terjual",
  specifications: [
    { label: "Bahan", value: "Kayu Pinus Solid Grade A" },
    { label: "Cat", value: "Non-Toxic Waterbased Paint" },
    { label: "Dimensi", value: "25cm x 13cm x 4cm" },
    { label: "Rekomendasi Usia", value: "12 Bulan keatas" },
    { label: "Berat", value: "800 gram" }
  ]
};

const relatedProducts = [
    { id: 2, name: "Abjad & Angka Kayu", description: "Balok susun edukasi", price: "Rp 189.000", image: "/images/products/blocks.png", badge: "Eksklusif", badgeClass: "bg-primary", rating: 5, reviews: "7.9k" },
    { id: 3, name: "Puzzle Hewan Hutan", description: "Asah logika anak", price: "Rp 129.000", image: "/images/products/puzzle.png", badge: "Baru", badgeClass: "bg-tertiary", rating: 4, reviews: "472" },
    { id: 4, name: "Kereta Kayu Ceria", description: "Teman bermain si kecil", price: "Rp 169.000", image: "/images/products/train.png", badge: "Promo", badgeClass: "bg-accent", rating: 5, reviews: "4.2k" },
];

export default function ProductDetail() {
  const [selectedImg, setSelectedImg] = useState(0);

  return (
    <>
      <Head title={`${product.name} - Woodekids`} />
      <Navbar />

      <main className="pt-24 lg:pt-32 pb-20 bg-white min-h-screen">
        
        {/* Breadcrumbs */}
        <div className="w-full px-6 md:px-12 lg:px-16 mb-8 lg:mb-12">
            <nav className="flex items-center gap-2 text-xs md:text-sm font-sans font-bold text-gray-400 uppercase tracking-widest">
                <a href="/" className="hover:text-primary transition-colors">Home</a>
                <span>/</span>
                <a href="/products" className="hover:text-primary transition-colors">Produk</a>
                <span>/</span>
                <span className="text-gray-900">{product.category}</span>
            </nav>
        </div>

        <div className="w-full px-6 md:px-12 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                
                {/* Left: Image Gallery */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <div className="relative aspect-square bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 group shadow-inner">
                        <img 
                            src={product.thumbnails[selectedImg]} 
                            alt={product.name}
                            className="w-full h-full object-contain p-10 transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-6 left-6">
                            <span className={`${product.badgeClass} text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg`}>
                                {product.badge}
                            </span>
                        </div>
                    </div>
                    
                    <div className="flex gap-4">
                        {product.thumbnails.map((img, idx) => (
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
                         <span className="text-sm font-sans font-bold text-gray-500">({product.reviews})</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black font-heading text-gray-900 mb-6 leading-tight">
                        {product.name}
                    </h1>

                    <p className="text-3xl font-black font-sans text-primary mb-8">
                        {product.price}
                    </p>

                    <p className="text-lg text-gray-500 font-sans leading-relaxed mb-10 pb-10 border-b border-gray-100">
                        {product.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {product.specifications.map((spec, i) => (
                            <div key={i} className="flex flex-col gap-1">
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{spec.label}</span>
                                <span className="text-sm font-sans font-bold text-gray-800">{spec.value}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-auto space-y-4">
                        <a 
                            href="https://wa.me/yournumber"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-4 py-5 bg-primary text-white rounded-[2rem] font-sans font-black text-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            Beli via WhatsApp
                        </a>
                        <p className="text-center text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest">Tersedia Stok: <span className="text-secondary">Terbatas!</span></p>
                    </div>
                </div>

            </div>

             {/* Tab Section Full Description */}
            <div className="mt-24 lg:mt-32">
                <div className="flex border-b border-gray-100 mb-12">
                    <button className="px-8 py-4 border-b-4 border-primary text-gray-900 font-black font-heading text-lg uppercase tracking-widest">Deskripsi</button>
                    <button className="px-8 py-4 text-gray-400 hover:text-gray-900 font-black font-heading text-lg uppercase tracking-widest transition-colors">Informasi Tambahan</button>
                    <button className="px-8 py-4 text-gray-400 hover:text-gray-900 font-black font-heading text-lg uppercase tracking-widest transition-colors">Reviews</button>
                </div>
                <div className="max-w-4xl text-lg text-gray-500 font-sans leading-loose whitespace-pre-line">
                    {product.fullDescription}
                </div>
            </div>

            {/* Related Products */}
            <div className="mt-32">
                <h3 className="text-3xl md:text-4xl font-black font-heading text-gray-900 mb-12">
                    Mungkin Si Kecil <span className="text-secondary italic">Suka Ini Juga</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedProducts.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
