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
      const sortAndPaginate = {
        limit: req.query.limit || 10,
        page: req.query.page || 1,
        sort: { name: 1 }
      }

      const filter = {}

      if(req.query.name) {
        filter.name = new RegExp(req.query.name.trim(), 'i')
      }

      const response = await this.controller.read(filter, sortAndPaginate);
      if (response.docs.length > 0) {
        return res.json({
          statusCode: 200,
          response,
        });
      } else {
        const error = new Error("not found documents")
        error.statusCode = 404
        throw error
      }
    } catch (error) {
      next(error);
    }
  };
  readOne = async (req, res, next) => {
    try {
      const { uid } = req.params;
      const response = await this.controller.readOne(uid);
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
      const { uid } = req.params;
      const response = await this.controller.delete(uid);
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
      const { uid } = req.params;
      const data = req.body;
      const opts = { new: true };
      const response = await this.controller.update(uid, data, opts);
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
  //Controladores auxiliares
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

  readRatingsByUser = async (req, res, next) => {
    try {
      const { uid } = req.params
      const ratings = await this.controller.read({ tutor: uid });
      if (ratings.length === 0) {
        const error = new Error("no ratings found")
        error.statusCode = 404
        throw error
      }
      return res.json({
        response: ratings,
        statusCode
      });
    } catch (error) {
      next(error)
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
  readRatingsByUser,
} = controller;
