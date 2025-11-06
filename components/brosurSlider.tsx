"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

export default function BrosurSlider() {
  const brosurList = [
    {
      id: 1,
      image: "/brosur/brosur1.png",
      alt: "Syarat pendaftaran",
    },
    {
      id: 2,
      image: "/brosur/brosur2.png",
      alt: "Ekstrakurikuler",
    }
    
  ]

  return (
    <section className="bg-[#FBFFE4] py-10 flex justify-center">
      <div className="max-w-5xl w-full px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          {brosurList.map((brosur) => (
            <SwiperSlide key={brosur.id}>
              <img
                src={brosur.image}
                alt={brosur.alt}
                className="w-full h-auto object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
