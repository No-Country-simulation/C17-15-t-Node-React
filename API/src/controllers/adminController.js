import { admin } from "../data/mongoManager.js";

class AdminController {
  constructor() {
    this.controller = admin;
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
}

const controller = new AdminController(admin);
export const { create, read, readOne, destroy, update } = controller;
