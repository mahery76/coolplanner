import { NextResponse, NextRequest } from "next/server";
import { pool } from "../../../../../config/db";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const course = await pool.query("SELECT * FROM courses WHERE course_id = $1", [
      id,
    ]);
    return NextResponse.json({course: course.rows});
  } catch (err) {
    return NextResponse.json({"error": err})
  }
}
