"use client"

import type React from "react"

import { useState } from "react"
import { Upload, Trash2, Edit2 } from "lucide-react"

interface GalleryItem {
  id: number
  title: string
  image: string
  date: string
}

export default function AdminGaleriPage() {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>("")
  const [date, setDate] = useState("")
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([
    {
      id: 1,
      title: "Pawai Marhaban Ya Ramadhan",
      image: "/pawai-marhaban.jpg",
      date: "22-10-2025",
    },
  ])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      setImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUpload = () => {
    if (title && image && date) {
      const newItem: GalleryItem = {
        id: galleryItems.length + 1,
        title,
        image: imagePreview,
        date,
      }
      setGalleryItems([...galleryItems, newItem])
      setTitle("")
      setImage(null)
      setImagePreview("")
      setDate("")
    }
  }

  const handleDelete = (id: number) => {
    setGalleryItems(galleryItems.filter((item) => item.id !== id))
  }

  return (
    <div className="flex-1 bg-[#FBFFE4] p-8">
      {/* Form Section */}
      <div className="space-y-6 mb-8">
        {/* Title Input */}
        <div>
          <label className="text-green-700 font-bold text-lg mb-2 block">Masukan Judul</label>
          <input
            type="text"
            placeholder="Judul Berita"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 border-2 border-dashed border-amber-300 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:border-green-700"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="text-green-700 font-bold text-lg mb-2 block">
            Masukan Gambar <span className="text-sm text-gray-600">(PNG, JPG - Max 5MB)</span>
          </label>
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDragDrop}
            className="border-2 border-dashed border-amber-300 rounded-lg p-6 text-center bg-white cursor-pointer hover:border-green-700 transition"
          >
            <label className="cursor-pointer">
              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
                  onClick={() => document.getElementById("fileInput")?.click()}
                >
                  <Upload className="w-4 h-4" />
                  Upload File
                </button>
                <span className="text-gray-400">Klik untuk memilih Foto atau Drag & Drop</span>
              </div>
              <input
                id="fileInput"
                type="file"
                accept="image/png,image/jpeg"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
          {imagePreview && (
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Preview:</p>
              <img
                src={imagePreview || "/placeholder.svg"}
                alt="Preview"
                className="h-32 w-32 object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Date Input */}
        <div>
          <label className="text-green-700 font-bold text-lg mb-2 block">Masukan Tanggal</label>
          <button
            onClick={() => document.getElementById("dateInput")?.click()}
            className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-4 rounded-lg flex items-center gap-2 transition"
          >
            <span>📅</span>
            Pilih Tanggal
          </button>
          <input id="dateInput" type="date" value={date} onChange={(e) => setDate(e.target.value)} className="hidden" />
          {date && (
            <p className="text-green-700 font-semibold mt-2">
              Tanggal dipilih: {new Date(date).toLocaleDateString("id-ID")}
            </p>
          )}
        </div>
      </div>

      {/* Upload Button */}
      <div className="flex justify-end mb-8">
        <button
          onClick={handleUpload}
          className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-lg transition"
        >
          Upload
        </button>
      </div>

      {/* Gallery Table */}
      <div>
        <h2 className="text-2xl font-bold text-green-700 mb-4 pb-3 border-b-4 border-green-700">Gambar pada Galeri</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="px-6 py-4 text-left font-semibold">Judul Gambar</th>
                <th className="px-6 py-4 text-left font-semibold">Foto</th>
                <th className="px-6 py-4 text-left font-semibold">Tanggal</th>
                <th className="px-6 py-4 text-left font-semibold">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {galleryItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100 transition">
                  <td className="px-6 py-4 font-medium text-gray-800">{item.title}</td>
                  <td className="px-6 py-4">
                    {item.image.startsWith("data:") || item.image.startsWith("/") ? (
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="h-16 w-16 object-cover rounded"
                      />
                    ) : (
                      <div className="h-16 w-16 bg-gray-200 rounded flex items-center justify-center text-gray-400">
                        No image
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{item.date}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center gap-2 transition">
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2 transition"
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
    </div>
  )
}
