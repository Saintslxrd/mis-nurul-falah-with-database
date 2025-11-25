import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function GET() {
  const username = "admin123";              
  const plainPassword = "misnurulfalah123";   

  const hash = await bcrypt.hash(plainPassword, 10);

  const user = await prisma.user.create({
    data: {
      username: username,
      password: hash,
    },
  });

  return NextResponse.json({ message: "User admin dibuat", user });
}
