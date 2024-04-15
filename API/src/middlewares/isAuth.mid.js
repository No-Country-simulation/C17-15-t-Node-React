import { verifyToken } from "../utils/jwt.util.js";

export const isAuth = (req, res, next) => {
  try {
    const token = req.cookies
    const userData = verifyToken(token)
    if (userData) {
      console.log(userData)
      return next();
    }
    const error = new Error("Bad Auth from middleware");
    error.statusCode = 401;
    throw error;
  } catch (error) {
    return next(error);
  }
};
