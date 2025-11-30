import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const data = await prisma.pPDBFile.findFirst();

    return NextResponse.json({
      success: true,
      formulirUrl: data?.formulirUrl || null,
      panduanUrl: data?.panduanUrl || null,
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Gagal mengambil data" },
      { status: 500 }
    );
  }
}
