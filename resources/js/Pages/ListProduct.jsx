import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProductCard from "../Components/ProductCard";
import WhatsAppButton from "../Components/Common/WhatsAppButton";
import Breadcrumbs from "../Components/Common/Breadcrumbs";

const categories = ["Semua", "Montessori", "Puzzle", "Balok Susun", "Alat Musik", "Seni & Lukis"];

const initialProducts = [
  {
    id: 1,
    name: "Pelangi Montessori Premium",
    category: "Montessori",
    description: "Mainan kayu edukatif untuk melatih motorik halus dan pengenalan warna.",
    price: "Rp 149.000",
    image: "/images/products/rainbow.png",
    badge: "Terlaris",
    badgeClass: "bg-secondary",
    rating: 5,
    reviews: "9.5k"
  },
  {
    id: 2,
    name: "Abjad & Angka Kayu",
    category: "Balok Susun",
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
    name: "Puzzle Hewan Hutan",
    category: "Puzzle",
    description: "Meningkatkan kemampuan memecahkan masalah melalui dekorasi kayu.",
    price: "Rp 129.000",
    category: "Puzzle",
    image: "/images/products/puzzle.png",
    badge: "Baru",
    badgeClass: "bg-tertiary",
    rating: 4,
    reviews: "472"
  },
  {
    id: 4,
    name: "Kereta Kayu Ceria",
    category: "Balok Susun",
    description: "Mainan kereta tarik kayu yang ceria dan tahan lama untuk petualangan si kecil.",
    price: "Rp 169.000",
    image: "/images/products/train.png",
    badge: "Diskon",
    badgeClass: "bg-accent",
    rating: 5,
    reviews: "4.2k"
  },
  {
    id: 5,
    name: "Gitar Kayu Mini",
    category: "Alat Musik",
    description: "Kenalkan melodi pertama dengan alat musik kayu berkualitas tinggi.",
    price: "Rp 249.000",
    image: "/images/products/guitar.png",
    badge: "Hot Buy",
    badgeClass: "bg-secondary",
    rating: 5,
    reviews: "1.2k"
  },
  {
      id: 6,
      name: "Papan Lukis Magnetik",
      category: "Seni & Lukis",
      description: "Papan tulis dua sisi (kapur & magnetik) untuk asah kreativitas anak.",
      price: "Rp 325.000",
      image: "/images/products/board.png",
      badge: "Best Value",
      badgeClass: "bg-tertiary",
      rating: 5,
      reviews: "928"
  },
];

export default function ListProduct() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Terbaru");

  const filteredProducts = initialProducts.filter(product => {
    const matchesCategory = activeCategory === "Semua" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head title="Katalog Produk - Woodekids" />
      <Navbar />

      <main className="pt-24 lg:pt-32 pb-20 bg-gray-50 min-h-screen">
        
        {/* Breadcrumbs */}
        <div className="w-full px-6 md:px-12 lg:px-16 mb-8 lg:mb-12">
            <Breadcrumbs 
                items={[
                    { label: "Home", href: "/" },
                    { label: "Produk" }
                ]}
            />
        </div>
        
        {/* Page Header */}
        <div className="w-full px-6 md:px-12 lg:px-16 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-200 pb-12">
                <div>
                   <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight text-gray-900 mb-4">
                     Koleksi <span className="text-primary italic">Terlengkap</span>
                   </h1>
                   <p className="text-gray-500 font-sans text-lg max-w-xl leading-relaxed">
                     Temukan berbagai pilihan mainan kayu edukatif berkualitas premium yang dirancang khusus untuk mendukung tumbuh kembang anak Anda.
                   </p>
                </div>
                
                {/* Search Bar */}
                <div className="relative w-full md:w-80 group">
                    <input 
                       type="text" 
                       placeholder="Cari mainan impian..."
                       value={searchQuery}
                       onChange={(e) => setSearchQuery(e.target.value)}
                       className="w-full pl-12 pr-6 py-4 bg-white rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-primary/20 font-sans font-medium transition-all group-hover:shadow-md"
                    />
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-focus-within:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>
        </div>

        <div className="w-full px-6 md:px-12 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-12">
                
                {/* Sidebar Filter (Desktop) */}
                <aside className="w-full lg:w-64 shrink-0">
                    <div className="sticky top-32">
                        <h4 className="text-xl font-black font-heading text-gray-900 mb-8 uppercase tracking-widest">
                            Kategori
                        </h4>
                        <div className="flex flex-wrap lg:flex-col gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-3 rounded-xl font-sans font-bold text-sm text-left transition-all ${
                                        activeCategory === cat 
                                        ? "bg-primary text-white shadow-lg shadow-primary/20 translate-x-2" 
                                        : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Banner Promo WhatsApp */}
                        <div className="mt-12 p-8 bg-primary rounded-[2rem] text-white overflow-hidden relative group hidden lg:block shadow-xl shadow-primary/20">
                            <div className="relative z-10">
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] bg-white/20 px-3 py-1 rounded-full mb-6 inline-block">Layanan Khusus</span>
                                <h5 className="text-2xl font-black font-heading mb-4 leading-tight">Sulit Memilih Mainan Yang Tepat?</h5>
                                <p className="text-xs font-sans font-medium text-white/80 mb-8 leading-relaxed">
                                    Konsultasi gratis dengan admin kami untuk menemukan mainan terbaik sesuai usia & minat buah hati Anda!
                                </p>
                                <a 
                                    href="https://wa.me/yournumber"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-gray-900 text-xs font-black rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 uppercase tracking-widest shadow-lg shadow-accent/10"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                    Chat Sekarang
                                </a>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                        </div>
                    </div>
                </aside>

                {/* Products Grid */}
                <div className="flex-1">
                    {/* Sort & Info */}
                    <div className="flex justify-between items-center mb-10">
                        <p className="text-gray-400 font-sans font-bold text-sm uppercase tracking-widest">
                            Menampilkan <span className="text-gray-900">{filteredProducts.length}</span> Produk
                        </p>
                        
                        <div className="flex items-center gap-3">
                            <span className="hidden md:inline text-xs font-black text-gray-400 uppercase tracking-widest">Urutkan:</span>
                            <select 
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-white border-none rounded-xl text-sm font-bold font-sans text-gray-800 shadow-sm focus:ring-2 focus:ring-primary/20 py-2.5 pl-4 pr-10 cursor-pointer"
                            >
                                <option>Terlaki</option>
                                <option>Harga Terendah</option>
                                <option>Harga Tertinggi</option>
                                <option>Rating Terbaik</option>
                            </select>
                        </div>
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center bg-white rounded-[3rem] border border-dashed border-gray-200">
                             <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                             </div>
                             <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">Pencarian Tidak Ditemukan</h3>
                             <p className="text-gray-500 font-sans">Kami tidak menemukan mainan dengan kata kunci tersebut. Coba kategori lain!</p>
                             <button 
                                onClick={() => {setActiveCategory("Semua"); setSearchQuery("");}}
                                className="mt-8 text-primary font-black uppercase text-xs tracking-widest underline decoration-2 underline-offset-4"
                             >
                                Reset Semua Filter
                             </button>
                        </div>
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
