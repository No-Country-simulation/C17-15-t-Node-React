import { useState, useEffect } from "react";
import {Typography,
  
} from "@material-tailwind/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Loader from "/src/components/Loader"
import ReactPaginate from "react-paginate";
import {motion} from "framer-motion"
import CourseCard from "../Course/CourseCard";

export default function SeacrhCourses() {
  const [originalCourses, setOriginalCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://c17-15-t-node-react.onrender.com/api/courses?limit=200"
        );
        if (!response.ok) {
          throw new Error("Error al obtener los cursos");
        }
        const responseData = await response.json();
        console.log(responseData.response.docs); // console.log(responseData.response.docs);
        let coursesData = [];
        setIsLoading(false);

        // Verificar el formato de la respuesta
        if (
          responseData.statusCode === 200 &&
          Array.isArray(responseData.response.docs) // Array.isArray(responseData.response.docs)
        ) {
          // Si la respuesta tiene statusCode 200 y contiene un array de cursos
          coursesData = responseData.response.docs; //          coursesData = responseData.response.docs;
          setOriginalCourses(coursesData); // Guardar los cursos originales
          setCourses(coursesData);
        } else {
          throw new Error("Los datos recibidos no son válidos");
        }

        setCourses(coursesData);
      } catch (error) {
        console.error("Hubo un error:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    // Si el término de búsqueda está vacío, restaurar los cursos originales
    if (!searchTerm.trim()) {
      setCourses(originalCourses);
    } else {
      // Filtrar los cursos basados en el término de búsqueda
      const filteredCourses = originalCourses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      // Actualizar el estado con los cursos filtrados
      setCourses(filteredCourses);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl font-extrabold mb-8 mt-[100px] sm:text-6xl">
          <span className=" bg-clip-text text-transparent text-center bg-gradient-to-br from-primary to-secondary">
            Cursos Online
          </span>
        </div>
        <Typography variant="h3" className="text-center text-xl sm:text-3xl">
          Más que cursos, una experiencia de aprendizaje
        </Typography>
        <div className="m-8 p-4 items-center borde-2 border-gray-600 w-full">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Buscar cursos"
            className="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none shadow-md p-4 lg:w-full"
          />
        </div>
      </div>
      <div>
        {isLoading?<Loader/>:<PaginatedItems itemsPerPage={4} />}
      </div>
    </div>
  );
  function Items({ currentItems }) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center flex-wrap gap-10 pb-10 pl-10 pr-10 ml-10 mr-10  ">
        {currentItems &&
          currentItems.map((course) => (
           <CourseCard key={course._id} course={course} footer={true} />
          ))}
       
      </motion.div>
    );
  }
  function PaginatedItems({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = courses.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(courses.length / itemsPerPage);
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % courses.length;
      setItemOffset(newOffset);
    };
    return (
      <div className="flex-col items-center">
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel={<><span className="mr-1">Siguiente</span><FaArrowRight/></>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<><FaArrowLeft/><span className="ml-1">Anterior</span></>}
          renderOnZeroPageCount={null}
          className="flex justify-center items-center gap-4 mb-8"
          activeLinkClassName="bg-blue-500  !text-black "
          previousLinkClassName="bg-gradient-to-tr from-primary to-secondary text-white font-bold py-2 px-4 rounded-xl block h-10 flex items-center"
          nextLinkClassName="bg-gradient-to-tr from-primary to-secondary text-white font-bold py-2 px-4 rounded-xl block h-10 flex items-center"
          pageLinkClassName="bg-gradient-to-tr from-primary to-secondary text-white font-bold py-2 px-4 rounded-xl block h-10 flex items-center"
        />
      </div>
    );
  }
}
