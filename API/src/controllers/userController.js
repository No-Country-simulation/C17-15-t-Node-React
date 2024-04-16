import { users } from "../data/mongoManager.js";

class UserController {
  constructor() {
    this.controller = users;
  }

  create = async (req, res, next) => {
    try {
      const data = req.body;
      const response = await this.controller.create(data);
      return res.json({
        statusCode: 201,
        response,
      });
    } catch (error) {
      return next(error);
    }
  };
  read = async (req, res, next) => {
    try {
      const response = await this.controller.read();
      return res.json({
        statusCode: 200,
        response,
      });
    } catch (error) {
      next(error);
    }
  };
  readOne = async (req, res, next) => {
    try {
      const { aid } = req.params;
      const response = await this.controller.readOne(aid);
      return res.json({
        statusCode: 200,
        response,
      });
    } catch (error) {
      next(error);
    }
  };
  destroy = async (req, res, next) => {
    try {
      const { aid } = req.params;
      const response = await this.controller.delete(aid);
      return res.json({
        statusCode: 200,
        response,
      });
    } catch (error) {
      next(error);
    }
  };
  update = async (req, res, next) => {
    try {
      const { aid } = req.params;
      const data = req.body;
      const opts = { new: true };
      const response = await this.controller.update(aid, data, opts);
      return res.json({
        statusCode: 200,
        response,
      });
    } catch (error) {
      next(error);
    }
  };
  readByRole = async (req, res, next) => {
    try {
      const { role } = req.params;
      const response = await this.controller.read({ role: role });
      return res.json({
        statusCode: 200,
        response,
      });
    } catch (error) {
      next(error);
    }
  };

  updateAverageRating = async (userId) => {
    try {
      const ratings = await this.controller.read({ tutor: userId });
      if (ratings.length === 0) {
        console.log("No ratings found for this tutor");
        return;
      }
      const avgRating =
        ratings.reduce((acc, curr) => acc + curr.score, 0) / ratings.length;
      await this.controller.update(userId, { average_rating: avgRating });
    } catch (error) {
      console.error("Error updating average rating: " + error.message);
    }
  };
}

const controller = new UserController(users);
export const {
  create,
  read,
  readOne,
  destroy,
  update,
  readByRole,
  updateAverageRating,
} = controller;
