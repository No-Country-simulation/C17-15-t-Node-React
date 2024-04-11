import { Router } from "express";
import { create, read, readOne, destroy, update } from "../../controllers/userController.js";

const usersRouter = Router()

usersRouter.post("/", create)
usersRouter.get("/", read)
usersRouter.get("/:uid", readOne)
usersRouter.put("/:uid", update)
usersRouter.delete("/:uid", destroy)

export default usersRouter

