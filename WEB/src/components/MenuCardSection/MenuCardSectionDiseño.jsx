import React, { useState, useEffect } from "react";
import BookingCard from "./BookingCard";
import { motion } from "framer-motion";
import Loader from "/src/components/Loader";
export default function MenuCardSectionDesarrollo() {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchCourses() {
            setIsLoading(true);
            try {
                const response = await fetch("https://c17-15-t-node-react.onrender.com/api/courses");
                if (response.ok) {
                    const data = await response.json();
                    console.log(data)
                    const limitedCourses = data.response.docs.slice(0, 6); // Limitando a 6 elementos
                    setCourses(limitedCourses);
                    setIsLoading(false);
                } else {
                    throw new Error("Error al cargar los cursos");
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchCourses();
    }, []);

    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-2 justify-items-center"
          >
            {courses.map((course) => (
              <BookingCard
                key={course.id}
                imagen={course.thumbnail}
                title={course.title}
                ranking={course.avg_rating}
                description={course.description}
              />
            ))}
          </motion.div>
        )}
      </>
    );
}
