import { Router } from "express";
import { create, read, readOne, update, destroy } from "../../controllers/sessionController.js";
const sessionsRouter = Router()

sessionsRouter.post("/", create);
sessionsRouter.get("/", read)
sessionsRouter.get("/:aid", readOne)
sessionsRouter.put("/:aid", update)
sessionsRouter.delete("/:aid", destroy)

export default sessionsRouter

