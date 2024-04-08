import { NextResponse, NextRequest } from 'next/server'
import {pool} from '../../../../config/db'

export async function GET(req: Request) {
    try {
      const courses = await pool.query(`SELECT * FROM courses;`)
      return NextResponse.json({"courses": courses.rows})
    } catch (err) {
      return NextResponse.json({"error": err})
    }
}
