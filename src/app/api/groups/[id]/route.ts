import { NextResponse, NextRequest } from 'next/server'
import {pool} from '../../../../../config/db'

export async function GET(req: Request, {params}: {params: {id: string}}){
    try {
        const {id} = params
        const group = await pool.query(`SELECT * FROM groups WHERE group_id=${id}`)
        return NextResponse.json(group.rows)
    } catch (err) {
        console.log(err)
    }
}