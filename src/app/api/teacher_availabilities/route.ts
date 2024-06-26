import { NextResponse, NextRequest } from "next/server";
import { pool } from "../../../../config/db";
import { PrismaClient } from "@prisma/client";

export async function GET(req: Request) {
  try {
    const teacher_availabilities = await pool.query(
      `SELECT * FROM teacher_availabilities;`
    );
    return NextResponse.json({
      teacher_availabilities: teacher_availabilities.rows,
    });
  } catch (err) {
    return NextResponse.json({ error: err });
  }
}

export async function POST(req: Request) {
  const prisma = new PrismaClient();
  try {
    const body = await req.json();
    const newTeacherAvailability = await prisma.teacher_availabilities.create({
      data: body,
    });
    return NextResponse.json({ teacher_availability: newTeacherAvailability });
  } catch (err) {
    return NextResponse.json({ error: err });
  } finally {
    await prisma.$disconnect();
  }
}
