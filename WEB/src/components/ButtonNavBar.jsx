import React from "react";
import {
  Button,
  Dialog,
} from "@material-tailwind/react";

export function ButtonNavBar({ buttonText, dialogContent, size }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="gradient"
        color="purple"
        size={size}
         // Aquí pasamos el tamaño del botón como una prop
      >
        {buttonText}
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="flex flex-col justify-center items-center p-5"
      >
        <img
          src="./src/assets/LogoFondoBlanco.png"
          alt="image 1"
          className="object-cover w-20 justify-start"
        />
        {dialogContent}
      </Dialog>
    </>
  );
}


