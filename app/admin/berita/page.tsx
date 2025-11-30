"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Upload } from "lucide-react"
import Image from "next/image"

interface BeritaItem {
  id: number
  judul: string
  isi: string
  gambar: string
  tanggal_upload: string
}

export default function AdminBeritaPage() {
  const [judul, setJudul] = useState("")
  const [isi, setIsi] = useState("")
  const [fotoPreview, setFotoPreview] = useState<string | null>(null)
  const [tanggal, setTanggal] = useState("")
  const [beritaList, setBeritaList] = useState<BeritaItem[]>([])

  // ================== LOAD BERITA ==================
  const loadBerita = async () => {
  try {
    const res = await fetch("/api/berita")

    if (!res.ok) throw new Error("Gagal load")

    const data = await res.json()
    setBeritaList(data)
  } catch (err) {
    console.error("ERROR :", err)
  }
}


  // ================== FOTO ==================
  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      setFotoPreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()

    const file = e.dataTransfer.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      setFotoPreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  // ================== UPLOAD ==================
  const handleUpload = async () => {
    if (!judul || !isi || !tanggal || !fotoPreview) {
      alert("Lengkapi semua data!")
      return
    }

    const res = await fetch("/api/berita", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        judul,
        isi,
        gambar: fotoPreview,
        tanggal_upload: tanggal,
      }),
    })

    if (res.ok) {
      alert("Berita berhasil ditambahkan")

      setJudul("")
      setIsi("")
      setTanggal("")
      setFotoPreview(null)

      loadBerita()
    } else {
      alert("Gagal upload data!")
    }
  }

  // ================== DELETE ==================
  const handleDelete = async (id: number) => {
  const res = await fetch(`/api/berita/${id}`, {
    method: "DELETE",
  })

  if (res.ok) {
    loadBerita()
  } else {
    alert("Gagal menghapus data")
  }
}


  return (
    <main className="flex-1 bg-[#FBFFE4] p-8">
      {/* Header */}
      <div className="mb-8 pb-6 border-b-4 border-[#1D8143]">
        <h1 className="text-4xl font-bold text-green-700">Berita</h1>
      </div>

      {/* Form Section */}
      <div className="space-y-6 mb-12">
        {/* Judul */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-[#1D8143]">
            Masukan Judul
          </h3>
          <input
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            placeholder="Judul Berita"
            className="w-full px-4 py-3 border-2 border-dashed border-[#1D8143] rounded-lg bg-white"
          />
        </div>

        {/* Isi */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-[#1D8143]">
            Masukan Isi
          </h3>
          <textarea
            value={isi}
            onChange={(e) => setIsi(e.target.value)}
            placeholder="Isi Berita"
            className="w-full px-4 py-3 border-2 border-dashed border-[#1D8143] rounded-lg h-32 resize-none bg-white"
          />
        </div>

        {/* Foto */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-[#1D8143]">
            Masukan Gambar
          </h3>

          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="border-2 border-dashed border-[#1D8143] p-6 bg-white rounded-lg"
          >
            <label className="flex gap-4 items-center cursor-pointer">
              <button
                type="button"
                className="bg-[#1D8143] text-white px-5 py-2 rounded-lg flex gap-2 items-center"
              >
                <Upload size={18} />
                Upload Foto
              </button>
              <span className="text-gray-500">
                Klik atau drag gambar kesini
              </span>
              <input
                type="file"
                accept="image/png,image/jpeg"
                onChange={handleFotoChange}
                className="hidden"
              />
            </label>

            {fotoPreview && (
              <div className="mt-4">
                <p className="text-sm mb-2">Preview:</p>
                <div className="relative w-32 h-32">
                  <Image
                    src={fotoPreview}
                    alt="Preview"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tanggal */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-[#1D8143]">
            Masukan Tanggal
          </h3>
          <input
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            className="w-full px-4 py-2 border-2 border-[#1D8143] rounded-lg bg-green-700 text-white"
          />
        </div>

        {/* BUTTON */}
        <div className="flex justify-end">
          <button
            onClick={handleUpload}
            className="bg-[#1D8143] hover:bg-green-800 text-white px-10 py-3 rounded-lg font-bold"
          >
            Upload
          </button>
        </div>
      </div>

      {/* TABLE */}
      <h2 className="text-2xl font-bold mb-6 text-[#1D8143]">
        Berita pada Website
      </h2>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-6 bg-[#1D8143] text-white font-bold">
          <div className="px-6 py-4">Judul</div>
          <div className="px-6 py-4">Isi</div>
          <div className="px-6 py-4">Foto</div>
          <div className="px-6 py-4">Tanggal</div>
          <div className="px-6 py-4 col-span-2 text-center">
            Aksi
          </div>
        </div>

        {beritaList.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-6 items-center border-b"
          >
            <div className="px-6 py-4">{item.judul}</div>
            <div className="px-6 py-4 truncate">{item.isi}</div>
            <div className="px-6 py-4">
              <div className="relative w-12 h-12">
                <Image
                  src={item.gambar || "/placeholder.svg"}
                  alt={item.judul}
                  fill
                  className="object-cover rounded"
                />
              </div>
            </div>
            <div className="px-6 py-4">
              {item.tanggal_upload}
            </div>
            <div className="px-6 py-4 col-span-2 flex justify-center gap-3">
              <button className="bg-blue-500 px-4 py-2 rounded text-white">
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 px-4 py-2 rounded text-white"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
