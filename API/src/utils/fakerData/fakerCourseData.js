import { faker } from '@faker-js/faker';
import dbConnection from '../dbConnection.js';
import Course from '../../data/model/course.model.js';
import User from '../../data/model/user.model.js';
import Subject from '../../data/model/subject.model.js'; 

const generarDatosFicticios = async () => {
  try {
    await dbConnection();
    const tutores = await User.find({ role: 'tutor' });
    const students = await User.find({ role: 'student' });
    const subjects = await Subject.find({}, '_id');

    for (let i = 0; i < 10; i++) {
      const courseContents = [];
      const numContents = faker.number.int({ min: 1, max: 10 });

      for (let j = 0; j < numContents; j++) {
        const content = {
          title: faker.lorem.words(),
          description: faker.lorem.sentence(),
          type: faker.helpers.arrayElement(['video', 'audio', 'documento']),
          url: faker.internet.url(),
          duration: faker.number.int({ min: 1, max: 60 }),
          order: j + 1,
        };
        courseContents.push(content);
      }

      const randomTutorId = faker.helpers.arrayElement(tutores.map(tutor => tutor._id));
      const randomSubjectId = faker.helpers.arrayElement(subjects.map(subject => subject._id));

      const enrolledStudents = [];

      // Simular la inscripción de 1 a 5 estudiantes ficticios
      const numEnrolledStudents = faker.number.int({ min: 1, max: 5 });
      for (let k = 0; k < numEnrolledStudents; k++) {
        const randomStudent = faker.helpers.arrayElement(students);
        const student = await User.findById(randomStudent._id); // Obtener la información completa del usuario
        enrolledStudents.push(student);
      }

      const course = new Course({
        title: faker.lorem.words(),
        tutor_id: randomTutorId,
        subject_id: randomSubjectId,
        description: faker.lorem.paragraph(),
        duration: faker.number.int({ min: 1, max: 100 }),
        price: faker.number.int({ min: 10, max: 1000 }),
        language: faker.helpers.arrayElement(['en', 'es', 'fr', 'de']),
        level: faker.helpers.arrayElement(['beginner', 'intermediate', 'advanced']),
        thumbnail: faker.image.url(),
        status: faker.helpers.arrayElement(['draft', 'published']),
        enrolled_students: enrolledStudents,
        contents: courseContents,
      });

      await course.save();
      console.log('Curso creado:', course);
    }

    console.log('Datos ficticios de cursos generados correctamente.');
  } catch (error) {
    console.error('Error al generar datos ficticios de cursos:', error);
  }
};

generarDatosFicticios();
