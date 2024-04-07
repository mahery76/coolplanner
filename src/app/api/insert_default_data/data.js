//user_roles
export const userRolesData = [
  { user_role_name: "admin" },
  { user_role_name: "teacher" },
  { user_role_name: "student" },
];

//users
export const usersData = [
  { username: "adminUser", user_role_id: 1 },
  { username: "teacherUser1", user_role_id: 2 },
  { username: "teacherUser2", user_role_id: 2 },
  { username: "studentUser1", user_role_id: 3 },
  { username: "studentUser2", user_role_id: 3 },
  { username: "studentUser3", user_role_id: 3 },
];

//majors
export const majorsData = [
  { major_name: "Management" },
  { major_name: "Computer Science" },
  { major_name: "Civil Engineering" },
];
//courses
export const coursesData = [
  { course_name: "Accounting", major_id: 1 },
  { course_name: "Business Ethics", major_id: 1 },
  { course_name: "Organizational Behavior", major_id: 1 },
  { course_name: "Strategic Management", major_id: 1 },
  { course_name: "Operations Management", major_id: 1 },
  { course_name: "French", major_id: 1 },
  { course_name: "Spanish", major_id: 1 },
  { course_name: "Chinese", major_id: 1 },

  { course_name: "Algorithms", major_id: 2 },
  { course_name: "Data Structures", major_id: 2 },
  { course_name: "Computer Networks", major_id: 2 },
  { course_name: "Operating Systems", major_id: 2 },
  { course_name: "French", major_id: 2 },
  { course_name: "Spanish", major_id: 2 },
  { course_name: "Chinese", major_id: 2 },

  { course_name: "Structural Analysis", major_id: 3 },
  { course_name: "Fluid Mechanics", major_id: 3 },
  { course_name: "Transportation Engineering", major_id: 3 },
  { course_name: "Environmental Engineering", major_id: 3 },
  { course_name: "French", major_id: 3 },
  { course_name: "Spanish", major_id: 3 },
  { course_name: "Chinese", major_id: 3 },
];

//groups
export const groupsData = [
  { group_name: "Mgmt 1st Year A" },
  { group_name: "Mgmt 1st Year B" },
  { group_name: "CS 1st Year" },
  { group_name: "CS 2nd Year" },
  { group_name: "Civil Eng 1st Year" },
  { group_name: "Civil Eng 2nd Year" },
];
//teachers
export const teachersData = [
  {
    teacher_name: "John Doe",
    teacher_title: "Professor",
    teacher_profil_pic: "john_doe.png",
  },
  {
    teacher_name: "Jane Smith",
    teacher_title: "Associate Professor",
    teacher_profil_pic: "jane_smith.png",
  },
  {
    teacher_name: "Emily Johnson",
    teacher_title: "Assistant Professor",
    teacher_profil_pic: "emily_johnson.png",
  },
  {
    teacher_name: "Michael Brown",
    teacher_title: "Lecturer",
    teacher_profil_pic: "michael_brown.png",
  },
  {
    teacher_name: "Jessica Davis",
    teacher_title: "Senior Lecturer",
    teacher_profil_pic: "jessica_davis.png",
  },
  {
    teacher_name: "Daniel Miller",
    teacher_title: "Adjunct Professor",
    teacher_profil_pic: "daniel_miller.png",
  },
];

//timeslots
export const timeslotsData = [
  {
    slot_value: "08:00 AM - 10:00 AM",
  },
  {
    slot_value: "10:00 AM - 12:00 PM",
  },
  {
    slot_value: "01:00 PM - 03:00 PM",
  },
  {
    slot_value: "03:00 PM - 05:00 PM",
  },
];

//classrooms
export const classroomsData = [
  {
    classroom_name: "Room 101",
    classroom_capacity: 30,
  },
  {
    classroom_name: "Room 102",
    classroom_capacity: 25,
  },
  {
    classroom_name: "Room 103",
    classroom_capacity: 20,
  },
  {
    classroom_name: "Room 201",
    classroom_capacity: 30,
  },
  {
    classroom_name: "Room 202",
    classroom_capacity: 25,
  },
  {
    classroom_name: "Computer Lab",
    classroom_capacity: 35,
  },
];

//core_classes_ref
export const core_classes_refData = [
  { core_classe_ref_name: "ccr 1" },
  { core_classe_ref_name: "ccr 2" },
  { core_classe_ref_name: "ccr 3" },
  { core_classe_ref_name: "ccr 4" },
];

//students
export const studentsData = [
  { student_name: "Alex Johnson", group_id: 1 },
  { student_name: "Brittany Smith", group_id: 2 },
  { student_name: "Charles Brown", group_id: 3 },
  { student_name: "Danielle Miller", group_id: 4 },
  { student_name: "Ethan Williams", group_id: 5 },
  { student_name: "Fiona Jones", group_id: 6 },
];

//teacher_availabilities
export const teacherAvailabilitiesData = [
  {
    availability_date: new Date("2022-09-01T08:00:00"),
    teacher_id: 1,
    slot_id: 1,
  },
  {
    availability_date: new Date("2022-09-01T10:00:00"),
    teacher_id: 1,
    slot_id: 2,
  },
  {
    availability_date: new Date("2022-09-02T01:00:00"),
    teacher_id: 2,
    slot_id: 3,
  },
  {
    availability_date: new Date("2022-09-02T03:00:00"),
    teacher_id: 2,
    slot_id: 4,
  },
];

//assignments
