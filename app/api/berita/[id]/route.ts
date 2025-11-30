import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = Number(params.id)

  await prisma.berita.delete({
    where: { id },
  })

  return NextResponse.json({ message: "Berhasil dihapus" })
}
