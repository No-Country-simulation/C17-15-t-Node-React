import passport from "../../middlewares/passport.mid.js"
import { Router } from "express";
import {
  create,
  read,
  readOne,
  update,
  destroy,
  addStudent,
  readByTutor,
  rateCourse
} from "../../controllers/courseController.js";

const coursesRouter = Router();

coursesRouter.post("/", passport.authenticate("jwt", {session: false}),create);
coursesRouter.get("/", read);
coursesRouter.get("/readByTutor", passport.authenticate("jwt", {session: false}), readByTutor);
coursesRouter.get("/:id", readOne);
coursesRouter.put("/:id", update);
coursesRouter.delete("/:id", destroy);
coursesRouter.put("/addStudent/:cid", passport.authenticate("jwt", {session: false}), addStudent) 
coursesRouter.post("/ratings/:cid", passport.authenticate("jwt", {session: false}), rateCourse)


export default coursesRouter;
