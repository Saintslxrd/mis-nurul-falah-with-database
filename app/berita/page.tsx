"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import BrosurSlider from "@/components/brosurSlider"
import { motion, AnimatePresence } from "framer-motion"

interface BeritaItem {
  id: number
  judul: string
  isi: string
  gambar: string
  tanggal_upload: string
}

export default function BeritaPage() {
  const [berita, setBerita] = useState<BeritaItem[]>([])
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const res = await fetch("/api/berita")
        // Jika API salah route/error (bukan JSON): tampilkan log isi response
        if (!res.ok) {
          const msg = await res.text()
          console.error("HTTP error", res.status, msg)
          return
        }
        // Ambil data langsung sebagai JSON
        const data = await res.json()
        setBerita(data)
      } catch (error) {
        console.error("Gagal memuat berita:", error)
      }
    }
    fetchBerita()
  }, [])

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#1D8144]">
        <section className="py-12 md:py-16 px-6">
          <div className="max-w-6xl mx-auto text-white">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-wide">
              BERITA MIS NURUL FALAH AREMAN
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {berita.map((item) => (
                <div
                  key={item.id}
                  className="text-center flex flex-col items-center cursor-pointer"
                  onClick={() => setSelectedImage(item.gambar)}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={item.gambar}
                      alt={item.judul}
                      width={350}
                      height={350}
                      className="h-auto w-auto max-w-full rounded-lg shadow-lg object-contain"
                    />
                  </motion.div>
                  <h2 className="text-white text-lg font-medium mt-4 mb-1 max-w-xs mx-auto">
                    {item.judul}
                  </h2>
                  <p className="text-gray-200 text-sm">
                    {new Date(item.tanggal_upload).toLocaleDateString("id-ID")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <BrosurSlider />
      <Footer />
      {/* Modal Gambar */}
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
                alt="Preview"
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
