import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";

export const NewCourse = () => {
  const [datosCurso, setDatosCurso] = useState({
    title: "",
    language: "",
    duration: "",
    level: "",
    description: "",
    subject_id: "66212ea9b4c6a0a7cb12ad55", // Cambiar con el ID de la materia correspondiente
    status: "disponible",
    price: "",
    thumbnail: "",
  });

  const manejarCambio = (evento) => {
    const { name, value, checked } = evento.target;
    setDatosCurso({
      ...datosCurso,
      [name]: value,
    });
  };

  const enviarFormulario = async (evento) => {
    evento.preventDefault();

    try {
      const response = await axios.post(
        "https://c17-15-t-node-react.onrender.com/api/courses",
        datosCurso
      );
      console.log(response);
      if (response.status === 201) {
        console.log("¡Curso creado exitosamente!");
        setDatosCurso({
          title: "",
          language: "",
          duration: "",
          level: "",
          description: "",
          subject_id: "66212ea9b4c6a0a7cb12ad55",
          status: "disponible",
          price: "",
          thumbnail: "",
        });
      } else {
        console.error("Error al crear el curso:", response.status);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };
 
  return (
    <div className="w-[90%] bg-blue-gray-50">
      <div>
        <Card color="transparent" shadow={false} className="p-8">
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-center text-5xl"
          >
            Nuevo Curso
          </Typography>
          <form
            onSubmit={enviarFormulario}
            className="mt-2 mb-2 max-w-screen-lg sm:w-96"
          >
            <div className="mb-6 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Nombre del curso
              </Typography>
              <Input
                size="lg"
                placeholder="Nombre"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                name="title"
                value={datosCurso.title}
                onChange={manejarCambio}
              />
              {/* Agregar otros campos de entrada */}
            </div>
            <Button
              type="submit"
              size="lg"
              className="mt-6 bg-purple-500"
              fullWidth
            >
              Agregar
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};
