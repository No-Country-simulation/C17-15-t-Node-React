import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export function RegistrateNavBar() {
    return (
       <Card color="transparent" shadow={false} className="mt-7">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Registrate en Masteraula
        </Typography>
        <Typography color="gray" className="mt-2 font-normal text-center">
          Ingresa tus datos
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Tu nombre
            </Typography>
            <Input
              size="lg"
              placeholder="Nombre"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Tu correo electrónico
            </Typography>
            <Input
              size="lg"
              placeholder="nombre@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Contraseña
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                Estoy de acuerdo con los
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-primary"
                >
                  &nbsp;Terminos y condiciones
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6 bg-gradient-to-tr from-primary to-secondary" fullWidth>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Ya tienes una cuenta?{" "}
            <a href="#" className="font-medium text-primary ">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    );
  }