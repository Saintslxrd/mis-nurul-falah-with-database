import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import path from "path";
import { writeFile } from "fs/promises";

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const fileName = `${Date.now()}-${file.name}`;
  const filePath = path.join(process.cwd(), "public/uploads", fileName);

  await writeFile(filePath, buffer);

  // Simpan ke database
  const saved = await prisma.strukturGuru.create({
    data: {
      name: file.name,
      imageUrl: `/uploads/${fileName}`,
    },
  });

  return NextResponse.json({ success: true, data: saved });
}
