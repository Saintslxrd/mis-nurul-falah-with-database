"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Trash2 } from "lucide-react"

interface AlumniEntry {
  id: string
  nama: string
  foto: string
  kutipan: string
  pendidikanTinggi: string
}

export default function AdminAlumniPage() {
  const [alumniList, setAlumniList] = useState<AlumniEntry[]>([
    {
      id: "1",
      nama: "Jaka Sudrajad",
      foto: "/alumni-male-student.jpg",
      kutipan: "Tak terasa waktu berlalu begitu cepat. Dulu saya hanya anak SD yang penuh...",
      pendidikanTinggi: "Univ. Indonesia",
    },
  ])

  const [nama, setNama] = useState("")
  const [kutipan, setKutipan] = useState("")
  const [pendidikan, setPendidikan] = useState("")
  const [foto, setFoto] = useState<File | null>(null)
  const [previewFoto, setPreviewFoto] = useState<string>("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0]
      setFoto(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewFoto(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.dataTransfer.files?.[0]) {
      const file = e.dataTransfer.files[0]
      setFoto(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewFoto(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUpload = () => {
    if (nama && kutipan && pendidikan && previewFoto) {
      const newEntry: AlumniEntry = {
        id: Date.now().toString(),
        nama,
        foto: previewFoto,
        kutipan,
        pendidikanTinggi: pendidikan,
      }
      setAlumniList([...alumniList, newEntry])
      setNama("")
      setKutipan("")
      setPendidikan("")
      setFoto(null)
      setPreviewFoto("")
    }
  }

  const handleDelete = (id: string) => {
    setAlumniList(alumniList.filter((item) => item.id !== id))
  }

  const handleEdit = (id: string) => {
    const item = alumniList.find((a) => a.id === id)
    if (item) {
      setNama(item.nama)
      setKutipan(item.kutipan)
      setPendidikan(item.pendidikanTinggi)
      setPreviewFoto(item.foto)
      handleDelete(id)
    }
  }

  return (
    <div className="min-h-screen bg-[#FBFFE4]">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Form Section */}
        <div className="space-y-6 mb-12">
          {/* Masukan Nama */}
          <div>
            <label className="block text-[#1D8143] text-lg font-bold mb-3">Masukan Nama</label>
            <input
              type="text"
              placeholder="Nama Alumni"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full px-4 py-3 border-2 border-dashed border-[#1D8143] rounded-lg focus:outline-none focus:border-green-500 bg-white text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Masukan Gambar Alumni */}
          <div>
            <label className="block text-[#1D8143] text-lg font-bold mb-3">
              Masukan Gambar Alumni <span className="text-sm text-gray-600">(PNG, JPG - Max 5MB)</span>
            </label>
            <div
              onDrop={handleDragDrop}
              onDragOver={(e) => e.preventDefault()}
              className="border-2 border-dashed border-[#1D8143] rounded-lg p-8 text-center bg-white hover:bg-green-50 transition-colors cursor-pointer"
            >
              <input
                type="file"
                accept="image/png,image/jpeg"
                onChange={handleFileChange}
                className="hidden"
                id="foto-input"
              />
              <label htmlFor="foto-input" className="cursor-pointer flex items-center justify-center gap-2">
                <button
                  type="button"
                  className="bg-[#1D8143] text-white px-4 py-2 rounded-lg font-medium hover:bg-green-800 flex items-center gap-2"
                >
                  Upload File
                </button>
                <span className="text-gray-400">Klik untuk memilih Foto atau Drag & Drop</span>
              </label>
            </div>
            {previewFoto && (
              <div className="mt-4 flex justify-center">
                <div className="relative w-32 h-32 rounded-lg overflow-hidden">
                  <Image src={previewFoto || "/placeholder.svg"} alt="Preview" fill className="object-cover" />
                </div>
              </div>
            )}
          </div>

          {/* Masukan Kutipan */}
          <div>
            <label className="block text-[#1D8143] text-lg font-bold mb-3">Masukan Kutipan</label>
            <textarea
              placeholder="Kutipan oleh Alumni"
              value={kutipan}
              onChange={(e) => setKutipan(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border-2 border-dashed border-[#1D8143] rounded-lg focus:outline-none focus:border-green-500 bg-white text-gray-700 placeholder-gray-400 resize-none"
            />
          </div>

          {/* Masukan Pendidikan Tinggi */}
          <div>
            <label className="block text-[#1D8143] text-lg font-bold mb-3">Masukan Pendidikan Tinggi</label>
            <input
              type="text"
              placeholder="Pendidikan Tinggi Alumni Sekarang"
              value={pendidikan}
              onChange={(e) => setPendidikan(e.target.value)}
              className="w-full px-4 py-3 border-2 border-dashed border-[#1D8143] rounded-lg focus:outline-none focus:border-green-500 bg-white text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Upload Button */}
          <div className="flex justify-end">
            <button
              onClick={handleUpload}
              className="bg-[#1D8143] text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
            >
              Upload
            </button>
          </div>
        </div>

        {/* Alumni Table Section */}
        <div>
          <h2 className="text-[#1D8143] text-2xl font-bold mb-6 pb-4 border-b-4 border-green-700">Alumni</h2>

          <div className="overflow-x-auto rounded-lg">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-[#1D8143] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Nama Alumni</th>
                  <th className="px-6 py-4 text-left font-semibold">Foto</th>
                  <th className="px-6 py-4 text-left font-semibold">Kutipan</th>
                  <th className="px-6 py-4 text-left font-semibold">PT</th>
                  <th className="px-6 py-4 text-center font-semibold">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {alumniList.map((alumni) => (
                  <tr key={alumni.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">{alumni.nama}</td>
                    <td className="px-6 py-4">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                        <Image
                          src={alumni.foto || "/placeholder.svg"}
                          alt={alumni.nama}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700 text-sm max-w-xs truncate">{alumni.kutipan}</td>
                    <td className="px-6 py-4 text-gray-700">{alumni.pendidikanTinggi}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => handleEdit(alumni.id)}
                          className="bg-[#1D8143] text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(alumni.id)}
                          className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
