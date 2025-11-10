"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import BrosurSlider from "@/components/brosurSlider"
import { motion, AnimatePresence } from "framer-motion"

export default function BeritaPage() {
  const [selectedImage, setSelectedImage] = useState(null)

  const beritaData = [
    {
      id: 1,
      title: "Lomba menghias Roti Tawar bersama Choki-choki",
      date: "22–Oktober–2025",
      image: "/berita/choki-choki.png",
      width: 310,
      height: 388,
    },
    {
      id: 2,
      title: "Pelaksanaan PERSARI (Perkemahan Satu Hari)",
      date: "22–Oktober–2025",
      image: "/berita/persari.png",
      width: 310,
      height: 388,
    },
    {
      id: 3,
      title: "Pelaksanaan Asesmen Nasional Berbasis Komputer",
      date: "22–Oktober–2025",
      image: "/berita/anbk.png",
      width: 388,
      height: 388,
    },
    {
      id: 4,
      title: "Field Trip KIDZANIA",
      date: "22–Oktober–2025",
      image: "/berita/kidzania.png",
      width: 274,
      height: 388,
    },
    {
      id: 5,
      title: "Maulid Nabi Muhammad SAW",
      date: "22–Oktober–2025",
      image: "/berita/maulid.png",
      width: 552,
      height: 276,
    },
    {
      id: 6,
      title: "Field Trip KIDZANIA",
      date: "22–Oktober–2025",
      image: "/berita/fieldTrip.png",
      width: 274,
      height: 388,
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#1D8144]">
        <section className="py-12 md:py-16 px-6">
          <div className="max-w-6xl mx-auto text-white">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-wide">
              BERITA MIS NURUL FALAH AREMAN
            </h1>

            {/* Grid Berita */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {beritaData.map((item) => (
                <div
                  key={item.id}
                  className="text-center flex flex-col items-center cursor-pointer"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={item.width}
                      height={item.height}
                      className="h-auto w-auto max-w-full rounded-lg shadow-lg object-contain"
                    />
                  </motion.div>
                  <h2 className="text-white text-lg font-medium mt-4 mb-1 max-w-xs mx-auto">
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

      {/* Modal Gambar Fullscreen */}
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
