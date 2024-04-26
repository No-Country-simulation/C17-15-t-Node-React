import { Spinner, Typography } from "@material-tailwind/react";
import capFirstLetter from "../../utils/capFirstLetter";
import { useUser } from "../../context/userProvider";
import { ButtonNavBar } from "../NavBar/ButtonNavBar";
import { LogInSignUp } from "../NavBar/LogInSignUp";
import axios from "axios";
import API_URL from "../../config/Config";
/* eslint-disable react/prop-types */
export const CourseDetail = ({ courseInfo, cid }) => {
  const { user } = useUser();
  const userData = user;

  if (!courseInfo) {
    return (
      <Spinner /> //aquí iría un componente personalizado de carga
    );
  } else {
    const {
      title,
      tutor_id,
      description,
      price,
      level,
      thumbnail,
      duration,
      enrolled_students,
      ratings,
    } = courseInfo;


    const handleAgregar = async () => {
      try {
        const response = await axios.post(`${API_URL}/courses/addStudent/${cid}`, userData)
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }

    return (
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-10 mb-10 pt-5 pb-5 md:w-5/5 lg:w-3/4">
        <div className="text-4xl font-extrabold text-center mb-4 sm:text-6xl">
          <span className=" bg-clip-text text-transparent text-center bg-gradient-to-br from-primary to-secondary">
            Información del Curso
          </span>
        </div>
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
              <h2 className="text-gray-900 text-2xl font-bold mb-2">
                {title.toUpperCase()}
              </h2>
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
    
            {/* {courseInfo.enrolled_students && courseInfo.enrolled_students.length > 0 && (
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
            )} */}
    
            {user ? (
              <div className="text-center">
                <button onClick={handleAgregar}
                  className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 mt-3 md:mt-5"
                  // onClick={handleInscribirmeClick} // Agrega un manejador de clics aquí
                >
                  INSCRIBIRME
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-gray-900 text-xl text-center font-bold mb-2">
                  Debe Registrarse o Iniciar Sesión
                </h2>
                <div className="flex items-center justify-center gap-x-4">
                  <ButtonNavBar
                    buttonText="Regístrate"
                    dialogContent={<LogInSignUp signInit={false} />}
                    size="md"
                  />
                  <ButtonNavBar
                    buttonText="Inicia Sesión"
                    dialogContent={<LogInSignUp signInit={true} />}
                    size="md"
                  />
                </div>
              </>
            )}
    
            <div className="border-t-2 border-gray-200 pt-4 mt-4">
              <h3 className="text-xl font-semibold mb-2">Opiniones:</h3>
              {ratings.map((rating, index) => (
                <div key={index} className="border-b-2 border-gray-200 pb-2 mb-2">
                  <p>{rating.comment}</p>
                  <div className="flex items-center">
                    {[...Array(rating.rating)].map((_, i) => (
                      <svg
                      key={i}
                      className="h-6 w-6 fill-current text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2.5a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L10 15.347l-3.766 1.98a."
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
