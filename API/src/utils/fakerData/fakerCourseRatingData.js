import { faker } from '@faker-js/faker';
import dbConnection from '../dbConnection.js';
import CourseRating from '../../data/model/courseRating.model.js'; // Importar el modelo de calificación de cursos
import User from '../../data/model/user.model.js'; // Importar el modelo de usuario
import Course from '../../data/model/course.model.js'; // Importar el modelo de curso

// Conectar a la base de datos MongoDB y generar datos ficticios
const generarDatosFicticios = async () => {
  try {
    await dbConnection(); // Conectar a la base de datos

    // Obtener todos los cursos y usuarios de la base de datos
    const cursos = await Course.find({});
    const usuarios = await User.find({});

    // Generar datos ficticios de calificaciones de cursos
    for (let i = 0; i < 50; i++) { // Generar 50 calificaciones ficticias
      // Seleccionar aleatoriamente un curso y un usuario
      const curso = faker.helpers.arrayElement(cursos);
      const usuario = faker.helpers.arrayElement(usuarios);

      const courseRating = new CourseRating({
        course: curso._id,
        student: usuario._id,
        rating: faker.number.float({ min: 1, max: 5, precision: 0.1 }), // Calificación aleatoria entre 1 y 5
        comment: faker.lorem.paragraph(), // Comentario ficticio
      });

      await courseRating.save(); // Esperar a que se guarde la calificación del curso
      console.log('Calificación del curso creada:', courseRating);
    }

    console.log('Datos ficticios de calificaciones de cursos generados correctamente.');
  } catch (error) {
    console.error('Error al generar datos ficticios de calificaciones de cursos:', error);
  }
};

// Llama a la función para generar datos ficticios
generarDatosFicticios();