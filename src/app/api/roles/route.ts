import { NextResponse, NextRequest } from 'next/server'
import { PrismaClient } from "@prisma/client";

export async function GET(request: any){
  const prisma = new PrismaClient();
  const createRole = async () => {
    const newRole = await prisma.user_role.create({
      data: {
        user_role_name: "Admin",
      },
    });
    console.log(newRole)
  };
  createRole()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
