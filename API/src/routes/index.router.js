import { Router } from "express";
import sessionsRouter from "./api/sessions.router.js";
import subjectsRouter from "./api/subjects.router.js";
import usersRouter from "./api/user.router.js";
import authRouter from "./api/auth.router.js";
import coursesRouter from "./api/course.router.js";

const apiRouter = Router();

apiRouter.use("/sessions", sessionsRouter);
apiRouter.use("/subjects", subjectsRouter);
apiRouter.use("/users", usersRouter);
apiRouter.use("/auth", authRouter);
apiRouter.use("/courses", coursesRouter);

export default apiRouter;
