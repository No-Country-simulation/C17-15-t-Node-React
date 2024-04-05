import MongoManager from "../data/mongoManager.js";
import Tutor from "../data/model/tutor.model.js";

class TutorController {
  constructor() {
    this.controller = new MongoManager(Tutor);
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
        .json({ message: "Error creating tutor: " + error.message });
    }
  };

  read = async (req, res, next) => {
    try {
      const response = await this.controller.read();
      if (response.length === 0) {
        return res.status(404).json({ message: "No tutors found" });
      }
      res.json({
        statusCode: 200,
        response,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error reading tutors: " + error.message });
    }
  };

  readOne = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await this.controller.readOne(id);
      if (!response) {
        return res.status(404).json({ message: "Tutor not found" });
      }
      res.json({
        statusCode: 200,
        response,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error finding tutor: " + error.message });
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const response = await this.controller.update(id, data, { new: true });
      if (!response) {
        return res.status(404).json({ message: "Tutor not found for update" });
      }
      res.json({
        statusCode: 200,
        response,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating tutor: " + error.message });
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await this.controller.delete(id);
      if (!response) {
        return res
          .status(404)
          .json({ message: "Tutor not found for deletion" });
      }
      res.json({
        statusCode: 200,
        message: "Tutor deleted successfully",
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting tutor: " + error.message });
    }
  };
}

const tutorController = new TutorController();
export default tutorController;
