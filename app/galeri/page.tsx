"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Galeri() {
  const fotos = [
    { src: "/galeri/foto1.jpg", teks: "Kamuu Lucuuu bngttt siii" },
    { src: "/galeri/foto2.jpg", teks: "Bahagiaaa terussss aaaaa" },
    { src: "/galeri/foto3.jpg", teks: "Longg lifee pliss demi aku wkwkwkw" },
    { src: "/galeri/foto4.jpg", teks: "Bahagiaaa terusss yaaa" },
    { src: "/galeri/foto5.jpg", teks: "Aku seneng bngt bisa ketemu sama kmu" },
    { src: "/galeri/foto6.jpg", teks: "Jangan lupa tersenyummm yaa" },
    { src: "/galeri/foto7.jpg", teks: "Kamuuu menjadi alasanku untuk senyummm di hari yng syibals ini" },
    { src: "/galeri/foto8.jpg", teks: "Makasih sudahhh mww menerimaa yappingkuu yaaa" },
    { src: "/galeri/foto9.jpg", teks: "Aku sukaa bngt kaalu kmmmmm pap wkwkwkw kek lucu ajaa" },
    { src: "/galeri/foto10.jpg", teks: "Jangan bosen sama aku yaaaaaaa" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleText = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-50 py-16 px-6">

      {/* Judul dekoratif lebih hidup */}
      <h1
        className="text-6xl md:text-7xl font-extrabold mb-16 text-center animate-pulse"
        style={{
          fontFamily: "'Poppins', sans-serif",
          background: "linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "3px 3px 15px rgba(99, 179, 237, 0.7)",
        }}
      >
        Galeri Foto Spesial Kamu 💙
      </h1>

      {/* Grid foto */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 w-full max-w-6xl">
        {fotos.map((foto, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-3xl shadow-lg bg-white cursor-pointer hover:shadow-xl hover:shadow-blue-300 transition-all duration-500"
            onClick={() => toggleText(index)}
          >
            {/* Foto dengan scale saat hover */}
            <img
              src={foto.src}
              alt={`Foto ${index + 1}`}
              className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay teks muncul dengan animasi */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute inset-0 bg-blue-300 bg-opacity-70 flex items-center justify-center rounded-3xl"
                >
                  <p className="text-white text-center font-semibold px-4 text-sm md:text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {foto.teks}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
