"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2, Edit2, Upload } from "lucide-react";

interface VisiMisiItem {
  id_visimisi: number;
  visi: string;
  misi: string;
}

function Toast({ message, type = "success", onClose }: { message: string; type?: "success" | "error"; onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className={`fixed right-4 top-6 z-50 rounded px-4 py-2 font-medium ${type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}>
      {message}
    </div>
  );
}

export default function AdminVisiPage() {
  const [data, setData] = useState<VisiMisiItem[]>([]);
  const [visiInput, setVisiInput] = useState("");
  const [misiInput, setMisiInput] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type?: "success" | "error" } | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/visimisi");
      const json = await res.json();
      setData(json);
    } catch (err) {
      setToast({ message: "Gagal mengambil data", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const resetForm = () => {
    setVisiInput("");
    setMisiInput("");
    setEditingId(null);
  };

  const handleUpload = async () => {
    // Validasi
    if (!visiInput.trim()) {
      setToast({ message: "Visi tidak boleh kosong", type: "error" });
      return;
    }
    if (!misiInput.trim()) {
      setToast({ message: "Misi tidak boleh kosong", type: "error" });
      return;
    }

    setLoading(true);
    try {
      if (editingId) {
        const res = await fetch(`/api/visimisi/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ visi: visiInput.trim(), misi: misiInput.trim() }),
        });
        if (!res.ok) throw new Error("Failed update");
        setToast({ message: "Berhasil diupdate", type: "success" });
      } else {
        const res = await fetch("/api/visimisi", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ visi: visiInput.trim(), misi: misiInput.trim() }),
        });
        if (!res.ok) throw new Error("Failed create");
        setToast({ message: "Berhasil ditambahkan", type: "success" });
      }
      await fetchData();
      resetForm();
    } catch (err) {
      setToast({ message: "Terjadi kesalahan", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item: VisiMisiItem) => {
    setVisiInput(item.visi);
    setMisiInput(item.misi);
    setEditingId(item.id_visimisi);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Hapus data ini?")) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/visimisi/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed delete");
      setToast({ message: "Terhapus", type: "success" });
      await fetchData();
    } catch {
      setToast({ message: "Gagal menghapus", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div className="border-b-4 border-[#1D8143] pb-4">
        <h1 className="text-3xl font-bold text-[#1D8143] mb-2">Visi & MISI</h1>
        <div className="h-1 bg-[#1D8143] w-full"></div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-[#1D8143] mb-2">Visi</label>
          <textarea value={visiInput} onChange={(e) => setVisiInput(e.target.value)} placeholder="Masukkan Visi Sekolah" className="w-full p-4 border-2 border-green-200 rounded-lg focus:outline-none focus:border-[#1D8143] min-h-32 resize-none" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#1D8143] mb-2">MISI</label>
          <textarea value={misiInput} onChange={(e) => setMisiInput(e.target.value)} placeholder="Masukkan MISI Sekolah" className="w-full p-4 border-2 border-green-200 rounded-lg focus:outline-none focus:border-[#1D8143] min-h-32 resize-none" />
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleUpload} className="bg-[#1D8143] text-white px-8 py-2 rounded-lg font-semibold flex items-center gap-2" disabled={loading}>
          <Upload className="w-4 h-4" />
          {editingId ? (loading ? "Updating..." : "Update") : (loading ? "Uploading..." : "Upload")}
        </Button>
      </div>

      <div className="border-t-4 border-[#1D8143] pt-6">
        <div className="border-b-4 border-[#1D8143] pb-4 mb-6">
          <h2 className="text-2xl font-bold text-[#1D8143]">Visi & MISI</h2>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-4 bg-[#1D8143] text-white p-4 rounded-t-lg font-semibold mb-4">
          <div>Visi</div>
          <div>Misi</div>
          <div>Aksi</div>
        </div>

        {loading ? (
          <div className="text-center py-8 text-[#1D8143]">Loading...</div>
        ) : data.length === 0 ? (
          <div className="text-center py-8 text-gray-600">Belum ada data</div>
        ) : (
          <div className="space-y-4">
            {data.map((item) => (
              <Card key={item.id_visimisi} className="p-6 bg-[#FBFFE4] border-2 border-[#1D8143] hover:shadow-lg transition-shadow">
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
                    <button onClick={() => handleEdit(item)} className="flex-1 bg-[#1D8143] hover:bg-green-700 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-1 transition-colors">
                      <Edit2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Edit</span>
                    </button>
                    <button onClick={() => handleDelete(item.id_visimisi)} className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-1 transition-colors">
                      <Trash2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Hapus</span>
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
