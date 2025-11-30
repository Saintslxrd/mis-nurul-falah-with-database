"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import BrosurSlider from "@/components/brosurSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function PpdbPage() {
  const [info, setInfo] = useState<any>(null);
  const [posters, setPosters] = useState<string[]>([]);

  // === AMBIL DATA PDF FORMULIR & PANDUAN DARI BACKEND ===
  useEffect(() => {
    fetch("/api/ppdb-file")
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((err) => console.error("Gagal fetch info:", err));
  }, []);

  // === AMBIL POSTER PPDB DARI BACKEND ===
  const fetchPosters = async () => {
  try {
    const res = await fetch("/api/ppdb");
    const json = await res.json();

    console.log("RESPON /api/ppdb:", json);

    // cek apakah data array
    const list = Array.isArray(json.data) ? json.data : [];

    // ambil url poster
    const urls = list.map((item: any) => item.foto_poster);

    setPosters(urls);

  } catch (error) {
    console.error("Gagal memuat poster:", error);
  }
};

  useEffect(() => {
    fetchPosters();
  }, []);

  return (
    <>
      <Navbar />

      {/* === BAGIAN JUDUL === */}
      <section className="bg-[#1D8143] text-center py-6 px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug">
          PENERIMAAN PESERTA DIDIK BARU
          <br />
          <span className="text-white font-semibold text-lg sm:text-xl">
            MIS NURUL FALAH AREMAN
          </span>
        </h1>
      </section>

      {/* === BAGIAN UTAMA === */}
      <main className="bg-[#1D8143] min-h-screen py-10 md:py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* === POSTER SLIDER === */}
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop
            >
              {posters.length > 0 ? (
                posters.map((src, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative w-full aspect-3/4 rounded-lg overflow-hidden">
                      <Image
                        src={src}
                        alt={`Poster PPDB ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <div className="text-center text-gray-500 py-10">
                  Poster belum tersedia
                </div>
              )}
            </Swiper>
          </div>

          {/* === SYARAT PENDAFTARAN === */}
          <div className="bg-[#FFF9E8] rounded-xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-[#1D8143] text-2xl md:text-3xl font-bold mb-5">
              Syarat Pendaftaran Murid Baru
            </h2>

            <ul className="text-[#1D8143] space-y-2 text-sm sm:text-base leading-relaxed list-decimal pl-5">
              <li>Mengisi Formulir Pendaftaran</li>
              <li>Fotokopi ijazah atau surat kelulusan terakhir</li>
              <li>Fotokopi Kartu Keluarga dan Akta Kelahiran</li>
              <li>Pas foto ukuran 3x4 (1 lembar)</li>
              <li>Usia minimal 6 tahun (di bulan Juli)</li>
            </ul>

            {/* === TOMBOL DOWNLOAD FORMULIR & PANDUAN === */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8">

              {/* FORMULIR */}
              <button
                disabled={!info?.formulirUrl}
                onClick={() => window.open(info?.formulirUrl, "_blank")}
                className={`px-5 py-2 rounded-lg font-medium w-full sm:w-auto
                  ${
                    info?.formulirUrl
                      ? "bg-[#1D8143] hover:bg-[#166a36] text-white"
                      : "bg-gray-300 text-gray-400 cursor-not-allowed"
                  }
                `}
              >
                Download Formulir
              </button>

              {/* PANDUAN */}
              <button
                disabled={!info?.panduanUrl}
                onClick={() => window.open(info?.panduanUrl, "_blank")}
                className={`px-5 py-2 rounded-lg font-medium w-full sm:w-auto
                  ${
                    info?.panduanUrl
                      ? "bg-gray-200 hover:bg-gray-300 text-gray-700"
                      : "bg-gray-300 text-gray-400 cursor-not-allowed"
                  }
                `}
              >
                Download Panduan Pembayaran
              </button>

            </div>
          </div>
        </div>

        {/* === SLIDER BROSUR === */}
        <div className="mt-16">
          <BrosurSlider />
        </div>
      </main>

      <Footer />
    </>
  );
}
