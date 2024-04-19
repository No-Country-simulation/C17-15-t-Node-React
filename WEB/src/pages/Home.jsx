import "../App.css";

import { Testimonial } from "../components/Testimonials/Testimonial";
import MenuTutorias from "../components/MenuTutorias";
import ProfesorDestacado from "../components/ProfesorDestacado";
import { Banner } from "../components/Banner/Banner";

export default function Home() {
  const profesorDatos = {
    name: "Dr. Juan Pérez",
    phrase: "¡La educación transforma vidas!",
    img: "https://img.huffingtonpost.es/files/image_720_480/uploads/2023/10/13/foto-de-archivo-de-una-profesora.jpeg",
    whatsnumber: "+1234567890",
    tool: "Google Classroom",
    whytool:
      "Es una herramienta versátil que facilita la gestión del aula virtual y promueve la interacción entre estudiantes.",
  };
  return (
    <>
      <Banner />
      <ProfesorDestacado
        name={profesorDatos.name}
        phrase={profesorDatos.phrase}
        img={profesorDatos.img}
        whatsnumber={profesorDatos.whatsnumber}
        tool={profesorDatos.tool}
        whytool={profesorDatos.whytool}
      />
      ,{/*<MenuTutorias></MenuTutorias>*/}
      <Testimonial />
    </>
  );
}
