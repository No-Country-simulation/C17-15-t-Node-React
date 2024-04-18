import { faker } from '@faker-js/faker';
import User from '../../data/model/user.model.js'; // Importa el modelo de usuario
import dbConnection from '../dbConnection.js';

const generarDatosFicticiosUsuarios = async () => {
  try {
    await dbConnection(); // Conectar a la base de datos

    for (let i = 0; i < 100; i++) {
      const role = faker.helpers.arrayElement(['student', 'tutor']);
      const userData = {
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        role: role,
        password: faker.internet.password(),
        photo: faker.image.avatar(),
        verified: true,
        verifyCode: faker.number.int(6), 
        city: faker.location.city(),
        country: faker.location.country(),
        language: faker.helpers.arrayElement(['spanish', 'english', 'france', 'japanese', 'chinese','greek','italian']),
        timezone: faker.helpers.arrayElement(['GMT', 'UTC', 'PST', 'EST']),
      };

      userData.email = faker.internet.email({ firstName: userData.name, lastName: userData.lastName });

      if (role === 'student') {
        userData.educational_level = faker.helpers.arrayElement(['Primary', 'Secondary', 'High School', 'University']);
        userData.interests = [faker.word.verb(), faker.word.verb(), faker.word.verb()]; // Genera 3 intereses aleatorios
      } else if (role === 'tutor') {
        userData.specialties = [faker.person.jobArea(), faker.person.jobArea(), faker.person.jobArea()]; // Genera 3 especialidades aleatorias
        userData.biography = faker.person.bio();
        userData.average_rating = faker.number.float({ min: 1, max: 5, multipleOf: 0.1 }); // Calificación promedio aleatoria
      }

      const user = new User(userData);
      await user.save();
      console.log('Usuario creado:', user);
    }

    console.log('Datos ficticios de usuarios generados correctamente.');
  } catch (error) {
    console.error('Error al generar datos ficticios de usuarios:', error);
  }
};

generarDatosFicticiosUsuarios();
