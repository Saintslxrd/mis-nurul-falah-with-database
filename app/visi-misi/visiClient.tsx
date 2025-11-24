"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import BrosurSlider from "@/components/brosurSlider"



export default function VisiMisiPage({ visiMisiData }: any) {
   const data = visiMisiData[0]
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#1D8144]">
        <section className="py-12 md:py-16 px-6">
          <div className="max-w-5xl mx-auto text-white">
            
            {/* Judul */}
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-wide">
              VISI & MISI MIS NURUL FALAH AREMAN
            </h1>

            {/* Gambar Gedung */}
            <div className="w-full mb-10">
              <Image
                src="/sejarah/image.png"
                alt="Gedung MIS Nurul Falah Areman"
                width={1000}
                height={500}
                className="w-full h-auto rounded-2xl object-cover"
                priority
              />
            </div>

            {/* Visi */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">VISI</h2>
              <p className="text-lg leading-relaxed">
                 {data.visi}
              </p>
            </div>

            {/* Misi */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Misi</h2>
              <ol className="list-decimal list-inside space-y-2 text-lg leading-relaxed">
                {data.misi.split("\n").map((misiItem: string, index: number) => (
                <li key={index}>{misiItem.replace(/^\d+\.\s*/, "")}</li>
              ))}
              </ol>
            </div>
          </div>
        </section>
      </main>

      <BrosurSlider />
      <Footer />
    </>
  )
}
