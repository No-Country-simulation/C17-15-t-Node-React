import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Loader from "/src/components/Loader"
import ReactPaginate from "react-paginate";
import { motion } from "framer-motion";

export default function SeacrhCourses() {
  const [originalCourses, setOriginalCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://c17-15-t-node-react.onrender.com/api/courses?page=${currentPage}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener los cursos");
        }
        const responseData = await response.json();

        setMaxPages(responseData.response.totalPages);
        cons
        setIsLoading(false);
        setCourses(responseData.response.docs);
        setOriginalCourses(responseData.response.docs);
      } catch (error) {
        console.error("Hubo un error:", error);
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, [currentPage]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    if (!searchTerm.trim()) {
      setCourses(originalCourses);
    } else {
      const filteredCourses = originalCourses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCourses(filteredCourses);
    }
  };

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
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
        {isLoading ? <Loader /> : <PaginatedItems />}
      </div>
    </div>
  );

  function Items({ currentItems }) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center flex-wrap gap-10 pb-10 pl-10 pr-10 ml-10 mr-10  ">
        {currentItems.map((course) => (
          <Card key={course._id} className="mt-6 w-96 bg-gray-50">
            {/* Resto del contenido de la tarjeta */}
          </Card>
        ))}
      </motion.div>
    );
  }

  function PaginatedItems() {
    return (
      <div className="flex-col items-center">
        <Items currentItems={courses} />
        <ReactPaginate
          breakLabel="..."
          nextLabel={<><span className="mr-1">Next</span><FaArrowRight/></>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={maxPages}
          previousLabel={<><FaArrowLeft/><span className="ml-1">Previous</span></>}
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