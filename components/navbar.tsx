"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const tentangSekolahItems = [
    { label: "Sejarah", href: "#" },
    { label: "Visi Misi", href: "#" },
    { label: "Struktur Organisasi", href: "#" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-[#FBFFE4] border-b border-[#FBFFE4]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/logo_sekolah.png" alt="MIS Nurul Falah Areman" width={50} height={50} className="w-12 h-12" />
            <span className="text-base font-bold text-green-700 hidden sm:block">MIS NURUL FALAH AREMAN</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-800 hover:text-green-700 font-medium transition-colors">Home</Link>

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 text-gray-800 hover:text-green-700 font-medium transition-colors"
              >
                Tentang Sekolah
                <ChevronDown size={18} className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-amber-50 border border-amber-200 rounded-lg shadow-lg overflow-hidden">
                  {tentangSekolahItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-6 py-3 text-gray-800 hover:bg-green-100 hover:text-green-700 font-medium transition-colors border-b border-amber-100 last:border-b-0"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/ppdb" className="text-gray-800 hover:text-green-700 font-medium transition-colors">PPDB</Link>
            <Link href="/berita" className="text-gray-800 hover:text-green-700 font-medium transition-colors">Berita</Link>
            <Link href="/galeri" className="text-gray-800 hover:text-green-700 font-medium transition-colors">Galeri</Link>
          </div>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Login Button */}
          <Button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-lg hidden md:block">
            Login
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="md:hidden flex flex-col gap-4 py-4">
            <Link href="/" className="text-gray-800 hover:text-green-700 font-medium">Home</Link>
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 text-gray-800 font-medium">
              Tentang Sekolah <ChevronDown className={`${isDropdownOpen ? "rotate-180" : ""}`} size={18} />
            </button>
            {isDropdownOpen && (
              <div className="ml-4 flex flex-col gap-2">
                {tentangSekolahItems.map((item) => (
                  <Link key={item.label} href={item.href} className="text-gray-800 hover:text-green-700 font-medium">
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/ppdb" className="text-gray-800 hover:text-green-700 font-medium">PPDB</Link>
            <Link href="/berita" className="text-gray-800 hover:text-green-700 font-medium">Berita</Link>
            <Link href="/galeri" className="text-gray-800 hover:text-green-700 font-medium">Galeri</Link>
            <Button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-4 py-2 rounded-lg w-fit">Login</Button>
          </div>
        )}
      </div>
    </nav>
  )
}