import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Hello dari React + Inertia 🚀
        </h1>
        <p className="text-gray-600">
          Tailwind sudah berhasil dipakai 🎉
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Klik Saya
        </button>
      </div>
    </div>
  );
}