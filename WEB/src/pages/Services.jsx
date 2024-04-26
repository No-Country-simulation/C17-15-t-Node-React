import { Typography } from "@material-tailwind/react";

export const Services = () => {
  return (
    <div className="flex flex-col m-auto w-[90%] justify-center items-center">
      <div>
        <div className="text-4xl font-extrabold mb-8 mt-[100px] text-center sm:text-6xl">
          <span className="bg-clip-text text-transparent text-center bg-gradient-to-br from-primary to-secondary">
          MasterAula - Nuestros Servicios
          </span>
        </div>

        <div className="flex flex-wrap w-[90%] text-center items-center m-auto gap-6 py-12 sm:flex sm:flex-nowrap sm:w-[70%] sm:text-start">
          <div className="flex flex-col gap-5">
            <div>
              <Typography variant="h4" className="text-center sm:text-start">Tutorías Personalizadas</Typography>
              <Typography variant="h5" className="font-light">
              Nuestros tutores altamente cualificados están disponibles para brindarte apoyo individualizado en una variedad de temas y niveles educativos...
              </Typography>
            </div>
            <div>
              <img src="/tutoriasPersonalizadas.jpg" alt="Mision" />
            </div>
          </div>

          <div>
            <div>
              <img src="/cursosInteractivos.jpg" alt="Mision" />
            </div>
            <div>
              <Typography variant="h4">Cursos Interactivos</Typography>
              <Typography variant="h5" className="font-light">
              Sumérgete en nuestros cursos en línea interactivos, diseñados para ofrecer una experiencia de aprendizaje inmersiva y efectiva...
              </Typography>
            </div>
          </div>
          

        </div>
        <div className="w-[80%] mt-10"></div>
      </div>
    </div>
  );
};
