import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request, { params }: { params: { tipe: string } }) {
  const { tipe } = params;

  const formData = await req.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ success: false, message: "No file uploaded" });
  }

  // Tentukan nama file target
  const fileName =
    tipe === "form"
      ? "formulir.pdf"
      : tipe === "panduan"
      ? "panduan.pdf"
      : null;

  if (!fileName) {
    return NextResponse.json({ success: false, message: "Invalid type" });
  }

  // buat direktori jika belum ada
  const uploadDir = path.join(process.cwd(), "public", "ppdb_pdf");
  await mkdir(uploadDir, { recursive: true });

  const filePath = path.join(uploadDir, fileName);

  // tulis file
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(filePath, buffer);

  // simpan di database
  const existing = await prisma.pPDBFile.findFirst();

  if (existing) {
    const updated = await prisma.pPDBFile.update({
      where: { id: existing.id },
      data: {
        formulirUrl: tipe === "form" ? `/ppdb_pdf/${fileName}` : existing.formulirUrl,
        panduanUrl: tipe === "panduan" ? `/ppdb_pdf/${fileName}` : existing.panduanUrl,
      },
    });

    return NextResponse.json({ success: true, data: updated });
  }

  const created = await prisma.pPDBFile.create({
    data: {
      formulirUrl: tipe === "form" ? `/ppdb_pdf/${fileName}` : null,
      panduanUrl: tipe === "panduan" ? `/ppdb_pdf/${fileName}` : null,
    },
  });

  return NextResponse.json({ success: true, data: created });
}

export async function GET(req: Request, { params }: { params: { tipe: string } }) {
  const { tipe } = params;

  const data = await prisma.pPDBFile.findFirst();

  let url =
    tipe === "form"
      ? data?.formulirUrl
      : tipe === "panduan"
      ? data?.panduanUrl
      : null;

  return NextResponse.json({ success: true, data: url });
}
