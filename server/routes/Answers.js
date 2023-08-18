import express from "express";
// import auth from '../middlewares/auth.js'
import { postAnswer} from "../controllers/Answers.js";

const router = express.Router();

router.patch("/post/:id", postAnswer);


export default router;