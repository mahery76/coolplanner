import { NextResponse, NextRequest } from 'next/server'
import {pool} from '../../../../../config/db'

export async function GET(req: Request, {params}: {params: {id: string}}){
    try {
        const {id} = params
        const teacher = await pool.query(`SELECT * FROM teachers WHERE teacher_id=${id}`)
        return NextResponse.json(teacher.rows)
    } catch (err) {
        return NextResponse.json({"error": err})
    }
}