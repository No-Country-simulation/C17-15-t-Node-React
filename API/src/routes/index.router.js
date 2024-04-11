import { Router } from "express";
import adminsRouter from "./api/admins.router.js";
import ratingsRouter from "./api/ratings.router.js";
import sessionsRouter from "./api/sessions.router.js";
import studentsRouter from "./api/students.router.js";
import subjectsRouter from "./api/subjects.router.js";
import tutorsRouter from "./api/tutors.router.js";
import usersRouter from "./api/user.router.js";
import authRouter from "./api/auth.router.js";

const apiRouter = Router()

apiRouter.use("/admins", adminsRouter)
apiRouter.use("/ratings", ratingsRouter)
apiRouter.use("/sessions", sessionsRouter)
apiRouter.use("/students", studentsRouter)
apiRouter.use("/subjects", subjectsRouter)
apiRouter.use("/tutors", tutorsRouter)
apiRouter.use("/users", usersRouter)
apiRouter.use("/auth", authRouter)


export default apiRouter
