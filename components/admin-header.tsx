"use client"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export function AdminHeader() {
  const router = useRouter()

  const handleLogout = () => {
    const confirmLogout = window.confirm("Apakah Anda yakin ingin logout?")

    if (confirmLogout) {
      router.push("/")
    }
  }

  return (
    <header className="bg-white border-b-2 border-green-700 px-8 py-4 flex items-center justify-between">
      <h2 className="text-2xl font-bold text-green-700">Admin Dashboard</h2>
      <Button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </Button>
    </header>
  )
}
