// app/api/visimisi/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const data = await prisma.visiMisi.findMany({ orderBy: { id_visimisi: "asc" } });
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body.visi || !body.misi) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

    const created = await prisma.visiMisi.create({
      data: { visi: body.visi, misi: body.misi },
    });

    return NextResponse.json(created);
  } catch (err) {
    return NextResponse.json({ error: "Failed to create" }, { status: 500 });
  }
}
