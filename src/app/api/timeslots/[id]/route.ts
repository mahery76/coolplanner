import { NextResponse, NextRequest } from 'next/server'
import {pool} from '../../../../../config/db'

export async function GET(req: Request, {params}: {params: {id: string}}){
    try {
        const {id} = params
        const timeslot = await pool.query(`SELECT * FROM timeslots WHERE timeslot_id=${id}`)
        return NextResponse.json(timeslot.rows)
    } catch (err) {
        return NextResponse.json({"error": err})
    }
}