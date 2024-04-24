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
import {motion} from "framer-motion"
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
                  {/* <Typography variant="h6">{course.tutor_id.name}</Typography> */}
                  <Typography variant="h6" className="text-primary capitalize">
                    {course.level}
                  </Typography>
                </div>
                <Typography variant="h6" className="truncate font-light mt-2">
                  {course.description}
                </Typography>
              </CardBody>
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
              </CardFooter>
            </Card>
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
