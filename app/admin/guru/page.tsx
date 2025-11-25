"use client"

import { useState, useEffect } from "react"
import { Upload, Trash2, Edit2 } from "lucide-react"
import Image from "next/image"

export default function StrukturGuruPage() {
  const [uploadedImage, setUploadedImage] = useState<{ file: File; preview: string } | null>(null)
  const [existingStructures, setExistingStructures] = useState([])

  // ⬇️ Fetch data dari database
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/struktur-guru")
      const data = await res.json()
      setExistingStructures(data)
    }

    fetchData()
  }, [])

  // Upload gambar
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

  const handleUpload = async () => {
    if (!uploadedImage) return

    const formData = new FormData()
    formData.append("file", uploadedImage.file)

    const res = await fetch("/api/struktur-guru/upload", {
      method: "POST",
      body: formData,
    })

    const data = await res.json()

    if (data.success) {
      setExistingStructures([data.data, ...existingStructures])
      setUploadedImage(null)
    }
  }

  const handleDelete = async (id: number) => {
    const res = await fetch(`/api/struktur-guru/${id}`, {
      method: "DELETE",
    })

    if (res.ok) {
      setExistingStructures(existingStructures.filter((item: any) => item.id !== id))
    }
  }

  return (
    <div className="flex-1 flex flex-col bg-[#FBFFE4]">
      <main className="flex-1 overflow-auto p-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Upload Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#1D8143] mb-6">
              Masukan Foto <span className="text-sm text-gray-500">(PNG, JPG - Max 5MB)</span>
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
                id="file-input"
              />

              <label htmlFor="file-input" className="flex flex-col items-center justify-center">
                <button
                  type="button"
                  onClick={() => document.getElementById("file-input")?.click()}
                  className="bg-[#1D8143] hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-lg flex items-center gap-2 mb-4 transition-colors"
                >
                  <Upload className="w-5 h-5" />
                  Upload File
                </button>
                <p className="text-gray-400">Klik untuk memilih Foto atau Drag & Drop di area ini</p>
              </label>

              {uploadedImage && (
                <div className="mt-6 w-full">
                  <p className="text-sm text-gray-600 mb-3">Preview: {uploadedImage.file.name}</p>
                  <div className="relative h-48 w-full bg-gray-100 rounded-lg overflow-hidden">
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
              Struktur Guru
            </h2>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-2 gap-4 bg-[#1D8143] text-white p-4 font-semibold">
                <div>Gambar Struktur</div>
                <div>Aksi</div>
              </div>

              <div className="divide-y">
                {existingStructures.map((structure: any) => (
                  <div
                    key={structure.id}
                    className="grid grid-cols-2 gap-4 p-4 hover:bg-amber-50 transition-colors"
                  >
                    <div className="relative h-40 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={structure.image || "/placeholder.svg"}
                        alt={structure.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <button className="bg-[#1D8143] hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg flex items-center gap-2 transition-colors">
                        <Edit2 className="w-4 h-4" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(structure.id)}
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
