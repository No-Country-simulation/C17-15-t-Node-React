import express from "express";

import { getUser } from "../controllers/userController";

const router = express.Router();
//TODO http://localhost:3001/vi/user
/**
 * Lista de usuarios
 */

router.get("/:id",  getUser );



export default router; 