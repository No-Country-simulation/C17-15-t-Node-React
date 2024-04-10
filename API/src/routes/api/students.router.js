import { Router } from "express";
import { create, read, readOne, update, destroy } from "../../controllers/studentController.js";

const studentsRouter = Router();

studentsRouter.post("/", create);
studentsRouter.get("/", read)
studentsRouter.get("/:aid", readOne)
studentsRouter.put("/:aid", update)
studentsRouter.delete("/:aid", destroy)

export default studentsRouter;

