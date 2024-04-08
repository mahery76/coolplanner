import { NextResponse, NextRequest } from 'next/server'
import {pool} from '../../../../config/db'

export async function GET(req: Request) {
    try {
      const timeslots = await pool.query(`SELECT * FROM timeslots;`)
      return NextResponse.json({"timeslots": timeslots.rows})
    } catch (err) {
      return NextResponse.json({"error": err})
    }
}