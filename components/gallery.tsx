"use client"

import Image from "next/image"

export function GalleryGrid() {
  const galleryItems = [
    {
      id: 1,
      src: "/galleryGrid/1.png",
      alt: "Acara Purna Siswa",
    },
    {
      id: 2,
      src: "/galleryGrid/2.png",
      alt: "Siswa di halaman sekolah",
    },
    {
      id: 3,
      src: "/galleryGrid/3.png",
      alt: "Siswa dalam seragam kuning",
    },
    {
      id: 4,
      src: "/galleryGrid/4.png",
      alt: "Perayaan siswa",
    },
  ]

  return (
    

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
      {galleryItems.map((item) => (
        <div
          key={item.id}
          className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-video"
        >
          <Image
            src={item.src || "/placeholder.svg"}
            alt={item.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  )
}
