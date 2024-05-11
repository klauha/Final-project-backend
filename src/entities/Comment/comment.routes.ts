import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { createComment } from "./comment-controller";



const router = Router();

router.post('/', auth, createComment)




export default router;