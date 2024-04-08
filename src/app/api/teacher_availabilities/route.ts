import { NextResponse, NextRequest } from 'next/server'
import {pool} from '../../../../config/db'

export async function GET(req: Request) {
    try {
      const teacher_availabilities = await pool.query(`SELECT * FROM teacher_availabilities;`)
      return NextResponse.json({"teacher_availabilities": teacher_availabilities.rows})
    } catch (err) {
      return NextResponse.json({"error": err})
    }
}