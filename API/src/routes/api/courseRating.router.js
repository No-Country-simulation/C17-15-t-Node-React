import { Router } from "express";
import {
  create,
  read,
  readOne,
} from "../../controllers/courseRatingController.js";

const courseRatingsRouter = Router();

// Rutas para las operaciones de calificaciones de cursos
courseRatingsRouter.post("/:courseId/ratings", create);
courseRatingsRouter.get("/:courseId/ratings", read);
courseRatingsRouter.get("/:courseId/ratings/:ratingId", readOne);

export default courseRatingsRouter;
