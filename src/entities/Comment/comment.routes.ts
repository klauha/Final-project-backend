import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { createComment, createCommentAsAdmin, getCommentsByIssue } from "./comment-controller";

const router = Router();

router.post('/', auth, createComment)
router.post('/:id', auth, createCommentAsAdmin)
router.get('/:id', auth, getCommentsByIssue)

export default router;