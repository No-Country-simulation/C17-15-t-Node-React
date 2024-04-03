import { Router } from "express";

const usersRouter = Router()

usersRouter.get("/", (req, res, next) => {
    return res.send("users")
})

// usersRouter.post (logica del post)
// usersRouter.put (logica del put)
//usersRouter.delete(logica del delete)

export default usersRouter