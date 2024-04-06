import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import {pool} from '../../../../config/db'

export async function POST(req: any) {
  const prisma = new PrismaClient();
  const body = await req.json();
  console.log(body);
  try {
    const newRole = await prisma.user_roles.create({
      data: body,
    });
    return NextResponse.json(body);
  } catch (err) {
    console.error(err);
  }
  finally{
    await prisma.$disconnect()    
  }
}