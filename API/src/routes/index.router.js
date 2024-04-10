import { Router } from "express";
import adminsRouter from "./api/admins.router.js";
import ratingsRouter from "./api/ratings.router.js";
import sessionsRouter from "./api/sessions.router.js";
import studentsRouter from "./api/students.router.js";
import subjectsRouter from "./api/subjects.router.js";
import tutorsRouter from "./api/tutors.router.js";

const apiRouter = Router()

apiRouter.use("/admins", adminsRouter)
apiRouter.use("/ratings", ratingsRouter)
apiRouter.use("/sessions", sessionsRouter)
apiRouter.use("/students", studentsRouter)
apiRouter.use("/subjects", subjectsRouter)
apiRouter.use("/tutors", tutorsRouter)


export default apiRouter
