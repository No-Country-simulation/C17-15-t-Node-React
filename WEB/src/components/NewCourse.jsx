import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import { useState } from "react";

export const NewCourse = () => {
  const [datosCurso, setDatosCurso] = useState({
    nombre: "",
    materia: "",
    duracion: "",
    idioma: "",
    nivel: "",
    precio: "",
    nivelesSeleccionados: [],
  });

  const manejarCambio = (evento) => {
    const { name, value, checked } = evento.target;
    if (name === "nivel") {
      setDatosCurso({
        ...datosCurso,
        nivel: value,
      });
    } else if (name === "nivelesSeleccionados") {
      const nuevosNiveles = [...datosCurso.nivelesSeleccionados];
      if (checked) {
        nuevosNiveles.push(value);
      } else {
        const indice = nuevosNiveles.indexOf(value);
        nuevosNiveles.splice(indice, 1);
      }
      setDatosCurso({
        ...datosCurso,
        nivelesSeleccionados: nuevosNiveles,
      });
    } else {
      setDatosCurso({
        ...datosCurso,
        [name]: value,
      });
    }
  };

  const enviarFormulario = async (evento) => {
    evento.preventDefault();
  
    const cuerpoPeticion = {
      ...datosCurso,
    };
  
    try {
      const respuesta = await fetch(
        "https://c17-15-t-node-react.onrender.com/api/courses",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cuerpoPeticion),
        }
      );
  
      if (respuesta.ok) {
        console.log("¡Curso creado exitosamente!");
        setDatosCurso({
          nombre: "",
          materia: "",
          duracion: "",
          idioma: "",
          nivel: "",
          precio: "",
          nivelesSeleccionados: [],
        });
      } else {
        console.error("Error al crear el curso:", respuesta.status);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

 
  return (
    <div className="w-[90%] bg-blue-gray-50 my-10 rounded-md">
      <div>
        <Card color="transparent" shadow={false} className="p-8">
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-center text-5xl"
          >
            Nuevo Curso
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Ingresa los datos
          </Typography>
          <form
            onSubmit={enviarFormulario}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
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
                name="nombre"
                value={datosCurso.nombre}
                onChange={manejarCambio}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Materia
              </Typography>
              <Input
                size="lg"
                placeholder="Materia"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                name="materia"
                value={datosCurso.materia}
                onChange={manejarCambio}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Duración
              </Typography>
              <Input
                size="lg"
                placeholder="Duración"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                name="duracion"
                value={datosCurso.duracion}
                onChange={manejarCambio}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Lenguaje
              </Typography>
              <Input
                size="lg"
                placeholder="Lenguaje"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                name="lenguaje"
                value={datosCurso.lenguaje}
                onChange={manejarCambio}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Nivel
              </Typography>
              <div className="flex justify-around">
                <Checkbox
                  label={
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center font-normal"
                    >
                      Advanced
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                  name="nivelesSeleccionados"
                  value="Advanced"
                  checked={datosCurso.nivelesSeleccionados.includes("Advanced")}
                  onChange={manejarCambio}
                />
                <Checkbox
                  label={
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center font-normal"
                    >
                      Intermediate
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                  name="nivelesSeleccionados"
                  value="Intermediate"
                  checked={datosCurso.nivelesSeleccionados.includes("Intermediate")}
                  onChange={manejarCambio}
                />
                <Checkbox
                  label={
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center font-normal"
                    >
                      Beginner
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                  name="nivelesSeleccionados"
                  value="Beginner"
                  checked={datosCurso.nivelesSeleccionados.includes("Beginner")}
                  onChange={manejarCambio}
                />
              </div>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Precio
              </Typography>
              <Input
                size="lg"
                placeholder="Precio"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                name="precio"
                value={datosCurso.precio}
                onChange={manejarCambio}
              />
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
      <div></div>
    </div>
  );
};
