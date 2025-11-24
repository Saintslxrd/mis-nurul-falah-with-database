"use client"

import Image from "next/image"

export function StudentGrafik() {
  return (
    <section className="bg-amber-50 py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-[#1D8143] text-3xl md:text-4xl font-bold mb-10 text-center">
          Grafik Siswa Pertahun
        </h2>
        <div className="w-full flex justify-center">
          {/* Wrapper tambahan untuk membatasi lebar maksimal gambar agar tidak terlalu besar */}
          <div className="relative w-full max-w-4xl"> 
            <Image
              src="/grafik-siswa/image.png"
              alt="Grafik Penerimaan Siswa Baru Kelas 1"
              width={800}
              height={500}
              // 'object-contain' membantu menjaga rasio gambar agar tidak gepeng
              className="w-full h-auto rounded-lg shadow-md object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}