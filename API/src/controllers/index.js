import { getAllStudents, createStudent } from "./studentController.js";
import { getAllTutors, createTutor } from "./tutorController.js";
import { getAllSessions, createSession } from "./sessionController.js";
import { getAllRatings, createRating } from "./ratingController.js";
import { getAllSubjects, createSubject } from "./subjectController.js";
import { getAllAdmins, createAdmin } from "./adminController.js";

export {
  // Student
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
  getAllStudents,
  // Tutor
  getAllTutors,
  createTutor,
  getTutorById,
  updateTutor,
  deleteTutor,
  // Session
  getAllSessions,
  createSession,
  getSessionById,
  // Rating
  getAllRatings,
  createRating,
  getRatingById,
  deleteRating,
  // Subject
  getAllSubjects,
  createSubject,
  getSubjectById,
  updateSubject,
  deleteSubject,
  // Admin
  getAllAdmins,
  createAdmin,
  getAdminById,
  updateAdmin,
  deleteAdmin,
};
