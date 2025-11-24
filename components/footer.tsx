import { Facebook, Youtube, Instagram, Phone, Mail } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1D8143] py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* KOTAK UTAMA */}
        <div className="bg-[#F9FAE5] rounded-3xl p-6 md:p-10 shadow-lg">
          <div className="flex flex-col lg:flex-row justify-between gap-10">

            {/* === BAGIAN 1: LOGO + ALAMAT === */}
            <div className="flex flex-col gap-4 max-w-sm">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0">
                  <img
                    src="/logo_sekolah.png"
                    alt="Logo MIS Nurul Falah"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[#1D8143] text-lg sm:text-xl">
                    MIS NURUL FALAH
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mt-2">
                    Jl. Menpor Areman No.24, RT.1/ RW.007, Tugu, Kec.
                    Cimanggis, Kota Depok, Jawa Barat 16451
                  </p>
                </div>
              </div>
            </div>

            {/* === BAGIAN 2: NAVIGASI + MEDSOS === */}
            <div className="flex flex-col md:flex-row gap-8 lg:gap-16 w-full lg:w-auto">

              {/* GRID NAVIGASI */}
              <div className="grid grid-cols-2 md:flex md:gap-12 gap-y-8 w-full">

                {/* NAV 1 */}
                <div className="flex flex-col gap-3">
                  <h4 className="font-bold text-[#1D8143]">Menu Utama</h4>
                  <nav className="flex flex-col gap-2">
                    <Link href="/" className="text-gray-700 hover:text-[#1D8143] transition-colors w-fit">Home</Link>
                    <Link href="/ppdb" className="text-gray-700 hover:text-[#1D8143] transition-colors w-fit">PPDB</Link>
                    <Link href="/berita" className="text-gray-700 hover:text-[#1D8143] transition-colors w-fit">Berita</Link>
                    <Link href="/galeri" className="text-gray-700 hover:text-[#1D8143] transition-colors w-fit">Galeri</Link>
                  </nav>
                </div>

                {/* NAV 2 */}
                <div className="flex flex-col gap-3">
                  <h4 className="font-bold text-[#1D8143]">Tentang Sekolah</h4>
                  <nav className="flex flex-col gap-2">
                    <Link href="/sejarah-sekolah" className="text-gray-700 hover:text-[#1D8143] transition-colors w-fit">Sejarah</Link>
                    <Link href="/visi-misi" className="text-gray-700 hover:text-[#1D8143] transition-colors w-fit">Visi Misi</Link>
                    <Link href="/struktur-organisasi" className="text-gray-700 hover:text-[#1D8143] transition-colors w-fit">Struktur Organisasi</Link>
                  </nav>
                </div>
              </div>

              {/* MEDSOS */}
              <div className="flex flex-col gap-3 shrink-0">
                <h4 className="font-bold text-[#1D8143] hidden md:block">Ikuti Kami</h4>

                <div className="flex items-center gap-3">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/profile.php?id=61562167564038"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center 
                               text-gray-600 hover:bg-[#1D8143] hover:text-white hover:border-[#1D8143] transition-all"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@misnurulfalahareman5287"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Youtube"
                    className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center 
                               text-gray-600 hover:bg-[#1D8143] hover:text-white hover:border-[#1D8143] transition-all"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/misnurulfalahareman/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center 
                               text-gray-600 hover:bg-[#1D8143] hover:text-white hover:border-[#1D8143] transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>

                  {/* TikTok — tinggal ganti link! */}
                  <a
                    href="https://www.tiktok.com/@misnurulfalahareman?_r=1&_t=ZS-91GsFjVTqfY"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center 
                               text-gray-600 hover:bg-[#1D8143] hover:text-white hover:border-[#1D8143] transition-all"
                  >
                    <FaTiktok className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* === GARIS BAWAH : KONTAK === */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8">

            <a
              href="tel:082333565615"
              className="flex items-center gap-2 text-gray-700 hover:text-[#1D8143] transition-colors w-fit"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">0823-3356-5615</span>
            </a>

            <a
              href="mailto:minurulfalahareman@gmail.com"
              className="flex items-center gap-2 text-gray-700 hover:text-[#1D8143] transition-colors w-fit"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium break-all sm:break-normal">
                minurulfalahareman@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
