
import React, { useState } from "react";
import {
  Card,
  Input,
  Radio,
  Checkbox,
  Button,
  Typography,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import axios from "axios";
import { useUser } from "../../context/userProvider";
import API_URL from "../../config/Config";

export function LogInSignUp({ signInit }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState('student');
  const [password, setPass] = useState("");
  const [signIn, setSignIn] = useState(signInit);
  const { user, updateUser } = useUser();


  const handleSignUp = async () => {
    try {
      const response = await axios.post(`${API_URL}auth/register`, {
        firstName,
        lastName,
        email,
        role,
        password, 
        
      });
      // Verifica si la solicitud de inicio de sesión fue exitosa
      if (response.status === 200) {
        // Actualiza los datos del usuario utilizando la función proporcionada por el contexto
        const userStringgify = JSON.stringify(response.data.user);
        updateUser(userStringgify);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", userStringgify);
        console.log(user);
      } else {
        // Maneja errores si el inicio de sesión no fue exitoso
        console.error("Inicio de sesión fallido");
      }
    } catch (error) {
      // Maneja errores de red u otros errores
      console.error("Error al iniciar sesión:", error);
    }
  };

  const handleSignIn = async () => {
    try {
      const response = await axios.post(`${API_URL}auth/login`, {
        email,
        password,
      });
      // Verifica si la solicitud de inicio de sesión fue exitosa
      if (response.status === 200) {
        // Actualiza los datos del usuario utilizando la función proporcionada por el contexto
        const userStringgify = JSON.stringify(response.data.user);
        updateUser(userStringgify);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", userStringgify);
        console.log(user);
      } else {
        // Maneja errores si el inicio de sesión no fue exitoso
        console.error("Inicio de sesión fallido");
      }
    } catch (error) {
      // Maneja errores de red u otros errores
      console.error("Error al iniciar sesión:", error);
    }
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
            {/* <div className="flex items-center justify-center gap-4 border rounded-md border-gray-400">
              <Typography variant="h7" color="gray">
                Rol:
              </Typography>
              <Radio name="type" label="Estudiante" checked={role === 'student'} onChange={() => setRole('student')} />
              <Radio name="type" label="Tutor" checked={role === 'tutor'} onChange={() => setRole('tutor')} />
            </div> */}
            <Input label="Nombre" size="lg" value={firstName}
              onChange={(e) => setFirstName(e.target.value)} />
            <Input label="Apellido" size="lg" value={lastName}
              onChange={(e) => setLastName(e.target.value)} />
          </CardBody>
        )}
        <CardBody className="flex flex-col gap-4 -mt-8">
          <Input label="Correo Electronico" type="email" size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input
            label="Contraseña"
            type="password"
            size="lg"
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
