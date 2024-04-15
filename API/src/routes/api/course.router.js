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

export default coursesRouter;
