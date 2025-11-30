import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const berita = await prisma.berita.findMany({
      orderBy: {
        id: "desc",
      },
    })

    return Response.json(berita)
  } catch (error) {
    console.error("API ERROR:", error)

    return new Response(
      JSON.stringify({
        message: "Gagal mengambil data berita",
        error: String(error),
      }),
      { status: 500 }
    )
  }
}
