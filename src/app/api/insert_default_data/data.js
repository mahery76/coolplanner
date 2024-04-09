//user_roles
export const userRolesData = [
  { user_role_name: "admin" },
  { user_role_name: "Enseignant" },
  { user_role_name: "Etudiant" },
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
  { major_name: "Gestion" },
  { major_name: "Informatique" },
  { major_name: "Ingénierie Civil" },
];
//courses
export const coursesData = [
  { course_name: " Comptabilité", major_id: 1 },
  { course_name: "Éthique des affaires", major_id: 1 },
  { course_name: "Comportement Organisationnel", major_id: 1 },
  { course_name: "Gestion Stratégique", major_id: 1 },
  { course_name: "Gestion des Opérations", major_id: 1 },

  { course_name: "Algorithmes", major_id: 2 },
  { course_name: "Structures de données", major_id: 2 },
  { course_name: "Réseaux informatiques", major_id: 2 },
  { course_name: "Systèmes d'exploitation", major_id: 2 },

  { course_name: "Analyse structurelle", major_id: 3 },
  { course_name: "Mécanique fluide", major_id: 3 },
  { course_name: "Ingénierie de la conduite", major_id: 3 },
  { course_name: "Ingénierie environnementale", major_id: 3 },

  { course_name: "Français"},
  { course_name: "Espagnole"},
  { course_name: "Mandarin"},
];

//groups
export const groupsData = [
  { group_name: "Gestion L1 A" },
  { group_name: "Gestion L1 B" },
  { group_name: "Informatique L1" },
  { group_name: "Informatique L2" },
  { group_name: "Ingénierie Civil L1" },
  { group_name: "Ingénierie Civil L2" },
];
//teachers
export const teachersData = [
  {
    teacher_name: "John Doe",
    teacher_title: "Docteur en Sciences de l'Éducation",
    teacher_profil_pic: "john_doe.png",
  },
  {
    teacher_name: "RAFANOMEZANA Celestin",
    teacher_title: "Professeur en Genie Mecanique",
    teacher_profil_pic: "jane_smith.png",
  },
  {
    teacher_name: "FEHIZORO Fanaperana",
    teacher_title: "Docteur en Comptabilité",
    teacher_profil_pic: "emily_johnson.png",
  },
  {
    teacher_name: "ANDRIANINA Mahefa",
    teacher_title: "Docteur en Science Cognitive",
    teacher_profil_pic: "michael_brown.png",
  },
  {
    teacher_name: "Jessica Mickael",
    teacher_title: "Docteur en Genie civil",
    teacher_profil_pic: "jessica_davis.png",
  },
  {
    teacher_name: "RAVAOARISOA Finaritra",
    teacher_title: "Master en Culture et Linguistique",
    teacher_profil_pic: "daniel_miller.png",
  },
];

//timeslots
export const timeslotsData = [
  {
    timeslot_value: "08:00 AM - 10:00 AM",
  },
  {
    timeslot_value: "10:00 AM - 12:00 PM",
  },
  {
    timeslot_value: "01:00 PM - 03:00 PM",
  },
  {
    timeslot_value: "03:00 PM - 05:00 PM",
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
    timeslot_id: 1,
  },
  {
    availability_date: new Date("2022-09-01T10:00:00"),
    teacher_id: 1,
    timeslot_id: 2,
  },
  {
    availability_date: new Date("2022-09-02T01:00:00"),
    teacher_id: 2,
    timeslot_id: 3,
  },
  {
    availability_date: new Date("2022-09-02T03:00:00"),
    teacher_id: 2,
    timeslot_id: 4,
  },
];

//assignments
