import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import fs from "fs";

export async function DELETE(req, { params }) {
  const id = Number(params.id);

  const item = await prisma.strukturGuru.findUnique({ where: { id } });
  if (!item) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // Hapus file fisik
  const filePath = `public${item.imageUrl}`;
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

  // Hapus db
  await prisma.strukturGuru.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
