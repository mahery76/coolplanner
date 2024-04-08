import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { pool } from "../../../../config/db";
import {
  coursesData,
  groupsData,
  majorsData,
  teachersData,
  userRolesData,
  usersData,
  timeslotsData,
  classroomsData,
  core_classes_refData,
  studentsData,
  teacherAvailabilitiesData,
} from "./data";

const resetData = async () => {
  const resetOneTable = async (tableName: string, sequenceName: string) => {
    await pool.query(`TRUNCATE TABLE ${tableName} CASCADE`);
    await pool.query(`ALTER SEQUENCE ${sequenceName} RESTART WITH 1`);
  };
  await resetOneTable("users", "users_user_id_seq");
  await resetOneTable("user_roles", "user_roles_user_role_id_seq");
  await resetOneTable("majors", "majors_major_id_seq");
  await resetOneTable("courses", "courses_course_id_seq");
  await resetOneTable("groups", "groups_group_id_seq");
  await resetOneTable("teachers", "teachers_teacher_id_seq");
  await resetOneTable("timeslots", "timeslots_timeslot_id_seq");
  await resetOneTable("classrooms", "classrooms_classroom_id_seq");
  await resetOneTable(
    "core_classes_refs",
    "core_classes_refs_core_class_ref_id_seq"
  );
  await resetOneTable("students", "students_student_id_seq");
  await resetOneTable(
    "teacher_availabilities",
    "teacher_availabilities_teacher_availability_id_seq"
  );
};
const insertData = async () => {
  const prisma = new PrismaClient();
  try {
    await prisma.user_roles.createMany({ data: userRolesData, skipDuplicates: true })
    await prisma.users.createMany({ data: usersData, skipDuplicates: true })
    await prisma.majors.createMany({ data: majorsData, skipDuplicates: true })
    await prisma.courses.createMany({ data: coursesData, skipDuplicates: true })
    await prisma.groups.createMany({ data: groupsData, skipDuplicates: true })
    await prisma.teachers.createMany({ data: teachersData, skipDuplicates: true })
    await prisma.timeslots.createMany({ data: timeslotsData, skipDuplicates: true })
    await prisma.classrooms.createMany({
      data: classroomsData,
      skipDuplicates: true,
    })
    await prisma.core_classes_refs.createMany({
      data: core_classes_refData,
      skipDuplicates: true,
    })
    await prisma.students.createMany({ data: studentsData, skipDuplicates: true })
    
    await prisma.teacher_availabilities.createMany({
      data: teacherAvailabilitiesData,
      skipDuplicates: true,
    })

  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
};

export async function POST(req: any) {
  try {
    await resetData();
    await insertData();

    return NextResponse.json({ message: "Default data inserted successfully" });
  } catch (err) {
    return NextResponse.json({"error": err})
  }
}
