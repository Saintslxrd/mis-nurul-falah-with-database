"use client"

export function MapsSection() {
  return (
    <section className="bg-[#1D8143] py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Judul */}
        <h2 className="text-[#FBFFE4] text-3xl md:text-4xl font-bold mb-10 text-center">
          Google Maps Sekolah
        </h2>

        {/* Container Map */}
        <div className="bg-[#FBFFE4] rounded-2xl overflow-hidden shadow-lg p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.285377498203!2d106.84972251113928!3d-6.357094693606337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed0027b3333d%3A0x19bd9b9960d64b93!2sMIS%20Nurul%20Falah%20Areman!5e0!3m2!1sid!2sid!4v1762823455425!5m2!1sid!2sid"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-lg"
          />
        </div>

        {/* Info Lokasi Sekolah */}
        <div className="mt-6 bg-white rounded-lg p-4 shadow text-center">
          <p className="text-gray-800 font-medium leading-relaxed">
            📍 MIS NURUL FALAH AREMAN <br />
            Jl. Menpor Areman No.24, RT.1/RW.007, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16451
          </p>

        </div>
      </div>
    </section>
  )
}
