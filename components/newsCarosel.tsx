"use client"

import Image from "next/image"

const newsItems = [
  {
    id: 1,
    title: "Pelaksanaan PERSARI (Perkemahan Satu Hari)",
    image: "/newsCarosel/1.png",
  },
  {
    id: 2,
    title: "Lomba OMI (Olimpiade Madrasah Indonesia) tingkat Provinsi",
    image: "/newsCarosel/2.png",
  },
  {
    id: 3,
    title: "Lomba Menghias Roti Tawar Bersama Choki-Choki",
    image: "/newsCarosel/3.png",
  },
  {
    id: 4,
    title: "Lomba Menghias Roti Tawar Bersama Choki-Choki",
    image: "/newsCarosel/4.png",
  },
]

export function NewsCarousel() {
  return (
    <section className="bg-green-700 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Berita Sekolah
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {newsItems.map((item) => (
            <div key={item.id}>
              <div className="rounded-xl overflow-hidden bg-white shadow-md">
                <div className="relative aspect-square">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-white text-center mt-3 font-medium text-sm md:text-base">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
