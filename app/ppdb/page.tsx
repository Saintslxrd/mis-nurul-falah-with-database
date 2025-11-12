"use client"

import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import BrosurSlider from "@/components/brosurSlider"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

export default function PpdbPage() {
  const posters = [
    "/ppdb/luar-ppdb.png",
    "/ppdb/luar-ppdb-1.png",
    "/ppdb/luar-ppdb-2.png",
    "/ppdb/luar-ppdb-1.png",
  ]

  return (
    <>
      <Navbar />

      {/* === BAGIAN JUDUL === */}
      <section className="bg-[#1D8143] text-center py-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-wide">
          PENERIMAAN PESERTA DIDIK BARU <br />
          <span className="text-white font-semibold">MIS NURUL FALAH AREMAN</span>
        </h1>
      </section>

      {/* === BAGIAN UTAMA === */}
      <main className="bg-[#1D8143] min-h-screen py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          {/* === POSTER SLIDER === */}
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
            >
              {posters.map((src, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                    <Image
                      src={src}
                      alt={`Poster PPDB ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* === SYARAT PENDAFTARAN === */}
          <div className="bg-[#FFF9E8] rounded-xl p-8 shadow-lg">
            <h2 className="text-[#1D8143] text-2xl md:text-3xl font-bold mb-6">
              Syarat Pendaftaran Murid Baru
            </h2>

            <ul className="text-[#1D8143] space-y-2 text-base leading-relaxed list-decimal pl-5">
              <li> Mengisi Formulir Pendaftaran </li>
              <li> Fotokopi ijazah atau surat kelulusan terakhir </li>
              <li> Fotokopi Kartu Keluarga dan Akta Kelahiran </li>
              <li> Pas foto ukuran 3x4 (1 lembar) </li>
              <li> Usia minimal 6 tahun (di bulan Juli) </li>
            </ul>

            <div className="flex flex-wrap gap-3 mt-8">
              <button className="bg-[#1D8143] hover:bg-[#166a36] text-white font-medium px-5 py-2 rounded-lg transition">
                Download Formulir
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-5 py-2 rounded-lg transition">
                Download Panduan Pembayaran
              </button>
            </div>
          </div>
        </div>

        {/* Tambahan Slider Brosur di bawah */}
        <div className="mt-20">
          <BrosurSlider />
        </div>
      </main>

      <Footer />
    </>
  )
}
