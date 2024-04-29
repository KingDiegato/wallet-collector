import prisma from "@/app/lib/db";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  prisma.$connect();

  const wallets = await prisma.wallets.findMany();

  await prisma.$disconnect();
  return new NextResponse(JSON.stringify(wallets), { status: 200 });
}
