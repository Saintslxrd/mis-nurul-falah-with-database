import type React from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { AdminHeader } from "@/components/admin-header"


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-amber-50">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Section */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <AdminHeader />

        {/* Konten Utama */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto w-full p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
