import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Untuk Kamu",
  description: "Website spesial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-pink-50">

        {/* NAVBAR */}
        <nav className="w-full bg-pink-400 text-white py-4 shadow-lg">
          <div className="flex justify-center gap-10 text-lg font-semibold">
            <Link href="/" className="hover:text-pink-200 transition">Home</Link>
            <Link href="/galeri" className="hover:text-pink-200 transition">Galeri</Link>
            <Link href="/tentang" className="hover:text-pink-200 transition">Tentang Dia</Link>
            <Link href="/ucapan" className="hover:text-pink-200 transition">Message for you</Link>
          </div>
        </nav>

        {/* AREA HALAMAN */}
        <div id="content">{children}</div>

      </body>
    </html>
  );
}
