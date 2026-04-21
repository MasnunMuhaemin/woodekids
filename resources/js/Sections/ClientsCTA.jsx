import React from "react";

const clients = [
    { name: "Client 1", color: "bg-[#5da9e9]", icon: "🚗" },
    { name: "Client 2", color: "bg-[#e63946]", icon: "🚂" },
    { name: "Client 3", color: "bg-[#4caf50]", icon: "👒" },
    { name: "Client 4", color: "bg-[#f4c430]", icon: "⚡" },
    { name: "Client 5", color: "bg-[#4A90E2]", icon: "👶" },
    { name: "Client 6", color: "bg-[#FF6B6B]", icon: "🧸" },
    { name: "Client 7", color: "bg-[#51DB79]", icon: "🌟" },
];

export default function ClientsCTA() {
    return (
        <section className="relative w-full bg-white overflow-visible">
            {/* Top spacing to give room for overlap. Increased for mobile to accommodate taller box */}
            <div className="h-48 md:h-64 bg-white"></div>

            {/* Blue CTA Section (The Base) */}
            <div className="relative w-full bg-primary pt-80 md:pt-64 pb-32 md:pb-48">
                {/* Our Client Box (Overlapping / "Numpang") */}
                <div className="absolute top-0 left-0 w-full -translate-y-1/2 px-4 md:px-12 lg:px-16 z-20">
                    <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 shadow-[0_-10px_50px_-15px_rgba(0,0,0,0.05),0_40px_100px_-20px_rgba(0,0,0,0.2)] border border-gray-100/50 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold font-heading text-gray-900 mb-8 md:mb-12">
                            Our Client
                        </h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-10 items-center justify-items-center">
                            {clients.map((client, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-center group cursor-pointer"
                                >
                                    <div
                                        className={`w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full ${client.color} flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 mb-4 border-4 border-white`}
                                    >
                                        <span className="text-lg md:text-xl lg:text-2xl">
                                            {client.icon}
                                        </span>
                                    </div>
                                    <p className="font-sans font-bold text-gray-800 text-[10px] md:text-xs uppercase tracking-wider">
                                        {client.name}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-2 mt-10 md:mt-16">
                            <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-secondary"></div>
                            <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-gray-200"></div>
                            <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-gray-200"></div>
                        </div>
                    </div>
                </div>

                {/* Floating Decorations (Inside/On Blue) */}
                <div className="absolute left-10 top-80 w-24 h-24 text-white opacity-20 animate-bounce pointer-events-none hidden md:block">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-full h-full"
                    >
                        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.2c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                    </svg>
                </div>
                <div className="absolute right-10 top-[20rem] w-24 h-24 text-white opacity-20 animate-pulse pointer-events-none hidden md:block">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-full h-full"
                    >
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 16.5A4.5 4.5 0 117.5 12 4.5 4.5 0 0112 7.5 4.5 4.5 0 1116.5 12 4.5 4.5 0 0112 16.5z" />
                        <path d="M12 7.5V2" />
                        <path d="M12 22v-5.5" />
                        <path d="M16.5 12H22" />
                        <path d="M22 12h-5.5" />
                        <path d="M2 12h5.5" />
                        <path d="M7.5 12H2" />
                        <path d="M12 16.5V22" />
                        <path d="M12 2v5.5" />
                    </svg>
                </div>

                {/* CTA Content */}
                <div className="w-full px-6 md:px-12 lg:px-16 text-center max-w-7xl mx-auto">
                    <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/10">
                        <p className="text-[9px] md:text-xs font-sans font-bold text-white uppercase tracking-[0.2em] md:tracking-[0.3em]">
                            Wujudkan Imajinasi Buah Hati Anda & Mari Bergabung
                            Bersama Keluarga Besar Woodekids
                        </p>
                    </div>

                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-8 leading-[1.2] drop-shadow-xl">
                        Siap Menghadirkan Senyum dan Keceriaan Abadi di Rumah
                        Anda? <br className="hidden md:block" />
                        <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-8">
                            Konsultasi & Pesan Produk Kustom Eksklusif Sekarang
                        </span>
                    </h2>

                    <p className="max-w-4xl mx-auto text-white/80 text-xs md:text-base mb-12 font-sans leading-relaxed px-2 md:px-0">
                        Dapatkan koleksi mainan edukasi kayu premium yang
                        dirancang secara artistik dan ergonomis dengan penuh
                        cinta serta presisi tinggi demi mendukung setiap fase
                        tumbuh kembang buah hati Anda secara optimal dan
                        menyenangkan. Woodekids dengan bangga membuka ruang
                        konsultasi seluas-luasnya bagi para orang tua yang ingin
                        mewujudkan desain mainan impian yang tidak hanya aman
                        bagi anak, namun juga memiliki standar kualitas tinggi,
                        tahan lama, dan tentunya diproduksi menggunakan
                        bahan-bahan alami yang ramah lingkungan, seluruhnya
                        disesuaikan secara personal menurut segala keinginan
                        unik keluarga Anda.
                    </p>

                    <div className="flex flex-col items-center">
                        <a
                            href="https://wa.me/yournumber"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center justify-center gap-3 px-6 py-3.5 md:px-10 md:py-5 bg-accent text-gray-900 rounded-full font-sans font-bold text-base md:text-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-105 hover:bg-accent/90 active:scale-95 overflow-hidden"
                        >
                            <span>Pesan di WhatsApp</span>
                            <div className="p-1 md:p-1.5 bg-black/10 rounded-full">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </a>
                        <p className="text-xs text-white/50 mt-8 font-sans font-medium flex items-center gap-4">
                            <span>Konsultasi Gratis</span>
                            <span className="w-1 h-1 rounded-full bg-white/20"></span>
                            <span>Proses Cepat</span>
                            <span className="w-1 h-1 rounded-full bg-white/20"></span>
                            <span>Kualitas Terjamin</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
