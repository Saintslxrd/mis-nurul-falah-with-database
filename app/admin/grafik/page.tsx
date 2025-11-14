"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Upload, Trash2, Edit2 } from "lucide-react"

interface GraphEntry {
  id: string
  date: string
  image: string
}

export default function AdminGrafikPage() {
  const [graphEntries, setGraphEntries] = useState<GraphEntry[]>([
    {
      id: "1",
      date: "10-01-2026",
      image: "/student-enrollment-chart.jpg",
    },
  ])
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>("")

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const file = e.dataTransfer.files?.[0]
    if (file) {
      setSelectedImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUpload = () => {
    if (!selectedImage || !selectedDate) {
      alert("Mohon isi semua field")
      return
    }

    const newEntry: GraphEntry = {
      id: Date.now().toString(),
      date: selectedDate,
      image: imagePreview,
    }

    setGraphEntries([...graphEntries, newEntry])
    setSelectedImage(null)
    setImagePreview("")
    setSelectedDate("")
  }

  const handleDelete = (id: string) => {
    setGraphEntries(graphEntries.filter((entry) => entry.id !== id))
  }

  return (
    <main className="flex-1 bg-[#FBFFE4] p-8">
      {/* Form Section */}
      <div className="mb-8">
        {/* Upload Image */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1D8143] mb-4">Masukan Foto Grafik</h2>
          <p className="text-sm text-gray-600 mb-4">(PNG, JPG - Max 5MB)</p>
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="border-2 border-dashed border-[#1D8143] rounded-lg p-8 bg-white hover:bg-green-50 transition-colors"
          >
            <label className="flex items-center gap-3 cursor-pointer">
              <button
                type="button"
                className="bg-[#1D8143] hover:bg-green-800 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Upload className="w-5 h-5" />
                Upload File
              </button>
              <input type="file" accept="image/png,image/jpeg" onChange={handleImageChange} className="hidden" />
              <span className="text-gray-400">Klik untuk memilih Foto atau Drag & Drop</span>
            </label>
          </div>

          {/* Image Preview */}
          {imagePreview && (
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Preview:</p>
              <div className="w-32 h-32 relative rounded-lg overflow-hidden border-2 border-green-700">
                <Image src={imagePreview || "/placeholder.svg"} alt="Preview" fill className="object-cover" />
              </div>
            </div>
          )}
        </div>

        {/* Date Picker */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1D8143] mb-4">Masukan Tanggal</h2>
          <div className="border-2 border-dashed border-[#1D8143] rounded-lg p-6 bg-white">
            <div className="flex items-center gap-3">
              <button className="bg-[#1D8143] hover:bg-green-800 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                📅 Pilih Tanggal
              </button>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>
          </div>
        </div>

        {/* Upload Button */}
        <div className="flex justify-end">
          <button
            onClick={handleUpload}
            className="bg-[#1D8143] hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Upload
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-[#1D8143] mb-6 pb-4 border-b-4 border-green-700">Grafik</h2>

        <div className="overflow-x-auto rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-[#1D8143] text-white">
                <th className="px-6 py-4 text-left font-semibold">Tanggal Grafik</th>
                <th className="px-6 py-4 text-left font-semibold">Grafik</th>
                <th className="px-6 py-4 text-left font-semibold">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {graphEntries.map((entry) => (
                <tr key={entry.id} className="bg-white hover:bg-amber-50 transition-colors">
                  <td className="px-6 py-4 text-gray-800">{entry.date}</td>
                  <td className="px-6 py-4">
                    <div className="w-24 h-24 relative rounded-lg overflow-hidden border border-gray-300">
                      <Image src={entry.image || "/placeholder.svg"} alt="Grafik" fill className="object-cover" />
                    </div>
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <button className="bg-[#1D8143] hover:bg-green-300 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
