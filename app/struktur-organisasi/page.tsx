"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function StrukturOrganisasi() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-[#1D8144] py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Judul */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-12">
            STRUKTUR ORGANISASI SEKOLAH MIS NURUL FALAH AREMAN
          </h1>

          {/* Gambar Struktur Organisasi */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/struktur-organisasi/struktur.png" 
                alt="Struktur Organisasi Sekolah"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
