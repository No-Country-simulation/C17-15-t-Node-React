import express from "express";
import {getTutorship} from "../controllers/tutorshipController";

const router = express.Router();

//TODO http://localhost:3001/vi/tuthorship
/**
 * 
 */

router.get("/:id",  getTutorship );



export default router; 