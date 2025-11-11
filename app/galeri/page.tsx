"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import BrosurSlider from "@/components/brosurSlider"
import { motion, AnimatePresence } from "framer-motion"

export default function GaleriPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galeriData = [
    {
      id: 1,
      title: "Pawai Marhaban Ya Ramadhan",
      date: "22–Oktober–2025",
      image: "/galeri/2.png",
    },
    {
      id: 2,
      title: "Foto Guru–guru setelah Pawai",
      date: "22–Oktober–2025",
      image: "/galeri/3.png",
    },
    {
      id: 3,
      title: "Taman Mini Indonesia",
      date: "22–Oktober–2025",
      image: "/galeri/1.png",
    },
    {
      id: 4,
      title: "Taman Mini Indonesia",
      date: "22–Oktober–2025",
      image: "/galeri/4.png",
    },
    {
      id: 5,
      title: "Sambutan Kepala Sekolah",
      date: "22–Oktober–2025",
      image: "/galeri/5.png",
    },
    {
      id: 6,
      title: "Penampilan Seni Tari",
      date: "22–Oktober–2025",
      image: "/galeri/6.png",
    },
    {
      id: 7,
      title: "Foto bersama Guru–guru",
      date: "22–Oktober–2025",
      image: "/galeri/7.png",
    },
    {
      id: 8,
      title: "Pengetesan BTQ",
      date: "22–Oktober–2025",
      image: "/galeri/8.png",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#1D8144]">
        <section className="py-12 md:py-16 px-6">
          <div className="max-w-7xl mx-auto text-white">
            {/* Judul */}
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-wide">
              GALERI MIS NURUL FALAH AREMAN
            </h1>

            {/* Grid Galeri */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {galeriData.map((item) => (
                <div
                  key={item.id}
                  className="text-left cursor-pointer"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full aspect-4/3 rounded-lg overflow-hidden shadow-lg"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </motion.div>
                  <h2 className="text-white text-base font-semibold mt-3 mb-1">
                    {item.title}
                  </h2>
                  <p className="text-gray-200 text-sm">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <BrosurSlider />
      <Footer />

      {/* Modal Preview Gambar */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Image
                src={selectedImage}
                alt="Preview Gambar"
                width={900}
                height={600}
                className="rounded-lg object-contain max-h-[90vh] max-w-[90vw]"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-md"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
