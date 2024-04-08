import { NextResponse, NextRequest } from 'next/server'
import {pool} from '../../../../../config/db'

export async function GET(req: Request, {params}: {params: {id: string}}){
    try {
        const {id} = params
        const teacher_availability = await pool.query(`SELECT * FROM teacher_availabilities WHERE teacher_availability_id=${id}`)
        return NextResponse.json(teacher_availability.rows)
    } catch (err) {
        return NextResponse.json({"error": err})
    }
}
