// fakerStudentData.js

// Importar las bibliotecas necesarias
import { faker } from '@faker-js/faker';
import dbConnection from '../dbConnection.js';
import Student from '../../data/model/student.model.js'; // Importar el modelo Student




// Conectar a la base de datos MongoDB y generar datos ficticios
const generarDatosFicticios = async () => {
  try {
    await dbConnection(); // Conectar a la base de datos

    // Generar datos ficticios de estudiantes
    for (let i = 0; i < 10; i++) {
      const nuevoEstudiante = new Student({
        name: faker.person.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        educational_level: 'High School',
        interests: 'Playa',
        verifyCode: '2332',
        city: faker.location.city(),
        country: faker.location.country(),
        language: 'English',
        timezone: 'UTC-5',
        // Otros campos que desees con datos ficticios generados por faker
      });

      await nuevoEstudiante.save(); // Esperar a que se guarde el estudiante
      console.log('Estudiante creado:', nuevoEstudiante);
    }

    console.log('Datos ficticios de estudiantes generados correctamente.');
  } catch (error) {
    console.error('Error al generar datos ficticios de estudiantes:', error);
  }
};

// Llama a la función para generar datos ficticios
generarDatosFicticios();