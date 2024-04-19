import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";


export const OurTeam = () => {
  return (
    <div>
      <div>
        <div className="text-6xl font-extrabold mb-8 mt-[100px] text-center">
          <span className="bg-clip-text text-transparent text-center bg-gradient-to-br from-primary to-secondary">
            Nuestro Equipo
          </span>
        </div>
        <Typography variant="h3" className="text-center">
          Más que cursos, una experiencia de aprendizaje
        </Typography>
      </div>

      <h1>fotos</h1>

      <div>
        <Card className="w-96">
          <CardHeader floated={false} className="h-80">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Natalie Paisley
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              CEO / Co-Founder
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                color="blue"
                textGradient
              >
                <i className="fab fa-facebook" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="light-blue"
                textGradient
              >
                <i className="fab fa-twitter" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                color="purple"
                textGradient
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
