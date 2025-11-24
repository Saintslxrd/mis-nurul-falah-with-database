"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function AlumniSection() {
  const alumniList = [
    {
      id: 1,
      name: "Muhammad Rizki",
      university: "Universitas Gadjah Mada",
      testimonial:
        "Guru-guru yang penuh perhatian dan lingkungan sekolah yang positif membuat saya tumbuh dengan baik...",
       photo: "/alumni/profil.png",
    },
    {
      id: 2,
      name: "Jaka Sudrajad",
      university: "Universitas Indonesia",
      testimonial:
        "Tak terasa waktu berlalu begitu cepat. Dulu saya hanya anak SD yang penuh mimpi...",
      photo: "/alumni/profil.png",
    },
    {
      id: 3,
      name: "Siti Nurhaliza",
      university: "ITB Bandung",
      testimonial:
        "Pengalaman belajar di sekolah ini membentuk karakter dan semangat saya untuk terus maju...",
       photo: "/alumni/profil.png",
    },
  ]

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  // Auto slide seperti Ekskul
  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % alumniList.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [paused])

  const alumni = alumniList[index]

  return (
    <section className="bg-[#FBFFE4] py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[#1D8143] text-3xl md:text-4xl font-bold mb-10 text-center">
          Alumni Sekolah
        </h2>

        <div
          className="relative h-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={alumni.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white/90 rounded-2xl p-10 shadow-xl relative overflow-hidden"
            >
              {/* Logo Sekolah */}
              <div className="absolute top-6 right-6 w-20 h-20">
                <Image
                  src="/logo_sekolah.png"
                  alt="Logo"
                  width={80}
                  height={80}
                />
              </div>

              <div className="flex flex-col md:flex-row gap-10 items-start">
                {/* Foto */}
                <div className="w-56 h-72 rounded-2xl overflow-hidden shadow-md bg-gray-200">
                  <Image
                    src={alumni.photo}
                    alt={alumni.name}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {alumni.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-6">
                    <p className="text-lg text-gray-800 font-semibold">
                      {alumni.university}
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-justify">
                    {alumni.testimonial}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Pagination */}
        <div className="flex justify-center gap-3 mt-8">
          {alumniList.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === i ? "bg-[#1D8143] scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
