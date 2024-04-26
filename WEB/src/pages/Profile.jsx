import React, { useEffect, useState } from 'react';

import { fetchCourseData } from '../services/api';
import { Card, Typography } from "@material-tailwind/react";


export function Profile() {
    const [userData, setUserData] = useState(null);
    const [courseData, setCourseData] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const courseData = await fetchCourseData();
                console.log(courseData.response.docs);
                setCourseData(courseData.response.docs);
            } catch (error) {
                // Manejar el error
                console.error("Hubo un error al obtener la información del usuario:", error);
            }
        };

        const storedUserData = localStorage.getItem('user');
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        }

        // Llamar a fetchData después de haber establecido los datos del usuario
        if (storedUserData) {
            fetchData();
        }
    }, []);

    const handleCourseClick = (course) => {
        setSelectedCourse(course);
    };
    if (!userData) {
        return <div>Cargando...</div>;
    }
    

    return (
        <div className="flex flex-col lg:flex-row p-8 m-auto gap-8 justify-center ">
            {/* Caja del Perfil */}
            <div className="w-full lg:w-1/2 p-2 flex flex-col items-center border-2 rounded-md border-secondary">
                {/* Encabezado */}
                <div className="bg-primary rounded-md text-white px-4 py-6">
                    <h1 className="text-2xl  font-semibold"> {userData?.role === 'tutor' ? "TUTOR" : "ESTUDIANTE"}</h1>
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
                            <h2 className="text-xl font-semibold">{userData?.name} {userData?.lastName}</h2>
                            <p className="text-gray-600">Correo electrónico: {userData?.email}</p>
                        </div>
                    </div>
                    {/* Otras secciones del perfil */}
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold mb-4">Información adicional</h3>
                        <div className="bg-gray-200 p-4 rounded-md">
                            <h2 className="text-xl font-semibold">Educación: {userData?.educational_level}</h2>
                            <div>
                                {userData?.role === 'tutor' ? (
                                    <>
                                        <p>Especialidades:</p>
                                        <ul className='w-1/3 text-center'>
                                            {userData.specialties && userData.specialties.length > 0 ? (
                                                userData.specialties.map((specialtie, index) => (
                                                    <li key={index} className='p-2 m-2 border rounded-md border-primary'>{specialtie}</li>
                                                ))
                                            ) : (
                                                <li>No hay especialidades disponibles.</li>
                                            )}
                                        </ul>
                                        <p>Biografía: {userData?.biography}</p>
                                    </>
                                ) : (
                                    <>
                                        <p>Intereses:</p>
                                        <ul className='w-1/3 text-center'>
                                            {userData.interests && userData.interests.length > 0 ? (
                                                userData.interests.map((interest, index) => (
                                                    <li key={index} className='p-2 m-2 border rounded-md border-primary'>{interest}</li>
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
                    </div>
                </div>
            </div>
            
            {/* Caja de Cursos */}
            <div className="w-full lg:w-1/2 p-2 flex flex-col items-center border-2 rounded-md border-secondary">
                {/* Encabezado */}
                <div className="bg-primary rounded-md text-white px-4 py-6">
                    <h1 className="text-2xl font-semibold">
                        {userData.role === 'tutor' ? 'Cursos Creados' : 'Cursos Inscriptos'}
                    </h1>
                </div>
                {/* Contenido del Curso */}
                <div className="flex flex-wrap lg:m-10 max-h-screen overflow-y-auto overflow-x-hidden">
                    {courseData && courseData.length > 0 ? (
                        courseData.map((course) => (
                            course.tutor_id === userData._id && (
                            <div key={course._id} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2" onClick={() => handleCourseClick(course)}>
                                <Card>
                                    <img
                                        src={course.thumbnail}
                                        alt="card-image"
                                        className="object-cover w-full max-h-48 md:max-h-56 lg:max-h-64 xl:max-h-72" // Ajusta las alturas según tus necesidades
                                    />
                                   
                                    <Typography className='text-sm' variant="h3">{course.title}</Typography>
                                </Card>
                            </div>
                            )
                        ))
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

            </div>
            {/* Detalles del Curso */}
            {selectedCourse && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-md">
                        <h2 className="text-lg font-semibold">Nombre del tutor: {selectedCourse.tutor_id.name} {selectedCourse.tutor_id.lastName}</h2>
                        <p>Descripcion: {selectedCourse.tutor_id.biography}</p>
                        <p>Email: {selectedCourse.tutor_id.email}</p>
                        <img
                            src={selectedCourse.tutor_id.photo}
                            alt="Tutor"
                            className="w-20 h-20 rounded-md border-2 border-secondary mr-4 mb-4"
                        />
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => setSelectedCourse(null)}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
}
