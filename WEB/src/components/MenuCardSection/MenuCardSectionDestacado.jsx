import React, { useState, useEffect } from "react";
import BookingCard from "./BookingCard";
import { motion } from "framer-motion";
import Loader from "/src/components/Loader"
import axios from "axios";
export default function MenuCardSectionDesarrollo() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchCourses() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://c17-15-t-node-react.onrender.com/api/courses?limit=200"
        );
        const limitedCourses = response.data.response.docs.slice(0, 6);
        limitedCourses.sort((a, b) => b.avg_rating - a.avg_rating);

        console.log(limitedCourses);
        setCourses(limitedCourses);
        setIsLoading(false);
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
