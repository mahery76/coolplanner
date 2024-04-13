"use client";
import React, { useEffect, useState } from "react";
import { apiUrl } from "../../_lib/ipAddress";
import { getData } from "../../_lib/fetchData";
import { FaEdit, FaTrash } from "react-icons/fa";
import { db } from "../../_lib/indexedDb";

function Teachers() {
  // this insert all default data to indexedDb

  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    // getData(`${apiUrl}/teachers`).then((res: any) => {
    //   console.log(res);
    //   setTeachers(res.data.teachers);
    // });
    db.teachers.toArray().then(setTeachers);
  }, []);
  return (
    <div className="">
      {/*   new teacher creation section */}
      {/* <div className="insertion">
        <h2>Créer nouvel Enseignant</h2>
      </div> */}

      {/*   Teachers list section */}
      <h2>Listes des Enseignants</h2>
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
                <td className="whitespace-nowrap px-4 py-2">
                  {teacher.teacher_name}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  {teacher.teacher_title}
                </td>
                <td className="whitespace-nowrap px-2 py-2">
                  <FaTrash />
                </td>
                <td className="whitespace-nowrap px-2 py-2">
                  <FaEdit />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*   teacher availabilities section */}
      <div className="mt-4">
        <h2>Les disponibilités des Enseignants</h2>
        
      </div>

      <p></p>
    </div>
  );
}

export default Teachers;
