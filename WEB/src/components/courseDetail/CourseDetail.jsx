import { Spinner, Typography } from "@material-tailwind/react";
import capFirstLetter from "../../utils/capFirstLetter";
/* eslint-disable react/prop-types */
export const CourseDetail = ({ courseInfo }) => {
  if (!courseInfo) {
    return (
      <Spinner /> //aquí iría un componente personalizado de carga
    );
  } else {
    const { title, tutor_id, description, price, level, thumbnail, duration, enrolled_students } =
      courseInfo;

    console.log(courseInfo);

    return (


      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-10 mb-10 pt-5 pb-5 md:w-5/5 lg:w-3/4">
        <Typography variant="h3" className="text-center">
          Información de Curso
        </Typography>
        <div className="p-2 md:flex md:items-center md:justify-center border-4 border-primary rounded-lg">
          <div className="md:flex-shrink-0 md:mb-4">
            <img
              className="mr-0 h-48 w-full object-contain md:w-48 sm:mr-auto sm:ml-auto"
              src={thumbnail}
              alt={title}
            />
          </div>
          <div className="p-5 items-center justify-center text-justify md:w-full md:ml-4 md:mt-0 sm:p-6">
            <div className="text-center">
              <h2 className="text-gray-900 text-2xl font-bold mb-2">{title}</h2>
            </div>
            <div className="uppercase tracking-wide text-xs text-indigo-500 font-semibold mb-2">
              Nivel: {level}
            </div>
            <p className="w-5/5 text-gray-700 text-base mb-4 sm:w-5/5">
              {description}
            </p>
            <div className="mb-2">
              <span className="text-black-600 mr-2 font-semibold">Tutor:</span>
              {tutor_id && (
                <span className="text-gray-900">
                  {tutor_id.name} {tutor_id.lastName}

                </span>
              )}

            </div>

            <div className="mb-2">
              <span className="text-black-600 mr-2 font-semibold">Precio:</span>
              <span className="text-gray-900">${price}</span>
            </div>
            <div className="mb-2">
              <span className="text-black-600 mr-2 font-semibold">
                Duración:
              </span>
              <span className="text-gray-900">{duration} semanas</span>
            </div>


            {courseInfo.enrolled_students && courseInfo.enrolled_students.length > 0 && (
              <div>
                <div className="mb-2">
                  <span className="text-black-600 mr-2 font-semibold">
                    Estudiantes:
                  </span>

                </div>
                <ul>
                  {courseInfo.enrolled_students.map(student => (
                    <li key={student._id}>
                      {capFirstLetter(student.name)} {capFirstLetter(student.lastName)}
                    </li>
                  ))}
                </ul>
              </div>
            )
            }
            <div className="text-center">
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 mt-3 md:mt-5">
                INSCRIBIRME
              </button>
            </div>
          </div>
        </div>
      </div>

    );
  }
};
