import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function SeacrhCourses() {
  const [originalCourses, setOriginalCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "https://c17-15-t-node-react.onrender.com/api/courses"
        );
        if (!response.ok) {
          throw new Error("Error al obtener los cursos");
        }
        const responseData = await response.json();
        console.log(responseData.response.docs)
        let coursesData = [];

        // Verificar el formato de la respuesta
        if (responseData.statusCode === 200 && Array.isArray(responseData.response.docs)) {
          // Si la respuesta tiene statusCode 200 y contiene un array de cursos
          coursesData = responseData.response.docs;
          setOriginalCourses(coursesData); // Guardar los cursos originales
          setCourses(coursesData)
        } else {
          throw new Error("Los datos recibidos no son válidos");
        }

        setCourses(coursesData);
      } catch (error) {
        console.error("Hubo un error:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    // Si el término de búsqueda está vacío, restaurar los cursos originales
    if (!searchTerm.trim()) {
      setCourses(originalCourses);
    } else {
      // Filtrar los cursos basados en el término de búsqueda
      const filteredCourses = originalCourses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      // Actualizar el estado con los cursos filtrados
      setCourses(filteredCourses);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
      <div className="text-6xl font-extrabold mb-8 mt-[100px]">
          <span className="bg-clip-text text-transparent text-center bg-gradient-to-br from-primary to-secondary">Cursos Online</span>
        </div>
        <Typography variant="h3" className="text-center">
            Más que cursos, una experiencia de aprendizaje
        </Typography>
        <div className="mt-8 borde-2 border-gray-600 w-[900px]">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Buscar cursos"
            className="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none shadow-md p-4"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-10 p-10 mx-[170px]">
        {courses.map((course) => (
          <Card key={course._id} className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56  ">
              <img
                src={course.thumbnail}
                alt="card-image"
                className="object-cover w-full h-full"
              />
            </CardHeader>
            <CardBody className="h-[250px]" >
              <Typography variant="h3">{course.title}</Typography>

              <Typography className="">{course.description}</Typography>
            </CardBody>
            <CardFooter className="pt-0 flex items-end bottom-0">
              <Button className="bg-gradient-to-tr from-primary to-secondary text-md">{`$ ${course.price}`}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
