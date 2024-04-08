import { NextResponse, NextRequest } from "next/server";
import { pool } from "../../../../config/db";
import { PrismaClient } from "@prisma/client";

export async function GET(req: Request) {
  try {
    const activities = await pool.query(`SELECT * FROM activities;`);
    return NextResponse.json({ activities: activities.rows });
  } catch (err) {
    return NextResponse.json({ error: err });
  }
}

export async function POST(req: Request) {
  const prisma = new PrismaClient();

  try {
    const body = await req.json();
    const newActivity = await prisma.activities.create({
      data: body,
    });
    return NextResponse.json({ activity: newActivity });
  } catch (err) {
    return NextResponse.json({ error: err });
  } finally {
    await prisma.$disconnect();
  }
}
