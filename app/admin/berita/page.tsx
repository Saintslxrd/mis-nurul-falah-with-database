"use client"

import type React from "react"

import { useState } from "react"
import { Upload } from "lucide-react"
import Image from "next/image"

interface BeritaItem {
  id: string
  judul: string
  isi: string
  foto: string
  tanggal: string
}

export default function AdminBeritaPage() {
  const [judul, setJudul] = useState("")
  const [isi, setIsi] = useState("")
  const [foto, setFoto] = useState<File | null>(null)
  const [fotoPreview, setFotoPreview] = useState<string | null>(null)
  const [tanggal, setTanggal] = useState("")
  const [beritaList, setBeritaList] = useState<BeritaItem[]>([
    {
      id: "1",
      judul: "Lomba Menghias",
      isi: "Lomba Menghias...",
      foto: "/placeholder.svg?height=60&width=60",
      tanggal: "22-10-2025",
    },
    {
      id: "2",
      judul: "Roti Tawar",
      isi: "Roti Tawar...",
      foto: "/placeholder.svg?height=60&width=60",
      tanggal: "22-10-2025",
    },
    {
      id: "3",
      judul: "Bersama Choki - Choki",
      isi: "Bersama Choki...",
      foto: "/placeholder.svg?height=60&width=60",
      tanggal: "22-10-2025",
    },
  ])

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFoto(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setFotoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const file = e.dataTransfer.files?.[0]
    if (file) {
      setFoto(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setFotoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUpload = () => {
    if (judul && isi && tanggal && foto) {
      const newBerita: BeritaItem = {
        id: Date.now().toString(),
        judul,
        isi,
        foto: fotoPreview || "/placeholder.svg",
        tanggal,
      }
      setBeritaList([newBerita, ...beritaList])
      setJudul("")
      setIsi("")
      setFoto(null)
      setFotoPreview(null)
      setTanggal("")
    }
  }

  const handleDelete = (id: string) => {
    setBeritaList(beritaList.filter((item) => item.id !== id))
  }

  return (
    <main className="flex-1 bg-[#FBFFE4] p-8">
      {/* Header */}
      <div className="mb-8 pb-6 border-b-4 border-[#1D8143]">
        <h1 className="text-4xl font-bold text-green-700">Berita</h1>
      </div>

      {/* Form Section */}
      <div className="space-y-6 mb-12">
        {/* Masukan Judul */}
        <div>
          <h3 className="text-xl font-bold text-green-700 mb-3">Masukan Judul</h3>
          <input
            type="text"
            placeholder="Judul Berita"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="w-full px-4 py-3 border-2 border-dashed border-[#1D8143] rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-solid"
          />
        </div>

        {/* Masukan Isi Berita */}
        <div>
          <h3 className="text-xl font-bold text-[#1D8143] mb-3">Masukan Isi Berita</h3>
          <textarea
            placeholder="Isi Berita"
            value={isi}
            onChange={(e) => setIsi(e.target.value)}
            className="w-full px-4 py-3 border-2 border-dashed border-[#1D8143] rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-solid h-32 resize-none"
          />
        </div>

        {/* Masukan Gambar */}
        <div>
          <h3 className="text-xl font-bold text-[#1D8143] mb-3">Masukan Gambar (PNG, JPG - Max 5MB)</h3>
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="border-2 border-dashed border-[#1D8143] rounded-lg p-6 bg-white cursor-pointer hover:bg-green-50 transition-colors"
          >
            <label className="flex items-center gap-3 cursor-pointer">
              <button
                type="button"
                className="flex items-center gap-2 bg-[#1D8143] hover:bg-green-800 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <Upload className="w-5 h-5" />
                Upload File
              </button>
              <span className="text-gray-400">Klik untuk memilih Foto atau Drag & Drop</span>
              <input type="file" accept="image/png,image/jpeg" onChange={handleFotoChange} className="hidden" />
            </label>
            {fotoPreview && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Preview:</p>
                <div className="relative w-24 h-24">
                  <Image
                    src={fotoPreview || "/placeholder.svg"}
                    alt="Preview"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Masukan Tanggal */}
        <div>
          <h3 className="text-xl font-bold text-[#1D8143] mb-3">Masukan Tanggal</h3>
          <input
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            className="w-full px-4 py-2 border-2 border-[#1D8143] rounded-lg bg-green-700 text-white font-medium focus:outline-none"
          />
        </div>
      </div>

      {/* Upload Button */}
      <div className="flex justify-end mb-12">
        <button
          onClick={handleUpload}
          className="bg-[#1D8143] hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Upload
        </button>
      </div>

      {/* Berita pada Website Section */}
      <div className="mb-8 pb-4 border-b-4 border-[#1D8143]">
        <h2 className="text-2xl font-bold text-[#1D8143]">Berita pada Website</h2>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="grid grid-cols-6 bg-[#1D8143] text-white font-semibold">
          <div className="px-6 py-4">Judul Berita</div>
          <div className="px-6 py-4">Isi</div>
          <div className="px-6 py-4">Foto</div>
          <div className="px-6 py-4">Tanggal</div>
          <div className="px-6 py-4 col-span-2 text-center">Aksi</div>
        </div>
        <div className="divide-y">
          {beritaList.map((item) => (
            <div key={item.id} className="grid grid-cols-6 items-center hover:bg-amber-50 transition-colors">
              <div className="px-6 py-4 text-gray-800">{item.judul}</div>
              <div className="px-6 py-4 text-gray-800 truncate">{item.isi}</div>
              <div className="px-6 py-4">
                <div className="relative w-12 h-12">
                  <Image src={item.foto || "/placeholder.svg"} alt={item.judul} fill className="object-cover rounded" />
                </div>
              </div>
              <div className="px-6 py-4 text-gray-800">{item.tanggal}</div>
              <div className="px-6 py-4 col-span-2 flex gap-3 justify-center">
                <button className="bg-[#1D8143] hover:bg-green-300 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
