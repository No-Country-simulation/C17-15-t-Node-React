import "./App.css";
import { Footer } from "./components/Footer";
import { Testimonial } from "./components/Testimonial";
import { Navbar } from "./components/Navbar";
import MenuTutorias from "./components/MenuTutorias";
import ProfesorDestacado from "./components/ProfesorDestacado";

const App = () => {
  //ejemplo de props porfesor desatacado
  const ejemploProfesor = {
    name: "Juan Pérez",
    phrase: "¡La educación es la clave del éxito!",
    img: "https://www.educapeques.com/wp-content/uploads/2015/11/009DDF63-8267-484C-B115-F1AA51450099-1024x604.jpg.webp",
    whatsnumber: "+1234567890",
    tool: "Google Classroom",
    whytool:
      "Porque facilita la gestión de clases y la interacción con los estudiantes.",
  };
  return (
    <>
      <Navbar></Navbar>
      <Testimonial />
      <ProfesorDestacado
        name={ejemploProfesor.name}
        phrase={ejemploProfesor.phrase}
        img={ejemploProfesor.img}
        whatsnumber={ejemploProfesor.whatsnumber}
        tool={ejemploProfesor.tool}
        whytool={ejemploProfesor.whytool}
      />
      <MenuTutorias></MenuTutorias>

      <Footer />
    </>
  );
};

export default App;
