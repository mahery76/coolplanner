import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import {pool} from '../../../../config/db'
import {coursesData, groupsData, majorsData, teachersData, userRolesData, usersData, timeslotsData, classroomsData, core_classes_refData, studentsData, teacherAvailabilitiesData} from './data'

export async function POST(req: any) {
  const prisma = new PrismaClient();
  
  try {
    await prisma.user_roles.createMany({
      data: userRolesData,
      skipDuplicates: true, 
    });
    await prisma.users.createMany({
      data: usersData,
      skipDuplicates: true,
    });

    await prisma.majors.createMany({
      data: majorsData,
      skipDuplicates: true,
    });

    await prisma.courses.createMany({
      data: coursesData,
      skipDuplicates: true,
    });

    await prisma.groups.createMany({
      data: groupsData,
      skipDuplicates: true,
    });

    await prisma.teachers.createMany({
      data: teachersData,
      skipDuplicates: true,
    });
    await prisma.timeslots.createMany({
      data: timeslotsData,
      skipDuplicates: true,
    });
    await prisma.classrooms.createMany({
      data: classroomsData,
      skipDuplicates: true,
    });
    await prisma.core_classes_refs.createMany({
      data: core_classes_refData,
      skipDuplicates: true,
    });
    await prisma.students.createMany({
      data: studentsData,
      skipDuplicates: true,
    });
    await prisma.teacher_availabilities.createMany({
      data: teacherAvailabilitiesData,
      skipDuplicates: true,
    });

    return NextResponse.json({message: 'Default data inserted successfully'});
  } catch (err) {
    console.error(err);
  }
  finally{
    await prisma.$disconnect()    
  }
}