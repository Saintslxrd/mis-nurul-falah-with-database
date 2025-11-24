// app/api/visimisi/[id]/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(req: Request, { params }: any) {
  try {
    const id = Number(params.id);
    const { visi, misi } = await req.json();
    if (!visi || !misi) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

    const updated = await prisma.visiMisi.update({
      where: { id_visimisi: id },
      data: { visi, misi },
    });

    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: any) {
  try {
    const id = Number(params.id);
    await prisma.visiMisi.delete({ where: { id_visimisi: id } });
    return NextResponse.json({ message: "Deleted" });
  } catch (err) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
