"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const newsItems = [
  {
    id: 1,
    title: "Pelaksanaan PERSARI (Perkemahan Satu Hari)",
    date: "20–Oktober–2025",
    desc: "Kegiatan ini dilaksanakan oleh seluruh siswa dalam rangka melatih kemandirian dan kedisiplinan.",
    image: "/newsCarosel/1.png",
  },
  {
    id: 2,
    title: "Lomba OMI (Olimpiade Madrasah Indonesia) tingkat Provinsi",
    date: "15–Oktober–2025",
    desc: "Siswa-siswi MIS Nurul Falah mengikuti perlombaan tingkat provinsi dalam bidang akademik.",
    image: "/newsCarosel/2.png",
  },
  {
    id: 3,
    title: "Lomba Menghias Roti Tawar Bersama Choki-Choki",
    date: "22–Oktober–2025",
    desc: "Lomba menghias roti ini dilakukan oleh seluruh kelas 1 sampai 6 secara serempak.",
    image: "/newsCarosel/3.png",
  },
  {
    id: 4,
    title: "Lomba Menghias Roti Tawar Bersama Choki-Choki",
    date: "22–Oktober–2025",
    desc: "Kegiatan kreatif untuk mengasah motorik halus dan kreativitas siswa.",
    image: "/newsCarosel/4.png",
  },
]

export function NewsCarousel() {
  const [selectedNews, setSelectedNews] = useState<any>(null)

  return (
    <section className="bg-[#1D8143] py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Berita Sekolah
        </h2>

        {/* Grid Berita */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => setSelectedNews(item)}
            >
              <div className="overflow-hidden bg-white rounded-lg shadow-md">
                <div className="relative aspect-square">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <p className="text-white text-center mt-3 font-medium text-sm md:text-base">
                {item.title}
                {item.date}
                
              </p>
              <p className="text-white text-center mt-3 font-medium text-sm md:text-base">
                {item.date}
              </p>
              <p className="text-white text-center mt-3 font-medium text-sm md:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* === MODAL SESUAI DESAIN === */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNews(null)}
          >
            <motion.div
              className="relative bg-[#1D8143] rounded-2xl overflow-hidden shadow-2xl max-w-lg w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* GAMBAR (OBJECT-CONTAIN seperti desain) */}
              <div className="relative w-full bg-white p-4 flex justify-center rounded-b-none">
                <div className="relative w-full max-w-md aspect-4/5 rounded-xl overflow-hidden shadow">
                  <Image
                    src={selectedNews.image}
                    alt={selectedNews.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* TEKS DESKRIPSI BERITA */}
              <div className="p-6 text-center text-white">
                <h3 className="text-xl font-bold">{selectedNews.title}</h3>
                <p className="text-sm opacity-90 mt-1">{selectedNews.date}</p>

                <p className="mt-5 leading-relaxed text-base">
                  {selectedNews.desc}
                </p>
              </div>

              {/* TOMBOL CLOSE */}
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-3 right-3 bg-white/90 text-black rounded-full w-9 h-9 flex items-center justify-center font-bold shadow-md hover:bg-white"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
