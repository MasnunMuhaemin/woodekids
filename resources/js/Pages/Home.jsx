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

export default function Home({ 
    popularProducts, 
    dealProducts, 
    categories, 
    activeCategory 
}) {
    return (
        <>
            <Head title="Woodekids - Mainan Kayu Edukasi" />
            <Navbar />
            <main>
                <div id="hero"><Hero /></div>
                <div id="produk">
                    <TopProducts products={popularProducts} />
                </div>
                <div id="tentang"><About /></div>
                <div id="promo">
                    <TopDeals 
                        products={dealProducts}
                        categories={categories}
                        activeCategory={activeCategory}
                    />
                </div>
                <div id="klien"><ClientsCTA /></div>
                <div id="kontak"><Contact /></div>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}