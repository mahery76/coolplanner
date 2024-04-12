import { NextResponse, NextRequest } from 'next/server'
import {pool} from '../../../../config/db'

export async function GET(req: Request) {
    try {
      const teachers = await pool.query(`SELECT * FROM teachers;`)
      return NextResponse.json({"teachers": teachers.rows})
    } catch (err) {
      return NextResponse.json({"error": err})
    }
}



