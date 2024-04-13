import Dexie from "dexie";
import { teacherAvailabilitiesData, teachersData, timeslotsData } from "./indexedDbDefaultdata";

export const db = new Dexie("coolplannerdb");
db.version(1).stores({
  teachers: "++teacher_id, teacher_name, teacher_title, teacher_profil_pic",
  timeslots: "++timeslot_id, timeslot_value",
  teacher_availabilities: "++teacher_availability_id, availability_date, teacher_id, timeslot_id"
});

db.on('populate', () => {
  db.teachers.bulkAdd(teachersData);
  db.timeslots.bulkAdd(timeslotsData);
  db.teacher_availabilities.bulkAdd(teacherAvailabilitiesData);
});

db.open().catch(function(error){
    console.error("Open failed: " + error)
})


