import "../styles/Contact.css";
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <motion.main
    initial={{opacity:0}}
    animate={{opacity: 1}}
      className="contact-main"
    >
      <div className="flex-contact ">
        <div className="content">
          <div className="title mb-8">
            <h6 className="text-lg text-blue-gray-700 font-semibold">
              ¡Hablemos!
            </h6>
            <h1 className="mt-2 text-2xl lg:text-3xl xl:text-4xl text-blue-gray-900 font-semibold leading-tight">
              Estamos Aquí para Ayudarte a Desbloquear Tu Potencial
            </h1>
          </div>
          <div className="slogan text-blue-gray-700 text-sm lg:text-base xl:text-lg  italic">
            <h3 className="mb-4 lg:mt-3 xl:mt-4 italic">
              Descubre un universo ilimitado en MasterAula con cursos online
              inspiradores y educativos. Accede al conocimiento desde cualquier
              lugar y únete a nuestra comunidad para desbloquear nuevas
              posibilidades. Tu éxito comienza aquí.
            </h3>
          </div>
          <div className="form mt-8">
            <Card color="transparent" shadow={false}>
              <Typography variant="h4" color="blue-gray">
                Ingresa tus datos
              </Typography>
              <form className="w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                  {/*nombre*/}
                  <Input
                    size="lg"
                    placeholder="Nombre"
                    className=" !border-t-blue-gray-200 placeholder-show focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {/*apellido*/}

                  <Input
                    size="lg"
                    variant="outlined"
                    placeholder="Apellido"
                    className=" !border-t-blue-gray-200 placeholder-show focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {/*correo*/}

                  <Input
                    size="lg"
                    variant="outlined"
                    placeholder="Correo Electronico"
                    className=" !border-t-blue-gray-200 placeholder-show focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {/*numero telefonico*/}
                  <Input
                    size="lg"
                    variant="outlined"
                    placeholder="Numero telefonico"
                    className=" !border-t-blue-gray-200 placeholder-show focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  {/*asunto*/}
                  <Textarea label="Message" />
                  {/*pais*/}
                  <div className="w-72">
                    <Select label="Elige tu pais">
                      <Option>Estados Unidos</Option>
                      <Option>China</Option>
                      <Option>India</Option>
                      <Option>Brasil</Option>
                      <Option>Rusia</Option>
                      <Option>Indonesia</Option>
                      <Option>Pakistán</Option>
                      <Option>Nigeria</Option>
                      <Option>Bangladesh</Option>
                      <Option>Japón</Option>
                      <Option>México</Option>
                      <Option>Filipinas</Option>
                      <Option>Egipto</Option>
                      <Option>Etiopía</Option>
                      <Option>Vietnam</Option>
                    </Select>
                  </div>
                </div>
                <Button className="mt-6" fullWidth>
                  Enviar datos
                </Button>
              </form>
            </Card>
          </div>
        </div>
        <div className="logo">
          <img src="public\LogoMasterAula.png" alt="" />
          <h1 className="mt-2 text-blue-gray-900 font-semibold leading-tight">
            Mas que cursos, una experiencia de aprendizaje
          </h1>
        </div>
      </div>
    </motion.main>
  );
}
