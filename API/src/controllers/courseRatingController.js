import { courseRating } from "../data/mongoManager.js";
import { CourseController } from "./courseController.js"; // Asegúrate de que la ruta sea correcta

class CourseRatingController {
  constructor() {
    this.controller = courseRating;
  }

  // Crear una nueva calificación para un curso
  create = async (req, res) => {
    try {
      const data = req.body; // Datos de la calificación
      const response = await courseRating.create(data);
      // Llamada a updateAverageRating del CourseController
      await CourseController.updateAverageRating(data.course);
      res
        .status(201)
        .json({ message: "Rating created successfully", response });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating rating: " + error.message });
    }
  };

  // Leer todas las calificaciones de un curso específico
  read = async (req, res) => {
    try {
      const { courseId } = req.params;
      const query = { course: courseId }; // Filtrar por courseId
      const ratings = await courseRating.read(query);
      if (ratings.length === 0) {
        return res
          .status(404)
          .json({ message: "No ratings found for this course" });
      }
      res.status(200).json(ratings);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error reading ratings: " + error.message });
    }
  };

  // Leer una calificación específica por su ID
  readOne = async (req, res) => {
    try {
      const { ratingId } = req.params;
      const rating = await courseRating.readOne(ratingId);
      if (!rating) {
        return res.status(404).json({ message: "Rating not found" });
      }
      res.status(200).json(rating);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error reading rating: " + error.message });
    }
  };
}

const courseRatingController = new CourseRatingController(courseRating);

export const { create, read, readOne } = courseRatingController;
