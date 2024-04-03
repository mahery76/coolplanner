import { NextResponse, NextRequest } from 'next/server'
import { PrismaClient } from "@prisma/client";


export async function POST(req: any){
    const body = await req.json()
    console.log(body)
    const prisma = new PrismaClient();
    try {
        const newRole = await prisma.majors.create({ 
            data: body
        })
        return NextResponse.json(newRole)
    } catch (err) {
        console.error(err)
    }
}
