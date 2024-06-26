import { NextResponse, NextRequest } from 'next/server'
import {pool} from '../../../../../config/db'

export async function GET(req: Request, {params}: {params: {id: string}}) {
    try {
        const {id} = params
        const major = await pool.query(`SELECT * FROM majors WHERE major_id=${id}`)
        return NextResponse.json(major.rows)
        
    } catch (error) {
        return NextResponse.json({"error": error})
    }
}

