import users from "../data/model/user.model.js";

class AuthController {
  constructor() {
    this.model = users;
  }
  register = async (req, res, next) => {
    try {
      return res.json({
        statusCode: 200,
        message: "registered!",
      });
    } catch (error) {
      next(error);
    }
  };

  login = async (req, res, next) => {
    try {
      return res.cookie("token", req.token).json({
        message: "logged In",
        statusCode: 200,
      });
    } catch (error) {
      next(error);
    }
  };

  badauth = async (req, res, next) => {
    try {
      return res.json({
        statusCode: 401,
        message: "Bad auth",
      });
    } catch (error) {
      next(error);
    }
  };
  signout = async (req, res, next) => {
    try {
      return res.clearCookie("token").json({
        statusCode: 200,
        message: "Signout!",
      });
    } catch (error) {
      next(error);
    }
  };
}

const controller = new AuthController();
export const { register, badauth, signout, login } = controller;
