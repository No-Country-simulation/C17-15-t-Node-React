import MongoManager from "../data/mongoManager.js";
import Rating from "../data/model/rating.model.js";

class RatingController {
  constructor() {
    this.controller = new MongoManager(Rating);
  }

  create = async (req, res, next) => {
    try {
      const data = req.body;
      const response = await this.controller.create(data);
      res.status(201).json(response);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating rating: " + error.message });
    }
  };

  read = async (req, res, next) => {
    try {
      const response = await this.controller.read();
      if (response.length === 0) {
        return res.status(404).json({ message: "No ratings found" });
      }
      res.status(200).json(response);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error retrieving ratings: " + error.message });
    }
  };

  readOne = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await this.controller.readOne(id);
      if (!response) {
        return res.status(404).json({ message: "Rating not found" });
      }
      res.status(200).json(response);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error finding rating: " + error.message });
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const response = await this.controller.update(id, data, { new: true });
      if (!response) {
        return res.status(404).json({ message: "Rating not found for update" });
      }
      res.status(200).json(response);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating rating: " + error.message });
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await this.controller.delete(id);
      if (!response) {
        return res
          .status(404)
          .json({ message: "Rating not found for deletion" });
      }
      res.status(200).json({ message: "Rating deleted successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting rating: " + error.message });
    }
  };
}

const ratingController = new RatingController();
export default ratingController;
