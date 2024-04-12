"use client";
import React, { useEffect, useState } from "react";
import { apiUrl } from "../../_lib/ipAddress";
import { getData } from "../../_lib/fetchData";
import { FaEdit, FaTrash } from "react-icons/fa";

type Teacher = {
  teacher_id: number;
  teacher_profil_pic: string;
  teacher_name: string;
  teacher_title: string;
}

function Teachers() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  useEffect(() => {
    getData(`${apiUrl}/teachers`).then((res: any) => {
      console.log(res);
      setTeachers(res.data.teachers);
    });
  }, []);
  return (
    <div className="">
      <div className="insertion"></div>

      <div className="overflow-x-auto">
        <table className="">
          <thead>
            <tr>
              <th className="px-4 py-3">Nom</th>
              <th className="px-4 py-3">Titre</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.teacher_id}>
                <td className="whitespace-nowrap px-4 py-2">{teacher.teacher_name}</td>
                <td className="whitespace-nowrap px-4 py-2">{teacher.teacher_title}</td>
                <td className="whitespace-nowrap px-2 py-2"><FaTrash /></td>
                <td className="whitespace-nowrap px-2 py-2"><FaEdit /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="Teachers availabilities"></div>

      <p>
        
      </p>
    </div>
  );
}

export default Teachers;
