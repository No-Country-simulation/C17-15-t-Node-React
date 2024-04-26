import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { NewCourse } from "./NewCourse";

export function ButtonNewCourse() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Typography
        onClick={handleOpen}
        as="a"
        color="white"
        variant="gradient"
        className="mb-4 text-center text-lg font-semibold md:mb-0 bg-purple-400 rounded-md p-4"
      >
        Agregar Curso
      </Typography>
      <Dialog open={open} handler={handleOpen} className="bg-gray-50">
        <NewCourse />

        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancelar</span>
        </Button>
      </Dialog>
    </>
  );
}
