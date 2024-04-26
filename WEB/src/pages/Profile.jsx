import React, { useEffect, useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { fetchCourseData } from "../services/api";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";
import Loader from "/src/components/Loader";
export function Profile() {
  const [userData, setUserData] = useState(null);
  const [courseData, setCourseData] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseData = await fetchCourseData();
        console.log(courseData.response.docs);
        setCourseData(courseData.response.docs);
        setIsLoading(false);
      } catch (error) {
        // Manejar el error
        console.error(
          "Hubo un error al obtener la información del usuario:",
          error
        );
      }
    };

    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }

    // Llamar a fetchData después de haber establecido los datos del usuario
    if (storedUserData) {
      fetchData();
    }
  }, []);
  // Función para manejar el clic en el enlace del curso y actualizar el estado del curso seleccionado
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };
  if (!userData) {
    return <div>Cargando...</div>;
  }
  return (
    <div className="flex flex-col lg:flex-row p-8 m-auto gap-8 justify-center ">
      {/* Caja del Perfil */}
      <Card className="w-full  lg:w-1/2 p-2 flex flex-col items-center ">
        {/* Encabezado */}
        <div className=" rounded-md w-full px-4 py-4 text-center">
          <h1 className="text-2xl mb-6 font-semibold">
            {userData?.role === "tutor" ? "TUTOR" : "ESTUDIANTE"}
          </h1>
          <hr></hr>
        </div>
        {/* Contenido del perfil */}
        <div className="p-1 h-full flex flex-col  justify-center lg:gap-10">
          <div className="p-2 flex flex-row items-center ">
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
          <Card className="mt-6 max-w-full max-h-full shadow-none">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Información adicional
              </Typography>
              <div className=" p-4 rounded-md">
                <p variant="h6" color="blue-gray" className="mb-2 inline-block">
                  Educación: {userData?.educational_level}
                </p>
                <hr />
                {userData?.role === "tutor" ? (
                  <>
                    <p className="mb-2 ">Especialidades:</p>
                    <div className="flex gap-2 flex-wrap">
                      {userData.specialties &&
                      userData.specialties.length > 0 ? (
                        userData.specialties.map((specialtie, index) => (
                          <Chip
                            key={index}
                            value={specialtie}
                            className="mb-3 bg-gradient-to-br from-primary to-secondary"
                          ></Chip>
                        ))
                      ) : (
                        <p>No hay especialidades disponibles.</p>
                      )}
                    </div>
                    <hr />
                    <p className="mt-2 inline-block">
                      Biografía: {userData?.biography}
                    </p>
                    <hr />
                  </>
                ) : (
                  <>
                    <p className="mt-2 inline-block">Intereses:</p>
                    <div className="flex gap-2 flex-wrap">
                      {userData.interests && userData.interests.length > 0 ? (
                        userData.interests.map((interest, index) => (
                          <Chip
                            key={index}
                            value={interest}
                            className="mb-3 bg-gradient-to-br from-primary to-secondary"
                          ></Chip>
                        ))
                      ) : (
                        <li>No hay intereses disponibles.</li>
                      )}
                    </div>
                    <hr />

                    <p className="mt-2 inline-block">
                      Nivel Educativo: {userData?.educational_level}
                    </p>
                    <hr />
                  </>
                )}
                <p className="mt-2 inline-block">
                  Idioma: {userData?.language}
                </p>
                <hr />
                <p className="mt-2 inline-block">Ciudad: {userData?.city}</p>
                <hr />
                <p className="mt-2 inline-block">Pais: {userData?.country}</p>
                <hr />
              </div>
            </CardBody>
          </Card>
        </div>
      </Card>
      {/* Caja de Cursos */}
      <Card className="w-full max-h-svh lg:w-1/2 p-5 flex flex-col items-center">
        {/* Encabezado */}
        <div className="rounded-md w-full px-4 py-4 text-center">
          <h1 className="text-2xl font-semibold mb-6">
            {userData.role === "tutor" ? "Cursos Creados" : "Cursos Inscriptos"}
          </h1>
          <hr></hr>
        </div>
        {/* Contenido del Curso */}
        <div className="flex flex-wrap lg:m-10  overflow-y-auto overflow-x-hidden">
          {isLoading ? (
            <Loader />
          ) : courseData && courseData.length > 0 ? (
            courseData.map((course) => (
              <div
                key={course._id}
                className="mt-6  w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
              >
                <Card className="lg:h-56 pt-3">
                  <CardHeader color="blue-gray" className="mt-0">
                    <img
                      src={course.thumbnail}
                      alt="card-image"
                      className="" // Ajusta las alturas según tus necesidades
                    />
                  </CardHeader>
                  <CardBody>
                    {/* Agrega un enlace para mostrar los detalles del curso solo si el rol es 'student' */}
                    {userData.role === "student" && (
                      <a
                        href="#"
                        className="text-sm font-semibold text-blue-500 hover:underline"
                        onClick={() => handleCourseClick(course)}
                      >
                        Ver Detalles
                      </a>
                    )}
                    <Typography className="text-sm" variant="h3">
                      {course.title}
                    </Typography>
                  </CardBody>
                </Card>
              </div>
            ))
          ) : (
            <p>No hay cursos disponibles.</p>
          )}
        </div>
      </Card>
      {/* Contenido del Curso */}
      <div className="flex flex-wrap lg:m-10 max-h-screen overflow-y-auto overflow-x-hidden">
        {courseData && courseData.length > 0 ? (
          courseData.map(
            (course) =>
              course.tutor_id === userData._id && (
                <div
                  key={course._id}
                  className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
                  onClick={() => handleCourseClick(course)}
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
                  </Card>
                </div>
              )
          )
        ) : (
          <p>No hay cursos disponibles.</p>
        )}
      </div>

      {/* Agrega un enlace para mostrar los detalles del curso solo si el rol es 'student'
                 {userData.role === 'student' && (
                                        <a href="#" className="text-sm font-semibold text-blue-500 hover:underline" onClick={() => handleCourseClick(course)}>Ver Detalles</a>
                                    )} */}

      {/* Detalle del curso seleccionado */}
      {/* {selectedCourse && <CourseDetail courseInfo={selectedCourse} />} */}

      {/* Detalles del Curso */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-lg font-semibold">
              Nombre del tutor: {selectedCourse.tutor_id.name}{" "}
              {selectedCourse.tutor_id.lastName}
            </h2>
            <p>Descripcion: {selectedCourse.tutor_id.biography}</p>
            <p>Email: {selectedCourse.tutor_id.email}</p>
            <img
              src={selectedCourse.tutor_id.photo}
              alt="Tutor"
              className="w-20 h-20 rounded-md border-2 border-secondary mr-4 mb-4"
            />
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={() => setSelectedCourse(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
