import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

export default function CourseCard({course, footer}) {
return(
    <Card key={course._id} className="mt-6 w-96 bg-gray-50">
    <CardHeader color="blue-gray" className="relative h-56  ">
      <Link to={`/course/${course._id}`}>
        <img
          src={course.thumbnail}
          alt="card-image"
          className="object-cover w-full h-full"
        />
      </Link>
    </CardHeader>
    <CardBody className="h-[200px] flex flex-col pb-1">
      <div className="flex justify-between items-center">
        <Link to={`/course/${course._id}`}>
          <Typography variant="h3" className="w-[280px]">
            {course.title}
          </Typography>
        </Link>
        <div className="mb-3 flex items-center justify-between">
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            5.0
          </Typography>
        </div>
      </div>
      <div className="flex justify-between items-center">
       {course.tutor_id && <Typography variant="h6">{course.tutor_id.name}</Typography>}
        <Typography variant="h6" className="text-primary capitalize">
          {course.level}
        </Typography>
      </div>
      <Typography variant="h6" className="truncate font-light mt-2">
        {course.description}
      </Typography>
    </CardBody>
    {footer &&
    <CardFooter className="pt-2 flex justify-between bottom-0 border-t-2 border-gray-300">
      <Typography className="text-xl font-bold">
        {`$ ${course.price}`}
      </Typography>
      <Button
        size="sm"
        className="bg-gradient-to-tr from-primary to-secondary"
      >
        Comprar
      </Button>
    </CardFooter>}
  </Card>
    
)

}