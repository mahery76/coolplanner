import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { pool } from "../../../../config/db";

export async function POST(req: any) {
  const prisma = new PrismaClient();
  const body = await req.json();
  console.log(body);
  try {
    const newUser = await prisma.users.create({
      data: body,
    });
    return NextResponse.json({newUser});
  } catch (err) {
    console.log(err);
  }
  finally{
    await prisma.$disconnect()
  }
}



