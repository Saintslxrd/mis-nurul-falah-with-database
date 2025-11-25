import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.strukturGuru.findMany({
    orderBy: { id: "desc" }
  });
  return NextResponse.json(data);
}
