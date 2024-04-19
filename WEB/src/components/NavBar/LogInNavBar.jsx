import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
   
  export function LogInNavBar() {
    return (
      <Card className="w-96 mt-10">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center bg-gradient-to-tr from-primary to-secondary"
        >
          <Typography variant="h3" color="white">
            Log In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Correo electrónico" size="lg" />
          <Input label="Contraseña" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Recuerda mis datos" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth className="bg-gradient-to-tr from-primary to-secondary">
            Log In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            No tienes una cuenta?
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="Primary"
              className="ml-1 font-bold text-primary"
            >
              Regístrate
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    );
  }
