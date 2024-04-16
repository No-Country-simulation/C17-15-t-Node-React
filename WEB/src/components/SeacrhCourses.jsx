import React, {useState, useEffect} from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";


export const SeacrhCourses = () => {

    const [courses, setCourses] = useState([])
    const [search, setSearch] = useState("")

    const URL = "https://c17-15-t-node-react.onrender.com/api/courses"
    const showData = async () => {
        try {
          const response = await fetch(URL);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setCourses(data); // Update state here
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      };
      
    showData()

    useEffect(()=>{
        showData()
    }, [])

  return (
 
  <div className='mt-5'>
    SearchCourses
    {courses.length === 0 ? (
      <p>Cargando cursos...</p>
    ) : (
      <div>
        <Card className="mt-6 w-96">
          {/* ... resto del contenido de tu tarjeta */}
          <CardBody>
            {courses.map((course) => (
              <Typography key={course._id} variant="h5" color="blue-gray" className="mb-2">
                {course.title}
              </Typography>
            ))}
          </CardBody>
        </Card>
      </div>
    )}
  </div>



   





  )
}
