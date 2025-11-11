"use client"

import Image from "next/image"

export function StudentGrafik() {
  return (
    <section className="bg-amber-50 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          Grafik Siswa Pertahun
        </h2>
        <div className="w-full flex justify-center">
          {/* Wrapper tambahan untuk membatasi lebar maksimal gambar agar tidak terlalu besar */}
          <div className="relative w-full max-w-4xl"> 
            <Image
              src="/grafik-siswa/grafik.png"
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