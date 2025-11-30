import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { writeFile } from "fs/promises";
import path from "path";

// GET: ambil semua poster
export async function GET() {
  const posters = await prisma.pPDB.findMany({
    orderBy: { id_ppdb: "desc" },
  });

  return NextResponse.json({ success: true, data: posters });
}

// POST: upload poster gambar
export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get("image") as File | null;

  if (!file) {
    return NextResponse.json({ success: false, message: "No file uploaded" });
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const fileName = Date.now() + "-" + file.name;
  const filePath = path.join(process.cwd(), "public", "ppdb", fileName);

  await writeFile(filePath, bytes);

  const saved = await prisma.pPDB.create({
    data: {
      foto_poster: "/ppdb/" + fileName,
      tanggal_upload: new Date(),
    },
  });

  return NextResponse.json({ success: true, data: saved });
}

// DELETE: hapus poster
export async function DELETE(req: Request) {
  const body = await req.json();

  await prisma.pPDB.delete({
    where: { id_ppdb: Number(body.id) },
  });

  return NextResponse.json({ success: true });
}
