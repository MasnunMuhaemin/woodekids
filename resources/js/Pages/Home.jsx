import React from "react";
import { Head } from "@inertiajs/react";
import Hero from "../Sections/Hero";
import TopProducts from "../Sections/TopProducts";
import About from "../Sections/About";
import TopDeals from "../Sections/TopDeals";
import ClientsCTA from "../Sections/ClientsCTA";
import Contact from "../Sections/Contact";

import WhatsAppButton from "../Components/Common/WhatsAppButton";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Home() {
    return (
        <>
            <Head title="Woodekids - Mainan Kayu Edukasi" />

            <Navbar />

            <main>
                <div id="hero"><Hero /></div>
                <div id="produk"><TopProducts /></div>
                <div id="tentang"><About /></div>
                <TopDeals />
                <ClientsCTA />
                <div id="kontak"><Contact /></div>
                {/* Konten lainnya bisa ditambahkan di sini */}
            </main>

            <Footer />
            <WhatsAppButton />
        </>
    );
}
