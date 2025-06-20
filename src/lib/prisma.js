import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["warn", "error"], // Only log warnings and errors, not queries or info
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
