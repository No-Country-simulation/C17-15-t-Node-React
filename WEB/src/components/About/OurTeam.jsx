import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const teamData = [
  {
    "id": "1",
    "name": "Vero Eschenmoser",
    "occupation": "Team Leader",
    "image": "https://picsum.photos/200/300?image=1027" 
  },
  {
    "id": "2",
    "name": "Facundo Medina",
    "occupation": "Back-end",
    "image": "fotoFacu.jpeg" 
  },
  {
    "id": "3",
    "name": "Agustin Barrera",
    "occupation": "Back-end",
    "image": "https://picsum.photos/200/300?image=1027" 
  },
  {
    "id": "4",
    "name": "Santiago Moreno",
    "occupation": "Tester",
    "image": "SantiMoreno.jpeg" 
  },
  {
    "id": "5",
    "name": "Juan Pintos",
    "occupation": "Back-end",
    "image": "JuanPintos.jpeg" 
  },
  {
    "id": "6",
    "name": "Santiago Acuña",
    "occupation": "Back-end",
    "image": "https://picsum.photos/200/300?image=1027" 
  },
  {
    "id": "7",
    "name": "Emanuel Enriquez",
    "occupation": "Front-end",
    "image": "EmanuelEnriquez.jpeg" 
  },
  {
    "id": "8",
    "name": "Yesica Blanco",
    "occupation": "Front-end",
    "image": "fotoYesica.jpg" 
  },
  {
    "id": "9",
    "name": "Adrian Isaac",
    "occupation": "Front-end",
    "image": "fotoAdrian.png" 
  },
  {
    "id": "10",
    "name": "Josue Figueroa",
    "occupation": "Front-end",
    "image": "fotoJosue.jpg" 
  },
];


export const OurTeam = () => {
  return (
    <div>
      <div>
        <div className="text-4xl font-extrabold mb-8 mt-[100px] text-center sm:text-6xl">
          <span className="bg-clip-text text-transparent text-center bg-gradient-to-br from-primary to-secondary">
            Nuestro Equipo
          </span>
        </div>
        <Typography variant="h3" className="text-center text-2xl sm:text-3xl">
          Más que cursos, una experiencia de aprendizaje
        </Typography>
      </div>

      <div className="flex flex-wrap gap-4 justify-center m-auto w-[60%] my-10  sm:w-[90%]">
        {teamData.map((person) =>(
          
        <Card key={person.id} className="w-80 bg-gray-100">
          <CardHeader floated={false} className="h-50 sm:h-80 ">
            <img
              src={person.image}
              alt="profile-picture"
              className="object-cover w-full h-full m-auto"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="text-md my-1 sm:my-1 sm:text-2xl">
              {person.name}
            </Typography>
            <Typography color="blue-gray" className="font-medium my-1 sm:my-1" textGradient>
              {person.occupation}
            </Typography>
          </CardBody>
        </Card>
        ))}
      </div>
    </div>
  );
};
