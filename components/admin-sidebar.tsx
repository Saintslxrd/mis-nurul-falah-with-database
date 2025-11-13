"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { BookOpen, Users, FileText, Images, Radiation as Graduation, BarChart3, LayoutDashboard } from "lucide-react"

const menuItems = [
  { label: "Visi & Misi", href: "/admin", icon: LayoutDashboard },
  { label: "Struktur Guru", href: "/admin/guru", icon: Users },
  { label: "PPDB", href: "/admin/ppdb", icon: FileText },
  { label: "Berita", href: "/admin/berita", icon: BookOpen },
  { label: "Galeri", href: "/admin/galeri", icon: Images },
  { label: "Alumni", href: "/admin/alumni", icon: Graduation },
  { label: "Grafik Murid", href: "/admin/grafik", icon: BarChart3 },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-green-700 text-white flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b-2 border-green-600">
      <div className="bg-white rounded-xl p-4 mb-4 flex items-center justify-center">
        <div className="relative w-16 h-16">
          <Image
            src="/logo_sekolah.png"
            alt="Logo MIS Nurul Falah Areman"
            fill
            className="object-contain rounded-lg"
            priority
          />
        </div>
      </div>
      <h1 className="text-lg font-bold text-center text-white">Admin Panel</h1>
      <p className="text-sm text-center text-green-100 mt-1">MIS NURUL FALAH AREMAN</p>
    </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-8 space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                isActive ? "bg-white text-green-700 shadow-lg" : "text-green-100 hover:bg-green-600"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Admin Profile */}
      <div className="p-4 border-t-2 border-green-600">
        <div className="bg-green-600 rounded-lg p-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center font-bold text-green-700 mb-3">
            AD
          </div>
          <p className="font-semibold text-white">Admin</p>
          <p className="text-xs text-green-100">Administrator</p>
        </div>
      </div>
    </aside>
  )
}
