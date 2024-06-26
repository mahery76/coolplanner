import { NextResponse, NextRequest } from 'next/server'
import { PrismaClient } from "@prisma/client";
import {pool} from '../../../../config/db'

export async function GET(req: Request) {
    const prisma = new PrismaClient()
    try {
      const majors = await pool.query(`SELECT * FROM majors;`)
  
      return NextResponse.json({"majors": majors.rows})
    } catch (err) {5
      return NextResponse.json({"error": err})
    }
    finally{
      await prisma.$disconnect()    
    }
}
