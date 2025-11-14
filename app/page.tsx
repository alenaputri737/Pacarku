"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [glow, setGlow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setGlow((prev) => !prev), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-50 py-16 px-4">

      {/* Judul besar dan dekoratif */}
      <motion.h1
        className="text-7xl md:text-8xl font-extrabold text-center mb-16 leading-tight"
        style={{
          fontFamily: "'Poppins', sans-serif",
          background: glow
            ? "linear-gradient(90deg, #60a5fa, #3b82f6, #93c5fd)"
            : "linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "3px 3px 15px rgba(96, 165, 250, 0.5)",
          transition: "all 0.5s ease-in-out",
        }}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        HAII SAYANGGGKUUU 💖
      </motion.h1>

      {/* Kotak paragraf tunggal */}
      <motion.div
        className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-12 max-w-4xl w-full text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Semoga suka yaaa sayanggggg samaaaaaa website sederhana ini 🌸
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Halaman ke Halaman memiliki makna dan rasa cintaku ke kamu mwhehe 😘
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Semoga sukaaaa dengan website ini yaaaaa, jangan dihapus aku susah buatnya mwhehe 💕
        </p>
      </motion.div>
    </div>
  );
}
