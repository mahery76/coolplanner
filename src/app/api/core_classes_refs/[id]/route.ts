import { NextResponse, NextRequest } from 'next/server'
import {pool} from '../../../../../config/db'

export async function GET(req: Request, {params}: {params: {id: string}}){
    try {
        const {id} = params
        const core_classes_ref = await pool.query(`SELECT * FROM core_classe_refs WHERE core_class_ref_id=${id}`)
        return NextResponse.json(core_classes_ref.rows)
    } catch (err) {
        return NextResponse.json({"error": err})
    }
}

