import { Router } from "express";
import {
  create,
  read,
  readOne,
  destroy,
  update,
  readByRole,
  readRatingsByUser,
} from "../../controllers/userController.js";
import { isAdmin } from "../../middlewares/isAdmin.mid.js";
import passport from "../../middlewares/passport.mid.js"

const usersRouter = Router();

usersRouter.post("/", create);
usersRouter.get("/", read);
usersRouter.get("/:uid", readOne);
usersRouter.put("/:uid", update);
usersRouter.delete("/:uid", destroy);
usersRouter.get("/role/:role", readByRole); //busca todo los que tienen x rol
usersRouter.get("/ratings/:uid", readRatingsByUser);

export default usersRouter;
