import React from "react";

export default function Home() {
    return (
        <div className="min-h-screen bg-tertiary flex items-center justify-center">
            <div className="bg-white p-10 rounded-xl shadow text-center">
                <h1 className="text-primary text-3xl font-bold">
                    Mainan Kayu Anak
                </h1>

                <button className="mt-6 bg-secondary text-white px-6 py-2 rounded-lg hover:opacity-90">
                    Beli Sekarang
                </button>
            </div>
        </div>
    );
}
