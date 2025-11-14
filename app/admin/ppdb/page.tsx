"use client"

import type React from "react"
import { useState } from "react"
import { Upload, Trash2, Edit2 } from "lucide-react"
import Image from "next/image"

export default function PPDBPage() {
  const [uploadedImage, setUploadedImage] = useState<{ file: File; preview: string } | null>(null)
  const [ppdbItems, setPpdbItems] = useState([
    {
      id: 1,
      title: "PPDB 2025/2026",
      image: "/ppdb-poster.jpg",
      date: "2024-11-13",
    },
  ])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.size <= 5 * 1024 * 1024) {
      const preview = URL.createObjectURL(file)
      setUploadedImage({ file, preview })
    } else {
      alert("File terlalu besar. Maksimal 5MB.")
    }
  }

  const handleDragDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file && file.size <= 5 * 1024 * 1024) {
      const preview = URL.createObjectURL(file)
      setUploadedImage({ file, preview })
    }
  }

  const handleUpload = () => {
    if (uploadedImage) {
      const newItem = {
        id: ppdbItems.length + 1,
        title: uploadedImage.file.name.replace(/\.[^/.]+$/, ""),
        image: uploadedImage.preview,
        date: new Date().toISOString().split("T")[0],
      }
      setPpdbItems([...ppdbItems, newItem])
      setUploadedImage(null)
    }
  }

  const handleDelete = (id: number) => {
    setPpdbItems(ppdbItems.filter((item) => item.id !== id))
  }

  return (
    <div className="flex-1 flex flex-col bg-[#FBFFE4]">
      <main className="flex-1 overflow-auto p-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Upload Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#1D8143] mb-6">
              Masukan Poster PPDB{" "}
              <span className="text-sm text-gray-500">(PNG, JPG - Max 5MB)</span>
            </h2>

            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDragDrop}
              className="bg-white rounded-lg border-2 border-dashed border-[#1D8143] p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-green-50 transition-colors"
            >
              <input
                type="file"
                accept="image/png,image/jpeg"
                onChange={handleFileChange}
                className="hidden"
                id="ppdb-file-input"
              />

              <label
                htmlFor="ppdb-file-input"
                className="flex flex-col items-center justify-center"
              >
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("ppdb-file-input")?.click()
                  }
                  className="bg-[#1D8143] hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-lg flex items-center gap-2 mb-4 transition-colors"
                >
                  <Upload className="w-5 h-5" />
                  Upload File
                </button>
                <p className="text-gray-400">
                  Klik untuk memilih Poster atau Drag & Drop di area ini
                </p>
              </label>

              {uploadedImage && (
                <div className="mt-6 w-full">
                  <p className="text-sm text-gray-600 mb-3">
                    Preview: {uploadedImage.file.name}
                  </p>
                  <div className="relative h-64 w-full bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={uploadedImage.preview || "/placeholder.svg"}
                      alt="Preview"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={handleUpload}
                disabled={!uploadedImage}
                className="bg-[#1D8143] hover:bg-green-800 disabled:bg-gray-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Upload
              </button>
            </div>
          </div>

          {/* Data Table */}
          <div>
            <h2 className="text-2xl font-bold text-[#1D8143] mb-6 pb-4 border-b-4 border-[#1D8143]">
              Daftar PPDB
            </h2>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-3 gap-4 bg-[#1D8143] text-white p-4 font-semibold">
                <div>Poster</div>
                <div>Informasi</div>
                <div>Aksi</div>
              </div>

              <div className="divide-y">
                {ppdbItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-3 gap-4 p-4 hover:bg-amber-50 transition-colors"
                  >
                    <div className="relative h-40 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="flex flex-col justify-center">
                      <p className="font-semibold text-gray-800">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button className="bg-[#1D8143] hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg flex items-center gap-2 transition-colors">
                        <Edit2 className="w-4 h-4" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                        Hapus
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
