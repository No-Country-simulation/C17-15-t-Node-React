import { Router } from "express";
import { create, read, readOne, update, destroy } from "../../controllers/raitingController.js";

const raitingsRouter = Router();

raitingsRouter.post("/", create);
raitingsRouter.get("/", read)
raitingsRouter.get("/:aid", readOne)
raitingsRouter.put("/:aid", update)
raitingsRouter.delete("/:aid", destroy)

export default raitingsRouter;

