import { Router } from "express";
import { create, read, readOne, update, destroy } from "../../controllers/tutorController.js";

const tutorsRouter = Router();

tutorsRouter.post("/", create);
tutorsRouter.get("/", read)
tutorsRouter.get("/:aid", readOne)
tutorsRouter.put("/:aid", update)
tutorsRouter.delete("/:aid", destroy)

export default tutorsRouter;

