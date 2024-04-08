import { NextResponse, NextRequest } from "next/server";
import { pool } from "../../../../../config/db";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const activity = await pool.query(
      `SELECT * FROM activities WHERE activity_id=${id}`
    );
    return NextResponse.json(activity.rows);
  } catch (err) {
    return NextResponse.json({ error: err });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const activity = await pool.query(
      `DELETE FROM activities WHERE activity_id=${id}`
    );
    return NextResponse.json(activity.rows);
  } catch (err) {
    return NextResponse.json({ error: err });
  }
}
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await req.json();
    const {
      activity_total_hours,
      activity_remaining_hours,
      group_id,
      course_id,
      teacher_id,
      classroom_id,
      core_class_ref_id,
    } = body;
    const activity = await pool.query(`
        UPDATE activities SET 
        activity_total_hours=${activity_total_hours},
        activity_remaining_hours=${activity_remaining_hours},
        group_id=${group_id},
        course_id=${course_id},
        teacher_id=${teacher_id},
        classroom_id=${classroom_id},
        core_class_ref_id=${core_class_ref_id}
        WHERE activity_id=${id}
        RETURNING *
        `);
    return NextResponse.json(activity.rows);
  } catch (err) {
    return NextResponse.json({ error: err });
    console.log(err);
  }
}
