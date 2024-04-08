import { NextResponse, NextRequest } from 'next/server'
import {pool} from '../../../../../config/db'

export async function GET(req: Request, {params}: {params: {id: string}}){
    try {
        const {id} = params
        const classroom = await pool.query(`SELECT * FROM classrooms WHERE classroom_id=${id}`)
        return NextResponse.json(classroom.rows)
    } catch (err) {
        return NextResponse.json({"error": err})
    }
}

