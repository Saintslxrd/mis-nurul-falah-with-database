"use client"

import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function ChatBot() {
  const [open, setOpen] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })

  type LocalPart = { type: "text"; text: string }
  type LocalMessage = { id: string; role: "user" | "assistant"; parts: LocalPart[] }
  const [faqMessages, setFaqMessages] = useState<LocalMessage[]>([])

  const WA_NUMBER = "+62XXXXXXXXXXX"
  const WA_LINK = `https://wa.me/${WA_NUMBER.replace(/[^0-9]/g, "")}`

  type FaqItem = { q: string; a: string; keywords: string[] }

  const FAQS: FaqItem[] = [
    {
      q: "Alamat sekolah",
      a: "Alamat MIS Nurul Falah Areman: Jl. Menpor Areman No.24, RT.1/RW.007, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16451.",
      keywords: ["alamat", "lokasi", "dimana", "alamat sekolah", "depok", "tugu", "cimanggis"],
    },
    {
      q: "Profil sekolah",
      a: "MIS Nurul Falah Areman adalah Madrasah Ibtidaiyah Swasta yang berfokus pada pembentukan akhlak, literasi, dan numerasi.",
      keywords: ["profil", "tentang", "info sekolah", "mengenal"],
    },
    {
      q: "Sejarah sekolah",
      a: "Sekolah berdiri atas dukungan masyarakat sekitar dan yayasan terkait. Untuk detail tahun, silakan hubungi admin.",
      keywords: ["sejarah", "berdiri", "riwayat"],
    },
    {
      q: "Visi",
      a: "Visi: Mewujudkan peserta didik berakhlak mulia, cerdas, mandiri, dan peduli lingkungan.",
      keywords: ["visi"],
    },
    {
      q: "Misi",
      a: "Misi: Menanamkan nilai keislaman, menguatkan literasi, mengembangkan potensi peserta didik.",
      keywords: ["misi"],
    },
    {
      q: "Struktur organisasi",
      a: "Struktur organisasi meliputi Kepala Madrasah, Wakil, Guru, TU, dan Komite Sekolah.",
      keywords: ["struktur", "organisasi", "pengurus"],
    },
    {
      q: "Kurikulum",
      a: "Kurikulum mengikuti ketentuan madrasah ibtidaiyah (Kemenag).",
      keywords: ["kurikulum", "mapel"],
    },
    {
      q: "PPDB / Pendaftaran",
      a: "PPDB: KK, Akta, foto, formulir. Untuk jadwal terbaru, hubungi WhatsApp admin.",
      keywords: ["ppdb", "pendaftaran", "daftar"],
    },
    {
      q: "Jam layanan",
      a: "Jam layanan mengikuti kalender madrasah. Info terbaru hubungi admin.",
      keywords: ["jam", "operasional", "kbm"],
    },
    {
      q: "Galeri",
      a: "Galeri kegiatan tersedia di halaman Galeri di situs.",
      keywords: ["galeri", "foto"],
    },
    {
      q: "Ekstrakurikuler",
      a: "Program ekstrakurikuler: pramuka, tahfidz, olahraga, seni.",
      keywords: ["ekstrakurikuler", "kegiatan"],
    },
    {
      q: "Kontak",
      a: `Kontak WhatsApp sekolah: ${WA_NUMBER}. Klik: ${WA_LINK}`,
      keywords: ["kontak", "wa", "whatsapp"],
    },
  ]

  function findFaq(text: string): FaqItem | null {
    const t = text.toLowerCase()
    return FAQS.find((f) => f.keywords.some((k) => t.includes(k))) ?? null
  }

  function answerViaFaq(text: string) {
    const found = findFaq(text)
    const idBase = `${Date.now()}-${Math.random().toString(36).slice(2)}`
    const userMsg: LocalMessage = { id: `u-${idBase}`, role: "user", parts: [{ type: "text", text }] }
    const assistantText = found
      ? found.a
      : `Maaf, pertanyaan Anda belum ada di daftar FAQ. Silakan hubungi WhatsApp admin: ${WA_NUMBER}. Link: ${WA_LINK}`
    const botMsg: LocalMessage = {
      id: `a-${idBase}`,
      role: "assistant",
      parts: [{ type: "text", text: assistantText }],
    }
    setFaqMessages((prev) => [...prev, userMsg, botMsg])
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Buka chat"
          className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg flex items-center justify-center"
          style={{
            backgroundColor: "#1D8143",
            border: "3px solid #FBFFE4",
          }}
        >
          <img src="/onlineSupport.png" alt="Chat Icon" className="w-8 h-8" />
        </button>
      )}

      {open && (
        <Card className="fixed bottom-4 right-4 w-[min(92vw,380px)] rounded-2xl shadow-xl overflow-hidden border">
          <CardHeader className="bg-[#1D8143] text-primary-foreground p-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Chat Bot Informasi Sekolah</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Tutup chat"
                onClick={() => setOpen(false)}
                className="text-black bg-amber-50"
              >
                <span aria-hidden>×</span>
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-3">
            <div className="mb-2 rounded-xl bg-muted px-3 py-2 text-xs text-foreground/80">
              {"Jika pertanyaan tidak ada, silakan hubungi WhatsApp: "}
              <a href={WA_LINK} target="_blank" className="underline">
                {WA_NUMBER}
              </a>
            </div>

            <div className="mb-2 flex flex-wrap gap-2">
              {FAQS.slice(0, 8).map((f) => (
                <Button
                  key={f.q}
                  variant="secondary"
                  size="sm"
                  className="rounded-full"
                  onClick={() =>
                    setFaqMessages((prev) => [
                      ...prev,
                      {
                        id: `faq-a-${Date.now()}-${Math.random().toString(36).slice(2)}`,
                        role: "assistant",
                        parts: [{ type: "text", text: f.a }],
                      },
                    ])
                  }
                >
                  {f.q}
                </Button>
              ))}
            </div>

            <div className="flex max-h-72 flex-col gap-2 overflow-auto">
              {(() => {
                const allMessages = [...messages, ...faqMessages]
                if (allMessages.length === 0) {
                  return (
                    <div className="flex justify-start">
                      <div className="rounded-2xl rounded-bl-sm bg-muted px-3 py-2 text-sm text-foreground">
                        {
                          "Anda dapat menanyakan: alamat, profil, sejarah, visi, misi, struktur organisasi, kurikulum, PPDB, galeri, dan lainnya."
                        }
                      </div>
                    </div>
                  )
                }
                return allMessages.map((m) => (
                  <div key={m.id} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                    <div
                      className={cn(
                        "max-w-[80%] wrap-break-word rounded-2xl px-3 py-2 text-sm",
                        m.role === "user"
                          ? "rounded-br-sm bg-primary text-primary-foreground"
                          : "rounded-bl-sm bg-muted text-foreground",
                      )}
                    >
                      {m.parts?.map((p, idx) =>
                        p.type === "text" ? <span key={idx}>{p.text}</span> : null,
                      )}
                    </div>
                  </div>
                ))
              })()}
            </div>

            <form
              ref={formRef}
              className="mt-3 flex items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault()
                const input = e.currentTarget.elements.namedItem("message") as HTMLInputElement
                const text = input.value.trim()
                if (!text) return
                answerViaFaq(text)
                input.value = ""
              }}
            >
              <label htmlFor="message" className="sr-only">
                Tulis pertanyaan
              </label>

              {/* 🟢 BAGIAN YANG DIPERBAIKI */}
              <input
                id="message"
                name="message"
                className="flex-1 rounded-md border bg-background px-3 py-2 text-sm"
                placeholder="Tanya: PPDB, kurikulum, ekstrakurikuler..."
                disabled={status !== "ready"}

              />

              <Button type="submit" className="bg-[#1D8143]" disabled={status !== "ready"}
>
                Kirim
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  )
}
