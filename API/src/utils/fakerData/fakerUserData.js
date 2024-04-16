import { faker } from '@faker-js/faker';
import dbConnection from '../dbConnection.js';
import Subject from '../../data/model/subject.model.js'; // Importar el modelo de asignatura

// Conectar a la base de datos MongoDB y generar datos ficticios
const generarDatosFicticios = async () => {
  try {
    await dbConnection(); // Conectar a la base de datos

    // Generar datos ficticios de asignaturas
    for (let i = 0; i < 10; i++) { // Generar 10 asignaturas ficticias
      const subject = new Subject({
        name: faker.lorem.words(),
        description: faker.lorem.paragraph(),
      });

      await subject.save(); // Esperar a que se guarde la asignatura
      console.log('Asignatura creada:', subject);
    }

    console.log('Datos ficticios de asignaturas generados correctamente.');
  } catch (error) {
    console.error('Error al generar datos ficticios de asignaturas:', error);
  }
};

// Llama a la función para generar datos ficticios
generarDatosFicticios();