import { Typography } from "@material-tailwind/react";
import { OurTeam } from "./OurTeam";
import { NewCourse } from "../NewCourse/NewCourse";

export const AboutComponent = () => {
  return (
    <div className="flex flex-col m-auto w-[90%] justify-center items-center">
      <div>
        <div className="text-4xl font-extrabold mb-8 mt-[100px] text-center sm:text-6xl">
          <span className="bg-clip-text text-transparent text-center bg-gradient-to-br from-primary to-secondary">
            Sobre Nosotros
          </span>
        </div>
        <Typography variant="h3" className="text-center text-xl sm:text-3xl">
          Más que cursos, una experiencia de aprendizaje
        </Typography>
        <div className="flex flex-wrap w-[90%] text-center items-center m-auto gap-6 py-12 sm:flex sm:flex-nowrap sm:w-[70%] sm:text-start">
          <div className="flex flex-col gap-5">
            <div>
              <Typography variant="h4" className="text-center sm:text-start">Misión</Typography>
              <Typography variant="h5" className="font-light">
                En MasterAula, estamos apasionados por hacer que la educación
                sea accesible y efectiva para todos. Creemos que el conocimiento
                es la clave para el empoderamiento personal y el desarrollo
                social. Por eso, nos dedicamos a crear tutorías y cursos en
                línea de alta calidad que sean accesibles, flexibles y
                relevantes para las necesidades de nuestros estudiantes.
              </Typography>
            </div>
            <div>
              <img src="/VisionA.png" alt="Mision" />
            </div>
          </div>
          <div>
            <div>
              <img src="/MisionA.png" alt="Mision" />
            </div>
            <div>
              <Typography variant="h4">Visión</Typography>
              <Typography variant="h5" className="font-light">
                Aspiramos a ser la plataforma líder de educación en línea en
                español, reconocida por su excelencia académica, innovación y
                compromiso con la transformación social. Queremos crear un
                impacto positivo en el mundo al brindar a las personas las
                herramientas y el conocimiento que necesitan para alcanzar su
                máximo potencial.
              </Typography>
            </div>
          </div>
        </div>
        <div className="w-[80%] mt-10"></div>
        <Typography
          variant="h3"
          className="text-center text-2xl font-semibold w-[80%] m-auto my-12 sm:font-semibold sm:text-4xl"
        >
          En MasterAula, creemos que todos tienen el potencial de aprender y
          crecer. Estamos aquí para brindarle las herramientas y el apoyo que
          necesita para alcanzar sus metas.
        </Typography>
      </div>
      <OurTeam />
    </div>
  );
};
