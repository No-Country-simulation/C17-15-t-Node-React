import { faker } from '@faker-js/faker';
import mongoose from 'mongoose';

import dbConnection from '../dbConnection.js';
import Rating from '../../data/model/rating.model.js'; // Importar el modelo de calificación
import User from '../../data/model/user.model.js'; // Importar el modelo de usuario

// Conectar a la base de datos MongoDB y generar datos ficticios
const generarDatosFicticios = async () => {
  try {
    await dbConnection(); // Conectar a la base de datos

    // Obtener todos los usuarios de tipo tutor y estudiante de la base de datos
    const tutores = await User.find({ role: 'tutor' });
    const estudiantes = await User.find({ role: 'student' });

    // Generar datos ficticios de calificaciones
    for (let i = 0; i < 50; i++) { // Generar 50 calificaciones ficticias
      // Seleccionar aleatoriamente un tutor y un estudiante
      const tutor = faker.helpers.arrayElement(tutores);
      const student = faker.helpers.arrayElement(estudiantes);

      const rating = new Rating({
        tutor: tutor._id,
        student: student._id,
        comment: faker.lorem.paragraph(), // Comentario ficticio
        score: faker.number.float({ min: 1, max: 5, precision: 0.1 }), // Puntuación aleatoria entre 1 y 5
      });

      await rating.save(); // Esperar a que se guarde la calificación
      console.log('Calificación creada:', rating);
    }

    console.log('Datos ficticios de calificaciones generados correctamente.');
  } catch (error) {
    console.error('Error al generar datos ficticios de calificaciones:', error);
  }
};

// Llama a la función para generar datos ficticios
generarDatosFicticios();