import { NextResponse, NextRequest } from 'next/server'
import {pool} from '../../../../config/db'

export async function GET(req: Request) {
    try {
      const groups = await pool.query(`SELECT * FROM groups;`)
      return NextResponse.json({"groups": groups.rows})
    } catch (err) {
      return NextResponse.json({"error": err})
    }
}
