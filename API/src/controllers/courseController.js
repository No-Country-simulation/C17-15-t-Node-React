import { course } from "../data/mongoManager.js";
class CourseController {
  constructor() {
    this.controller = course;
  }

  create = async (req, res, next) => {
    try {
      const data = req.body;
      const response = await this.controller.create(data);
      res.json({
        statusCode: 201,
        response,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating course: " + error.message });
    }
  };

  read = async (req, res, next) => {
    try {
      const response = await this.controller.read();
      if (response.length === 0) {
        return res.status(404).json({ message: "No courses found" });
      }
      res.json({
        statusCode: 200,
        response,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error reading courses: " + error.message });
    }
  };

  readOne = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await this.controller.readOne(id);
      if (!response) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.json({
        statusCode: 200,
        response,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error finding course: " + error.message });
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const response = await this.controller.update(id, data, { new: true });
      if (!response) {
        return res.status(404).json({ message: "Course not found for update" });
      }
      res.json({
        statusCode: 200,
        response,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating course: " + error.message });
    }
  };

  destroy = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await this.controller.delete(id);
      if (!response) {
        return res
          .status(404)
          .json({ message: "Course not found for deletion" });
      }
      res.json({
        statusCode: 200,
        message: "Course deleted successfully",
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting course: " + error.message });
    }
  };

  // Controladores de content

  // Agregar contenido a un curso
  addContent = async (req, res) => {
    try {
      const { courseId } = req.params;
      const contentData = req.body;
      const course = await this.controller.readOne(courseId);

      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }

      course.contents.push(contentData);
      await this.controller.update(courseId, course);
      res.status(201).json({ message: "Content added successfully", course });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error adding content: " + error.message });
    }
  };

  // Leer todos los contenidos de un curso
  readContents = async (req, res) => {
    try {
      const { courseId } = req.params;
      const course = await this.controller.readOne(courseId);

      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }

      res.status(200).json(course.contents);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error reading contents: " + error.message });
    }
  };

  // Leer un contenido específico de un curso
  readOneContent = async (req, res) => {
    try {
      const { courseId, contentId } = req.params;
      const course = await this.controller.readOne(courseId);

      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }

      const content = course.contents.find(
        (content) => content._id.toString() === contentId
      );
      if (!content) {
        return res.status(404).json({ message: "Content not found" });
      }

      res.status(200).json(content);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error reading content: " + error.message });
    }
  };
  // Actualizar un contenido específico de un curso
  updateContent = async (req, res) => {
    try {
      const { courseId, contentId } = req.params;
      const contentData = req.body;
      const course = await this.controller.readOne(courseId);

      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }

      const contentIndex = course.contents.findIndex(
        (content) => content._id.toString() === contentId
      );
      if (contentIndex === -1) {
        return res.status(404).json({ message: "Content not found" });
      }

      course.contents[contentIndex] = {
        ...course.contents[contentIndex].toObject(),
        ...contentData,
      };
      await this.controller.update(courseId, course);
      res.status(200).json({ message: "Content updated successfully", course });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating content: " + error.message });
    }
  };

  // Eliminar un contenido específico de un curso
  deleteContent = async (req, res) => {
    try {
      const { courseId, contentId } = req.params;
      const course = await this.controller.readOne(courseId);

      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }

      course.contents = course.contents.filter(
        (content) => content._id.toString() !== contentId
      );
      await this.controller.update(courseId, course);
      res.status(200).json({ message: "Content deleted successfully", course });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting content: " + error.message });
    }
  };
}

const controller = new CourseController(course);
export const {
  create,
  read,
  readOne,
  destroy,
  update,
  addContent,
  readContents,
  readOneContent,
  updateContent,
  deleteContent,
} = controller;
