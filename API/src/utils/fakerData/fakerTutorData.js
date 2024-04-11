// fakerTutorData.js

// Importar las bibliotecas necesarias
import { faker } from '@faker-js/faker';
import dbConnection from '../dbConnection.js';
import Tutor from '../../data/model/tutor.model.js'; // Importar el modelo Tutor




// Conectar a la base de datos MongoDB y generar datos ficticios
const generarDatosFicticios = async () => {
  try {
    await dbConnection(); // Conectar a la base de datos

    // Generar datos ficticios de Tutors
    for (let i = 0; i < 10; i++) {
      const nuevoTutor = new Tutor({
        name: faker.person.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        specialties: [faker.person.jobTitle() , faker.person.jobTitle() ],
        biography: faker.lorem.paragraph(),
        average_rating: faker.number.int({ min: 1, max: 5}),
        given_sessions: [],
        verifyCode: faker.number.int({ min: 100, max: 999}),
        city: faker.location.city(),
        country: faker.location.country(),
        language: 'English',
        timezone: 'UTC-5',
        // Otros campos que desees con datos ficticios generados por faker
      });

      await nuevoTutor.save(); // Esperar a que se guarde el Tutor
      console.log('Tutor creado:', nuevoTutor);
    }

    console.log('Datos ficticios de Tutors generados correctamente.');
  } catch (error) {
    console.error('Error al generar datos ficticios de Tutors:', error);
  }
};

// Llama a la función para generar datos ficticios
generarDatosFicticios();