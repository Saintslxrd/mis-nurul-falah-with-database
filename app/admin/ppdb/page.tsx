"use client";

import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Trash2 } from "lucide-react";

export default function AdminPPDB() {
  // Posters
  const [posters, setPosters] = useState<any[]>([]);
  const [uploadingPoster, setUploadingPoster] = useState(false);

  // PDF
  const [formPdf, setFormPdf] = useState<string | null>(null);
  const [panduanPdf, setPanduanPdf] = useState<string | null>(null);
  const [uploadingForm, setUploadingForm] = useState(false);
  const [uploadingPanduan, setUploadingPanduan] = useState(false);

  // =============== LOAD DATA AWAL ===============
  useEffect(() => {
    // load posters
    fetch("/api/ppdb")
      .then((res) => res.json())
      .then((res) => setPosters(res.data));

    // load FORMULIR
    fetch("/api/ppdb-file/form")
      .then((res) => res.json())
      .then((res) => setFormPdf(res.data));

    // load PANDUAN
    fetch("/api/ppdb-file/panduan")
      .then((res) => res.json())
      .then((res) => setPanduanPdf(res.data));
  }, []);

  // =============== UPLOAD POSTER ===============
  const onDropPoster = async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setUploadingPoster(true);
    const form = new FormData();
    form.append("image", file);

    const res = await fetch("/api/ppdb", {
      method: "POST",
      body: form,
    });

    const result = await res.json();
    if (result.success) {
      setPosters([result.data, ...posters]);
    }
    setUploadingPoster(false);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropPoster,
    accept: { "image/*": [] },
  });

  // =============== DELETE POSTER ===============
  const deletePoster = async (id: number) => {
    if (!confirm("Hapus poster ini?")) return;

    const res = await fetch(`/api/ppdb/${id}`, { method: "DELETE" });
    const result = await res.json();

    if (result.success) {
      setPosters(posters.filter((p) => p.id_ppdb !== id));
    }
  };

  // =============== UPLOAD FORMULIR ===============
  const uploadFormPdf = async (file: File) => {
    setUploadingForm(true);

    const form = new FormData();
    form.append("file", file);

    const res = await fetch("/api/ppdb-file/form", {
      method: "POST",
      body: form,
    });

    const result = await res.json();
    if (result.success) {
      setFormPdf(result.data.formulirUrl);
    }

    setUploadingForm(false);
  };

  // =============== UPLOAD PANDUAN ===============
  const uploadPanduanPdf = async (file: File) => {
    setUploadingPanduan(true);

    const form = new FormData();
    form.append("file", file);

    const res = await fetch("/api/ppdb-file/panduan", {
      method: "POST",
      body: form,
    });

    const result = await res.json();
    if (result.success) {
      setPanduanPdf(result.data.panduanUrl);
    }

    setUploadingPanduan(false);
  };

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold">Admin PPDB</h1>

      {/* ======================= POSTER ======================= */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Poster PPDB</h2>

        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition ${
            isDragActive ? "border-green-600 bg-green-50" : "border-gray-400"
          }`}
        >
          <input {...getInputProps()} />
          {uploadingPoster ? (
            <p className="text-green-700 font-semibold">Uploading...</p>
          ) : (
            <p className="text-gray-600">
              {isDragActive
                ? "Lepaskan file di sini..."
                : "Drag & drop poster di sini atau klik untuk upload"}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6">
          {posters.map((p: any) => (
            <div key={p.id_ppdb} className="relative">
              <Image
                src={p.foto_poster}
                alt="Poster PPDB"
                width={400}
                height={400}
                className="rounded-lg shadow"
              />

              <button
                onClick={() => deletePoster(p.id_ppdb)}
                className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full shadow"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ======================= UPLOAD PDF ======================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Upload File PDF</h2>

        {/* FORMULIR */}
        <div className="bg-white p-5 rounded-lg shadow">
          <p className="font-medium mb-2">Formulir Pendaftaran</p>

          {formPdf && (
            <a
              href={formPdf}
              target="_blank"
              className="text-blue-600 underline mb-3 block"
            >
              Lihat Formulir Saat Ini
            </a>
          )}

          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => e.target.files && uploadFormPdf(e.target.files[0])}
            className="block"
          />

          {uploadingForm && (
            <p className="text-green-700 mt-2">Uploading formulir...</p>
          )}
        </div>

        {/* PANDUAN */}
        <div className="bg-white p-5 rounded-lg shadow">
          <p className="font-medium mb-2">Panduan Pembayaran</p>

          {panduanPdf && (
            <a
              href={panduanPdf}
              target="_blank"
              className="text-blue-600 underline mb-3 block"
            >
              Lihat Panduan Saat Ini
            </a>
          )}

          <input
            type="file"
            accept="application/pdf"
            onChange={(e) =>
              e.target.files && uploadPanduanPdf(e.target.files[0])
            }
            className="block"
          />

          {uploadingPanduan && (
            <p className="text-green-700 mt-2">Uploading panduan...</p>
          )}
        </div>
      </section>
    </div>
  );
}
