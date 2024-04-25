import { Router } from "express";
import passport from "../../middlewares/passport.mid.js";
import {
  register,
  login,
  badauth,
  signout,
  me,
  verifyCode
} from "../../controllers/authController.js";

const authRouter = Router();

authRouter.post(
  "/register",
  passport.authenticate("register", {
    session: false,
    failureRedirect: "/api/auth/badauth",
  }),
  register
);
authRouter.post(
  "/login",
  passport.authenticate("login", {
    session: false,
    failureRedirect: "/api/auth/badauth",
  }),
  login
);

authRouter.get("/badauth", badauth);

authRouter.get("/getCookie", async (req, res, next) => {
  try {
    const cookie = req.cookies["token"];
    return res.json({
      cookie,
    });
  } catch (error) {
    next(error);
  }
});

authRouter.post(
  "/signout",
  passport.authenticate("jwt", {
    session: false,
    failureRedirect: "/api/auth/badauth",
  }),
  signout
);

authRouter.get("/me", passport.authenticate("jwt", {
  session: false,
  failureRedirect: "/api/auth/badauth",
}), me)

authRouter.post("/verify/:uid", verifyCode)

export default authRouter;
