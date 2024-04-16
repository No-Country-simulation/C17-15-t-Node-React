import { Router } from "express";
import {
  create,
  read,
  readOne,
  update,
  destroy,
  addContent,
  readContents,
  readOneContent,
  updateContent,
  deleteContent,
  addPendingStudent,
  removePendingStudent,
  approvePendingStudent,
  updateAverageRating,
  listEnrolledStudents,
  changeCourseStatus,
  readAllRatingsByCourse,
} from "../../controllers/courseController.js";

const coursesRouter = Router();

// Operaciones CRUD para cursos
coursesRouter.post("/", create);
coursesRouter.get("/", read);
coursesRouter.get("/:id", readOne);
coursesRouter.put("/:id", update);
coursesRouter.delete("/:id", destroy);

// Operaciones para manejar los contenidos de un curso
coursesRouter.post("/:courseId/contents", addContent);
coursesRouter.get("/:courseId/contents", readContents);
coursesRouter.get("/:courseId/contents/:contentId", readOneContent);
coursesRouter.put("/:courseId/contents/:contentId", updateContent);
coursesRouter.delete("/:courseId/contents/:contentId", deleteContent);

// Operaciones para manejar el flujo de estudiantes
coursesRouter.post("/:courseId/students/pending", addPendingStudent);
coursesRouter.delete(
  "/:courseId/students/pending/:studentId",
  removePendingStudent
);
coursesRouter.put(
  "/:courseId/students/pending/:studentId",
  approvePendingStudent
);

// Operaciones para manejar la actualización de la calificación promedio
coursesRouter.put("/:courseId/ratings/average", updateAverageRating);

// Operaciones auxiliares
coursesRouter.get("/:courseId/students", listEnrolledStudents);
coursesRouter.put("/:courseId/status", changeCourseStatus);
coursesRouter.get("/:courseId/ratings", readAllRatingsByCourse);

export default coursesRouter;
