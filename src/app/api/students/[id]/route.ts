import { NextResponse, NextRequest } from 'next/server'
import {pool} from '../../../../../config/db'

export async function GET(req: Request, {params}: {params: {id: string}}){
    try {
        const {id} = params
        const student = await pool.query(`SELECT * FROM students WHERE student_id=${id}`)
        return NextResponse.json(student.rows)
    } catch (err) {
        return NextResponse.json({"error": err})
    }
}
