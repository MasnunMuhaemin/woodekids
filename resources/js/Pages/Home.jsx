import React from "react";
import { Head } from "@inertiajs/react";
import Hero from "../Sections/Hero";
import TopProducts from "../Sections/TopProducts";
import WhatsAppButton from "../Components/Common/WhatsAppButton";
import Navbar from "../Components/Navbar";



export default function Home() {
  return (
    <>
      <Head title="Woodekids - Mainan Kayu Edukasi" />
      
      <Navbar />
      
      <main>
        <Hero />
        <TopProducts />
        {/* Konten lainnya bisa ditambahkan di sini */}
      </main>


      <WhatsAppButton />
    </>
  );
}
