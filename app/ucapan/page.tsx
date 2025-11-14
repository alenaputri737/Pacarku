"use client";

import { motion } from "framer-motion";

export default function Ucapan() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-50">

      {/* Judul */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-12"
        style={{
          fontFamily: "'Poppins', sans-serif",
          background: "linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "2px 2px 10px rgba(96, 165, 250, 0.4)",
        }}
      >
        Ucapan 💙
      </motion.h1>

      {/* Kotak ucapan */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl bg-white/70 backdrop-blur-md shadow-xl rounded-3xl p-10 border border-blue-200"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Long lifee yaaaa,,semangatt terus kuliah nya mwhewhhehe,,semoga kamu mempunyai alasan untuk kuat dann semangatt
          untuk menjalani hari walaupun seberat apapunnn tetep semangatt yaaaaa,,ayah ibu sama adekmu itu menjadi alasanmu untuk hidup lebih lama
          siapa sihh yang gamau bahagiaiin ortu sama adek wkwkwkw,,,,lovvyouuu
        </p>

        <p className="text-blue-600 text-lg leading-relaxed mb-4">
          Semoga kamu suka yaaa sama website ini walau ga karuann siiee wwkkwkwkkkwkwkw 
        </p>

        <p className="text-gray-800 text-lg font-semibold text-right">
          – By <span className="text-pink-500">alenn imup</span> 
        </p>
      </motion.div>
    </div>
  );
}
