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

const usersRouter = Router();

usersRouter.post("/", create);
usersRouter.get("/", read);
usersRouter.get("/:uid", readOne);
usersRouter.put("/:uid", update);
usersRouter.delete("/:uid", destroy);
usersRouter.get("/role/:role", readByRole); //busca todo los que tienen x rol
usersRouter.get("/:uid/ratings", readRatingsByUser);

export default usersRouter;
