// lib/prisma.ts
import { PrismaClient } from "@/lib/generated/prisma/client";

declare global {
  // allow global prisma across hot reloads in dev
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ??
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
