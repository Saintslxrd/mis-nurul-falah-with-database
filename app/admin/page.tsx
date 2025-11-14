"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Trash2, Edit2, Upload } from "lucide-react"

interface VisiMisiItem {
  id: number
  visi: string
  misi: string
}

export default function AdminDashboard() {
  const [visiMisiData, setVisiMisiData] = useState<VisiMisiItem[]>([
    {
      id: 1,
      visi: "Terwujudnya Madrasah yang Dinamis, Unggul dalam Akademis, berwawasan IMTAQ dan IPTEK, serta Berakhlakul Karimah",
      misi: "1. Mendidik siswa agar memiliki Akhlakul Karimah\n2. Mendidik siswa agar memiliki keterampilan yang berwawasan IMTAQ dan IPTEK\n3. Membina agar memiliki daya Kreativitas, Dinamis dan Inovatif",
    },
  ])

  const [visiInput, setVisiInput] = useState("")
  const [misiInput, setMisiInput] = useState("")
  const [editingId, setEditingId] = useState<number | null>(null)

  const handleUpload = () => {
    if (visiInput.trim() || misiInput.trim()) {
      if (editingId) {
        setVisiMisiData(
          visiMisiData.map((item) => (item.id === editingId ? { ...item, visi: visiInput, misi: misiInput } : item)),
        )
        setEditingId(null)
      } else {
        setVisiMisiData([
          ...visiMisiData,
          {
            id: Date.now(),
            visi: visiInput,
            misi: misiInput,
          },
        ])
      }
      setVisiInput("")
      setMisiInput("")
    }
  }

  const handleEdit = (item: VisiMisiItem) => {
    setVisiInput(item.visi)
    setMisiInput(item.misi)
    setEditingId(item.id)
  }

  const handleDelete = (id: number) => {
    setVisiMisiData(visiMisiData.filter((item) => item.id !== id))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b-4 border-[#1D8143] pb-4">
        <h1 className="text-3xl font-bold text-[#1D8143] mb-2">Visi & MISI</h1>
        <div className="h-1 bg-[#1D8143] w-full"></div>
      </div>

      {/* Input Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-[#1D8143] mb-2">Visi</label>
          <textarea
            value={visiInput}
            onChange={(e) => setVisiInput(e.target.value)}
            placeholder="Masukkan Visi Sekolah"
            className="w-full p-4 border-2 border-green-200 rounded-lg focus:outline-none focus:border-[#1D8143] min-h-32 resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#1D8143] mb-2">MISI</label>
          <textarea
            value={misiInput}
            onChange={(e) => setMisiInput(e.target.value)}
            placeholder="Masukkan MISI Sekolah"
            className="w-full p-4 border-2 border-green-200 rounded-lg focus:outline-none focus:border-[#1D8143] min-h-32 resize-none"
          />
        </div>
      </div>

      {/* Upload Button */}
      <div className="flex justify-end">
        <Button
          onClick={handleUpload}
          className="bg-[#1D8143] text-white px-8 py-2 rounded-lg font-semibold flex items-center gap-2"
        >
          <Upload className="w-4 h-4" />
          {editingId ? "Update" : "Upload"}
        </Button>
      </div>

      {/* Display Section */}
      <div className="border-t-4 border-[#1D8143] pt-6">
        <div className="border-b-4 border-[#1D8143] pb-4 mb-6">
          <h2 className="text-2xl font-bold text-[#1D8143]">Visi & MISI</h2>
        </div>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-3 gap-4 bg-[#1D8143] text-white p-4 rounded-t-lg font-semibold mb-4">
          <div>Visi</div>
          <div>Misi</div>
          <div>Aksi</div>
        </div>

        {/* Table Data */}
        <div className="space-y-4">
          {visiMisiData.map((item) => (
            <Card key={item.id} className="p-6 bg-[#FBFFE4] border-2 border-[#1D8143] hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-semibold text-[#1D8143] md:hidden mb-2">Visi</p>
                  <p className="text-gray-700">{item.visi}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1D8143] md:hidden mb-2">Misi</p>
                  <p className="text-gray-700 whitespace-pre-line">{item.misi}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="flex-1 bg-[#1D8143] hover:bg-green-700 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-1 transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-1 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Hapus</span>
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
