import { faker } from '@faker-js/faker';
import mongoose from 'mongoose'; // Agregar esta línea para importar mongoose

import dbConnection from '../dbConnection.js';
import Course from '../../data/model/course.model.js'; // Importar el modelo de curso

// Conectar a la base de datos MongoDB y generar datos ficticios
const generarDatosFicticios = async () => {
  try {
    await dbConnection(); // Conectar a la base de datos

    // Generar datos ficticios de cursos
    for (let i = 0; i < 10; i++) {
      const courseContents = [];
      const numContents = faker.number.int({ min: 1, max: 10 }); // Generar un número aleatorio de contenidos para cada curso
      for (let j = 0; j < numContents; j++) {
        const content = {
          title: faker.lorem.words(),
          description: faker.lorem.sentence(),
          type: faker.helpers.arrayElement(['video', 'audio', 'documento']),
          url: faker.internet.url(),
          duration: faker.number.int({ min: 1, max: 60 }), // Duración en minutos
          order: j + 1, // Orden consecutivo de los contenidos
        };
        courseContents.push(content);
      }

      const course = new Course({
        title: faker.lorem.words(),
        tutor: new mongoose.Types.ObjectId(), // Generar un ID de tutor aleatorio
        subject: new mongoose.Types.ObjectId(), // Generar un ID de asignatura aleatorio
        description: faker.lorem.paragraph(),
        duration: faker.number.int({ min: 1, max: 100 }), // Duración en horas
        price: faker.number.int({ min: 10, max: 1000 }), // Precio en tu moneda local
        language: faker.helpers.arrayElement(['en', 'es', 'fr', 'de']),
        level: faker.helpers.arrayElement(['beginner', 'intermediate', 'advanced']),
        thumbnail: faker.image.url(),
        status: faker.helpers.arrayElement(['draft', 'published']),
        contents: courseContents,
      });

      await course.save(); // Esperar a que se guarde el curso
      console.log('Curso creado:', course);
    }

    console.log('Datos ficticios de cursos generados correctamente.');
  } catch (error) {
    console.error('Error al generar datos ficticios de cursos:', error);
  }
};

// Llama a la función para generar datos ficticios
generarDatosFicticios();