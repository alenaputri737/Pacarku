"use client";

import { motion } from "framer-motion";

export default function Tentang() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-50">

      {/* Judul */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-10"
        style={{
          fontFamily: "'Poppins', sans-serif",
          background: "linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "2px 2px 12px rgba(96, 165, 250, 0.4)",
        }}
      >
        Tentang Kamu 💙
      </motion.h1>

      {/* Kotak paragraf */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl bg-white/60 backdrop-blur-md shadow-xl rounded-3xl p-8 border border-blue-200"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <p className="text-gray-700 text-lg leading-relaxed">
          Haiiiiiii, kenalin… namanya <span className="font-semibold text-blue-600">Rendra Yudha Syahputra</span>.  
          Namanyaaa bagusss sekaliii, apalagi orangnyaaa cakeeppp bangettt 🩵  
          Tepat di tanggal <span className="font-semibold">22 Januari 2005</span> dia lahir… nah itu pun aku belumm lahir wkwkwk.

          <br /><br />

          Aku sama dia beda 4 tahun.  
          Sekarang dia duduk di bangku kuliah, dan aku?? yappp aku masih duduk di bangku SMK.

          <br /><br />

          Aku bisa ketemu dia yaa karena iseng main anonymous chat wkwkkw.  
          Dia ngaku tinggal di Jawa Tengah padahal dia itu dulu kakak kelasku di SMP heheh.

          <br /><br />

          Intinya aku bahagiaaa banget bisa sama dia…  
          Gatau juga dia bahagia apa engga sama aku 😭💙

          <br /><br />

          Dulu di Agustus 2024 kita sempet asing karena egoku yang ketinggian dan aku coba buka hati untuk orang baru.  
          Tapi semuanya ngga masuk di tipeku.  
          Aku nyari sosok dia di diri orang lain—ternyata ngga ada.  
          Karena apa?  
          Yapp betul… **Rendra cuma satu dan itu cuma dia.**

          <br /><br />

          Aku mulai percaya sama kata:  
          <span className="italic text-blue-600">
            “Setiap orang ada masanya, namun kalau masanya habis, ya sudah… tertutup bersama orangnya.”
          </span>

          <br /><br />

          Dannn sekarang masa itu kembali lagi.  
          Betapa bahagianya aku.  
          Rasanya kaya balik ke butterfly era—lebih banyak ketawa dan bahagia saat kamu ada di hidupku.

          <br /><br />

          Semoga kamu ngga pernah lupain aku ya sayang.  
          Maaf kalau aku agak alayy, soalnya emang aku sayang banget sama kamu wkwkwk.

          <br /><br />

          Semua chat kamu masih tersimpan rapi di HPku.  
          Semoga masa kita bertahan selamanya yaaa sayanggg 💙✨
        </p>
      </motion.div>
    </div>
  );
}
