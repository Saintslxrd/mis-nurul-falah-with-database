import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE( { params }: { params: { id: string } }) {
  await prisma.pPDB.delete({
    where: { id_ppdb: Number(params.id) },
  });

  return NextResponse.json({ success: true });
}
