import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { createComment, getCommentsByIssue } from "./comment-controller";



const router = Router();

router.post('/', auth, createComment)
router.get('/:id', auth, getCommentsByIssue)




export default router;