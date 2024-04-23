import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";

export function LogInSignUp({ signInit, onChangeSignIn }) {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [signIn, setSignIn] = useState(signInit);

  const handleSignUp = () => {
    // Aquí puedes enviar los datos del formulario al backend para el registro
    console.log("Registrando usuario:", {
      fullName,
      email,
      password,
    });
  };

  const handleSignIn = () => {
    // Aquí puedes enviar los datos del formulario al backend para el registro
    console.log("Logueando usuario:", {
      email,
      password,
    });
  };

  const handleChangeSignIn = () => {
    setSignIn(!signIn);
    
  };

  return (
    <Card color="transparent" shadow={false} className="mt-7">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center bg-gradient-to-tr from-primary to-secondary"
      >
        <Typography variant="h4" color="white">
          {signIn ? "Inicia sesión" : "Registrate"}
        </Typography>
      </CardHeader>


      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        {!signIn && (

          <CardBody className="flex flex-col gap-4 -mt-8">
            <Input label="Nombre y Apellido" size="lg" value={fullName}
              onChange={(e) => setFullName(e.target.value)} />
          </CardBody>

        )}
        <CardBody className="flex flex-col gap-4 -mt-8">

          <Input label="Correo Electronico" type="email" size="lg" value={email} onChange={(e) => setEmail(e.target.value)}  />

          <Input
            label="Contraseña"
            type="password"
            size="lg"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPass(e.target.value)} 
          />
        </CardBody>
        {!signIn && (
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
        )}
        <Button
          className="mt-6 bg-gradient-to-tr from-primary to-secondary"
          fullWidth
          onClick={signIn ? handleSignIn : handleSignUp}
        >
          {signIn ? "Sign in" : "Sign up"}
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          {signIn ? "No tienes una cuenta? " : "Ya tienes una cuenta? "}
          <a
            href="#"
            className="font-medium text-primary"
            onClick={handleChangeSignIn}
          >
            {signIn ? "Registrate" : "Sign In"}
          </a>
        </Typography>
      </form>
    </Card>
   
  );
}
