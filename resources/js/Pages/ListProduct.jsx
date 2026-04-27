import React, { useState } from "react";
import { Head, router } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProductCard from "../Components/ProductCard";
import WhatsAppButton from "../Components/Common/WhatsAppButton";
import Breadcrumbs from "../Components/Common/Breadcrumbs";

export default function ListProduct({ products, categories, filters = {} }) {
  const [activeCategory, setActiveCategory] = useState(filters?.category || null);
  const [searchQuery, setSearchQuery] = useState(filters?.search || "");
  const [sortBy, setSortBy] = useState(filters?.sort || "");
  React.useEffect(() => {
    setActiveCategory(filters?.category || null);
    setSearchQuery(filters?.search || "");
    setSortBy(filters?.sort || "");
  }, [filters]);
  const handleFilter = (params = {}) => {
  router.get("/products", {
    search: params.hasOwnProperty("search") ? params.search : searchQuery,
    category: params.hasOwnProperty("category") ? params.category : activeCategory,
    sort: params.hasOwnProperty("sort") ? params.sort : sortBy,
  }, {
    preserveState: true,
    replace: true,
  });
};

  return (
    <>
      <Head title="Katalog Produk - Woodekids" />
      <Navbar />
      <main className="pt-24 lg:pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="w-full px-6 md:px-12 lg:px-16 mb-8 lg:mb-12">
            <Breadcrumbs 
                items={[
                    { label: "Beranda", href: "/" },
                    { label: "Produk" }
                ]}
            />
        </div>
        <div className="w-full px-6 md:px-12 lg:px-16 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-200 pb-12">
                <div>
                   <h1 className="text-3xl md:text-5xl font-black font-heading tracking-tight text-gray-900 mb-4">
                     Koleksi <span className="text-primary italic">Terlengkap</span>
                   </h1>
                   <p className="text-gray-500 font-sans text-sm md:text-lg max-w-xl leading-relaxed">
                     Temukan berbagai pilihan mainan kayu edukatif berkualitas premium yang dirancang khusus untuk mendukung tumbuh kembang anak Anda.
                   </p>
                </div>
                <div className="relative w-full md:w-80 group">
                    <input 
                       type="text" 
                       placeholder="Cari mainan impian..."
                       value={searchQuery}
                       onChange={(e) => {
                         setSearchQuery(e.target.value);
                         handleFilter({ search: e.target.value });
                       }}
                       className="w-full pl-10 md:pl-12 pr-6 py-3 md:py-4 bg-white rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-primary/20 font-sans text-sm md:text-base font-medium transition-all group-hover:shadow-md"
                    />
                </div>
            </div>
        </div>
        <div className="w-full px-6 md:px-12 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-12">
                <aside className="w-full lg:w-64 shrink-0">
                    <div className="sticky top-32">
                        <h4 className="text-lg md:text-xl font-black font-heading text-gray-900 mb-6 md:mb-8 uppercase tracking-widest">
                            Kategori
                        </h4>
                        <div className="flex flex-wrap lg:flex-col gap-2 md:gap-3">
                            <button
                              onClick={() => {
                                setActiveCategory(null);
                                handleFilter({ category: "" }); 
                              }}
                                className={`px-4 py-2 md:px-6 md:py-3 rounded-xl font-sans font-bold text-xs md:text-sm ${
                                    !activeCategory 
                                    ? "bg-primary text-white" 
                                    : "bg-white text-gray-500"
                                }`}
                            >
                                Semua
                            </button>
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => {
                                      setActiveCategory(cat.slug);
                                      handleFilter({ category: cat.slug });
                                    }}
                                    className={`px-4 py-2 md:px-6 md:py-3 rounded-xl font-sans font-bold text-xs md:text-sm ${
                                        activeCategory === cat.slug 
                                        ? "bg-primary text-white" 
                                        : "bg-white text-gray-500"
                                    }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                        <div className="mt-8 md:mt-12 p-6 md:p-8 bg-primary rounded-[2rem] text-white overflow-hidden relative group hidden lg:block shadow-xl shadow-primary/20">
                            <div className="relative z-10">
                                <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] bg-white/20 px-3 py-1 rounded-full mb-4 md:mb-6 inline-block">Layanan Khusus</span>
                                <h5 className="text-xl md:text-2xl font-black font-heading mb-3 md:mb-4 leading-tight">Sulit Memilih Mainan Yang Tepat?</h5>
                                <p className="text-[10px] md:text-xs font-sans font-medium text-white/80 mb-6 md:mb-8 leading-relaxed">
                                    Konsultasi gratis dengan admin kami untuk menemukan mainan terbaik sesuai usia & minat buah hati Anda!
                                </p>
                                <a 
                                    href="https://wa.me/yournumber"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-4 py-2.5 md:px-6 md:py-3 bg-accent text-gray-900 text-[10px] md:text-xs font-black rounded-xl"
                                >
                                    Chat Sekarang
                                </a>
                            </div>
                        </div>
                    </div>
                </aside>
                <div className="flex-1">

                    <div className="flex justify-between items-center mb-10">
                        <p className="text-gray-400 font-sans font-bold text-sm uppercase tracking-widest">
                            Menampilkan <span className="text-gray-900">{products.data.length}</span> Produk
                        </p>
                        
                        <select 
                            value={sortBy}
                            onChange={(e) => {
                              setSortBy(e.target.value);
                              handleFilter({ sort: e.target.value });
                            }}
                            className="bg-white border-none rounded-xl text-sm font-bold font-sans text-gray-800"
                        >
                            <option value="">Terbaru</option>
                            <option value="price_low">Harga Terendah</option>
                            <option value="price_high">Harga Tertinggi</option>
                            <option value="rating">Rating Terbaik</option>
                        </select>
                    </div>
                    {products.data.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                            {products.data.map((product) => (
                                <ProductCard 
                                  key={product.id} 
                                  product={{
                                    ...product,
                                    image: product.image
                                      ? `/storage/${product.image}`
                                      : "/images/no-image.png",
                                  }}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center bg-white rounded-[3rem] border border-dashed border-gray-200">
                             <h3 className="text-xl font-bold text-gray-900 mb-2">
                               Produk tidak ditemukan
                             </h3>
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