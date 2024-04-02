import { NextResponse, NextRequest } from 'next/server'
import { PrismaClient } from "@prisma/client";


export async function GET(req: any){
    
    const prisma = new PrismaClient();
    try {
       
        const newRole = await prisma.majors.create({ 
            data: {
                major_name: "Computer Science",
                user_id: "String"
            },
        })
    } catch (err) {
        console.error(err)
    }
}