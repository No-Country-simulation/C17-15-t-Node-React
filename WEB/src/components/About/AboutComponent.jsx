import { Typography } from "@material-tailwind/react";
import { OurTeam } from "./OurTeam";

export const AboutComponent = () => {
  return (
    <div className="flex flex-col m-auto w-[90%] justify-center items-center">
      <div>
        <div className="text-6xl font-extrabold mb-8 mt-[100px] text-center">
          <span className="bg-clip-text text-transparent text-center bg-gradient-to-br from-primary to-secondary">
            Sobre Nosotros
          </span>
        </div>
        <Typography variant="h3" className="text-center">
          Más que cursos, una experiencia de aprendizaje
        </Typography>
        <div className="flex w-[70%] items-center m-auto gap-6 py-12">
          <div className="flex flex-col gap-5">
            <div>
              <Typography variant="h4">Misión</Typography>
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
          className="text-center w-[80%] m-auto my-12 font-normal"
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
