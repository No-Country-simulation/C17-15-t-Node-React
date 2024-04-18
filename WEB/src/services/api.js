import API_URL from "../config/Config";
const student = "66212d07cdddee65fd13d383";
const tutor = "66212d1a1b7f3a7444987891";
const user = student;

export const fetchUserData = async () => {
    try {
      const response = await fetch(
        `${API_URL}/users/${user}`
      );
      if (!response.ok) {
        throw new Error("Error al obtener la información del usuario");
      }
      const userData = await response.json();
      
      return userData;
    } catch (error) {
      console.error("Hubo un error al obtener la información del usuario:", error);
      throw error; // Propagar el error para que se maneje en el componente
    }
  };

  export const fetchCourseData = async () => {
    try {
      const response = await fetch(
        `${API_URL}/courses/`
      );
      if (!response.ok) {
        throw new Error("Error al obtener la información del usuario");
      }
      const userData = await response.json();
   
      return userData;
    } catch (error) {
      console.error("Hubo un error al obtener la información del usuario:", error);
      throw error; // Propagar el error para que se maneje en el componente
    }
  };

  export const fetchAllCourseData = async () => {
    try {
      let allCourses = []; // Almacena todos los cursos
  
      let page = 1;
      let totalPages = 1; // Total de páginas disponibles, inicializado en 1
  
      // Iterar hasta que se alcance la última página
      while (page <= totalPages) {
        const response = await fetch(`${API_URL}/courses/?page=${page}`); // Solicitar la página actual
        if (!response.ok) {
          throw new Error("Error al obtener la información de los cursos");
        }
  
        const courseData = await response.json();
  
        // Agregar los cursos de la página actual al array de todos los cursos
        allCourses = allCourses.concat(courseData.docs);
  
        // Actualizar el total de páginas si es la primera iteración
        if (page === 1) {
          totalPages = courseData.totalPages;
        }
  
        page++; // Pasar a la siguiente página
      }
  
      return allCourses;
    } catch (error) {
      console.error("Hubo un error al obtener la información de los cursos:", error);
      throw error; // Propagar el error para que se maneje en el componente
    }
  };