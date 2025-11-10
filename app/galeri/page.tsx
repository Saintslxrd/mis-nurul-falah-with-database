"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import BrosurSlider from "@/components/brosurSlider"

export default function GaleriPage() {
  const galeriData = [
    {
      id: 1,
      title: "Pawai Marhaban Ya Ramadhan",
      date: "22–Oktober–2025",
      image: "/galeri/pawai.png",
    },
    {
      id: 2,
      title: "Foto Guru–guru setelah Pawai",
      date: "22–Oktober–2025",
      image: "/galeri/guru-pawai.png",
    },
    {
      id: 3,
      title: "Taman Mini Indonesia",
      date: "22–Oktober–2025",
      image: "/galeri/tmii1.png",
    },
    {
      id: 4,
      title: "Taman Mini Indonesia",
      date: "22–Oktober–2025",
      image: "/galeri/tmii2.png",
    },
    {
      id: 5,
      title: "Sambutan Kepala Sekolah",
      date: "22–Oktober–2025",
      image: "/galeri/sambutan.png",
    },
    {
      id: 6,
      title: "Penampilan Seni Tari",
      date: "22–Oktober–2025",
      image: "/galeri/seni-tari.png",
    },
    {
      id: 7,
      title: "Foto bersama Guru–guru",
      date: "22–Oktober–2025",
      image: "/galeri/guru-bersama.png",
    },
    {
      id: 8,
      title: "Pengetesan BTQ",
      date: "22–Oktober–2025",
      image: "/galeri/btq.png",
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
                  className="bg-[#1D8144] text-left"
                >
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
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
    </>
  )
}
