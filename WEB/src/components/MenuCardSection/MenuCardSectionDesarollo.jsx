import React, { useState, useEffect } from "react";
import BookingCard from "./BookingCard";

export default function MenuCardSectionDesarrollo() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        async function fetchCourses() {
            try {
                const response = await fetch("https://c17-15-t-node-react.onrender.com/api/courses");
                if (response.ok) {
                    const data = await response.json();
                    console.log(data)
                    const limitedCourses = data.response.docs.slice(0, 6); // Limitando a 6 elementos
                    setCourses(limitedCourses);
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-2 justify-items-center">
                {courses.map(course => (
                    <BookingCard
                        key={course.id}
                        imagen={course.thumbnail}
                        title={course.title}
                        ranking={course.avg_rating}
                        description={course.description}
                    />
                ))}
            </div>
        </>
    );
}
