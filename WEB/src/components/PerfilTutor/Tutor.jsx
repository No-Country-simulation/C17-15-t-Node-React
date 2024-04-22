import React from "react";
import { Spinner } from "@material-tailwind/react";

export default function Tutor({ tutorInfo, loading }) {
  return (
    <div>
      {loading ? (
        <Spinner color="blue" size="xl" />
      ) : (
        <div>
          {tutorInfo ? (
            <div>
              <h2>{`Tutor: ${tutorInfo.name} ${tutorInfo.lastName}`}</h2>
              <img src={tutorInfo.photo} alt={`Photo of ${tutorInfo.name}`} />
              <h3>Estudiantes Aceptados:</h3>
              <ul>
                {tutorInfo.students && tutorInfo.students.accepted && tutorInfo.students.accepted.map((student) => (
                  <li key={student._id}>{`${student.name} ${student.lastName}`}</li>
                ))}
              </ul>
              <h3>Estudiantes Pendientes:</h3>
              <ul>
                {tutorInfo.students && tutorInfo.students.pending && tutorInfo.students.pending.map((student) => (
                  <li key={student._id}>{`${student.name} ${student.lastName}`}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No se encontró información para este tutor.</p>
          )}
        </div>
      )}
    </div>
  );
}
