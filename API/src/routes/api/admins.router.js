import { Router } from "express";
import { create, read, readOne, update, destroy } from "../../controllers/adminController.js";

const adminsRouter = Router();

adminsRouter.post("/", create);
adminsRouter.get("/", read)
adminsRouter.get("/:aid", readOne)
adminsRouter.put("/:aid", update)
adminsRouter.delete("/:aid", destroy)

export default adminsRouter;
