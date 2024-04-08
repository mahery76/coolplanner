import { NextResponse, NextRequest } from 'next/server'
import {pool} from '../../../../config/db'

export async function GET(req: Request) {
    try {
      const students = await pool.query(`SELECT * FROM students;`)
      return NextResponse.json({"students": students.rows})
    } catch (err) {
      return NextResponse.json({"error": err})
    }
}
