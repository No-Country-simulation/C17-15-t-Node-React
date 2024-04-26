import React, { useEffect, useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { fetchCourseData } from "../services/api";
import { Card, Typography } from "@material-tailwind/react";
import { useUser } from "../context/userProvider";
import { ButtonNewCourse } from "../components/NewCourse/ButtonNewCourse";

export function Profile() {
  const [courseData, setCourseData] = useState(null);
  const { user } = useUser();

  const userData = user;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseData = await fetchCourseData();
        console.log(courseData);
        setCourseData(courseData.response.docs);
      } catch (error) {
        // Manejar el error
        console.error(
          "Hubo un error al obtener la información del usuario:",
          error
        );
      }
    };

    fetchData();
  }, []);
  if (!userData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row p-8 m-auto gap-8 justify-center ">
      {/* Caja del Perfil */}
      <div className="w-full lg:w-1/2 p-2 flex flex-col items-center border-2 rounded-md border-secondary">
        {/* Encabezado */}
        <div className="bg-primary rounded-md text-white px-4 py-6">
          <h1 className="text-2xl  font-semibold">
            {userData?.role.toUpperCase()}
          </h1>
        </div>
        {/* Contenido del perfil */}
        <div className="p-2">
          <div className="p-2 flex flex-col items-center sm:flex-row sm:items-center ">
            <img
              src={userData?.photo}
              alt="Avatar"
              className="w-20 h-20 rounded-md border-2 border-secondary mr-4 mb-4"
            />
            <div>
              <h2 className="text-xl font-semibold">
                {userData?.name} {userData?.lastName}
              </h2>
              <p className="text-gray-600">
                Correo electrónico: {userData?.email}
              </p>
            </div>
          </div>
          {/* Otras secciones del perfil */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">
              Información adicional
            </h3>
            <div className="bg-gray-200 p-4 rounded-md">
              <h2 className="text-xl font-semibold">
                Educación: {userData?.educational_level}
              </h2>
              <div>
                {userData?.role === "tutor" ? (
                  <>
                    <p>Especialidades:</p>
                    <ul className="w-1/3 text-center">
                      {userData.specialties &&
                      userData.specialties.length > 0 ? (
                        userData.specialties.map((specialtie, index) => (
                          <li
                            key={index}
                            className="p-2 m-2 border rounded-md border-primary"
                          >
                            {specialtie}
                          </li>
                        ))
                      ) : (
                        <li>No hay especialidades disponibles.</li>
                      )}
                    </ul>
                    <p>Biografía: {userData?.biography}</p>

                    <p className="flex items-center -mt-3 -mb-3">
                      <p className="mr-2">Promedio de Calificación:</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, index) => {
                          if (index < Math.floor(userData?.average_rating)) {
                            return (
                              <BsStarFill
                                key={index}
                                className="text-yellow-400"
                              />
                            );
                          } else if (
                            index < Math.ceil(userData?.average_rating)
                          ) {
                            return (
                              <BsStarHalf
                                key={index}
                                className="text-yellow-400"
                              />
                            );
                          } else {
                            return (
                              <BsStarFill
                                key={index}
                                className="text-gray-300"
                              />
                            );
                          }
                        })}
                      </div>
                    </p>
                  </>
                ) : (
                  <>
                    <p>Intereses:</p>
                    <ul className="w-1/3 text-center">
                      {userData.interests && userData.interests.length > 0 ? (
                        userData.interests.map((interest, index) => (
                          <li
                            key={index}
                            className="p-2 m-2 border rounded-md border-primary"
                          >
                            {interest}
                          </li>
                        ))
                      ) : (
                        <li>No hay intereses disponibles.</li>
                      )}
                    </ul>
                    <p>Nivel Educativo: {userData?.educational_level}</p>
                  </>
                )}
              </div>
              <p>Idioma: {userData?.language}</p>
              <p>Ciudad: {userData?.city}</p>
              <p>Pais: {userData?.country}</p>
            </div>
            <div className="my-10 flex justify-center">
                <ButtonNewCourse />
            </div>
          </div>
        </div>
      </div>
      {/* Caja de Cursos */}
      <div className="w-full lg:w-1/2 p-2 flex flex-col items-center border-2 rounded-md border-secondary">
        {/* Encabezado */}
        <div className="bg-primary rounded-md text-white px-4 py-6">
          <h1 className="text-2xl font-semibold">
            {user.role === "tutor" ? "Cursos Creados" : "Cursos Inscriptos"}
          </h1>
        </div>
        {/* Contenido del Curso */}
        <div className="flex flex-wrap lg:m-10 max-h-screen overflow-y-auto overflow-x-hidden">
          {courseData && courseData.length > 0 ? (
            courseData.map((course) => (
              <div
                key={course._id}
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
              >
                <Card>
                  <img
                    src={course.thumbnail}
                    alt="card-image"
                    className="object-cover w-full max-h-48 md:max-h-56 lg:max-h-64 xl:max-h-72" // Ajusta las alturas según tus necesidades
                  />
                  <Typography className="text-sm" variant="h3">
                    {course.title}
                  </Typography>
                  {/* <h1>Estudiantes</h1>
                                    <h1>{course.enrolled_students}</h1> */}
                </Card>
              </div>
            ))
          ) : (
            <p>No hay cursos disponibles.</p>
          )}
        </div>
      </div>
    </div>
  );
}
