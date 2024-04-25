import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import TestimonialCard from "./TestimonialCard";

export function Testimonial() {
  return (
    <div className="flex flex-col p-8 m-auto gap-6 items-center justify-center ">
      <div className="flex flex-col items-center justify-center">
        <div className="text-4xl text-center font-extrabold mb-8 sm:text-6xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary ">
            Testimonios que inspiran
          </span>
        </div>
        <Typography variant="h4" className="mb-5 text-center ">
          Descubre lo que dicen nuestros estudiantes sobre sus experiencias con
          MasterAula
        </Typography>
      </div>

      <div className="flex flex-wrap p-2 m-auto gap-6 justify-center">
        <TestimonialCard
          avatarSrc="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
          avatarAlt="Angie Rodriguez"
          title="Angie Rodriguez"
          subtitle="Argentina"
          bodyText="Tenia problemas con matematicas por suerte encontre un tutor que me ayudo con la materia y pase el examen. Gracias MasterAula"
          cardClassName="my-custom-card"
          headerClassName="my-custom-header"
        />
        <TestimonialCard
          avatarSrc="https://docs.material-tailwind.com/img/face-2.jpg"
          avatarAlt="Luis Garcia"
          title="Luis Garcia"
          subtitle="Uruguay"
          bodyText="Me encanto como impartio clases el tutor. El curso de SQL tomo todos los topicos fue genial"
          cardClassName="my-custom-card"
          headerClassName="my-custom-header"
        />
        <TestimonialCard
          avatarSrc="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          avatarAlt="Javier Roldan"
          title="Javier Roldan"
          subtitle="Chile"
          bodyText="Consegui pasar el examen de Ingles, gracias al tutor de esta plataforma. Genial lo rapido que pude conseguir el tutor. Muchas gracias"
          cardClassName="my-custom-card"
          headerClassName="my-custom-header"
        />
      </div>
    </div>
  );
}
