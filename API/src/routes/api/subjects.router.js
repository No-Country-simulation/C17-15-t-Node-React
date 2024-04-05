import { Router } from "express";
import { create, read, readOne, update, destroy } from "../../controllers/subjectController.js";

const subjectsRouter = Router();

subjectsRouter.post("/", create);
subjectsRouter.get("/", read)
subjectsRouter.get("/:aid", readOne)
subjectsRouter.put("/:aid", update)
subjectsRouter.delete("/:aid", destroy)

export default subjectsRouter;


