import { Facebook, Twitter, Instagram, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-green-800 py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Kotak utama krem */}
        <div className="bg-[#F9FAE5] rounded-3xl p-8 md:p-10 shadow-lg border border-blue-200">
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            
            {/* === KIRI: Logo + Alamat === */}
            <div className="space-y-4 max-w-sm">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 shrink-0 flex items-center justify-center">
                  <img src="/logo_sekolah.png" alt="logo" className="w-20 h-20 object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-green-800 text-lg">MIS NURUL FALAH</h3>
                  <p className="text-[13px] text-gray-700 leading-relaxed">
                    Jl. Menpor Palsigunung No.24, RT.1/ RW.007, Tugu, Kec. Cimanggis, Kota Depok,
                    Jawa Barat 16451
                  </p>
                </div>
              </div>
            </div>

            {/* === KANAN: Navigasi & Medsos === */}
            <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
              {/* Navigasi */}
              <nav className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-8 gap-y-4">
                <a href="#" className="font-semibold text-gray-800 hover:text-green-800">Home</a>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Tentang Sekolah</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="text-sm text-gray-700 hover:text-green-800">Sejarah</a></li>
                    <li><a href="#" className="text-sm text-gray-700 hover:text-green-800">Visi Misi</a></li>
                    <li><a href="#" className="text-sm text-gray-700 hover:text-green-800">Struktur organisasi</a></li>
                  </ul>
                </div>

                <a href="#" className="font-semibold text-gray-800 hover:text-green-800">PPDB</a>
                <a href="#" className="font-semibold text-gray-800 hover:text-green-800">Berita</a>
                <a href="#" className="font-semibold text-gray-800 hover:text-green-800">Galeri</a>
              </nav>

              {/* Medsos */}
              <div className="flex items-start gap-3 mt-4 md:mt-0">
                <a href="#" className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-green-700 hover:text-white transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-green-700 hover:text-white transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-green-700 hover:text-white transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* === GARIS BAWAH: Kontak === */}
          <div className="mt-10 flex flex-col sm:flex-row gap-6 sm:items-center">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-700" />
              <span className="text-sm text-gray-800">0823-3356-5615</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-700" />
              <span className="text-sm text-gray-800">lorem ipsum</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
