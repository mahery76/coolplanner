import { NextResponse, NextRequest } from 'next/server'
import {pool} from '../../../../config/db'

export async function GET(req: Request) {
    try {
      const classrooms = await pool.query(`SELECT * FROM classrooms;`)
      return NextResponse.json({"classrooms": classrooms.rows})
    } catch (err) {
      return NextResponse.json({"error": err})
    }
}
