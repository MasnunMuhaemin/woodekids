import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-tertiary flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">

        {/* Heading pakai Baloo 2 */}
        <h1 className="text-primary text-4xl font-bold font-heading">
          Mainan Kayu Anak
        </h1>

        {/* Body pakai Nunito */}
        <p className="mt-3 text-gray-600 font-sans">
          Aman, Edukatif & Menyenangkan untuk si kecil 👶
        </p>

        <button className="mt-6 bg-secondary text-white px-6 py-2 rounded-lg font-sans hover:opacity-90">
          Beli Sekarang
        </button>

      </div>
    </div>
  );
}