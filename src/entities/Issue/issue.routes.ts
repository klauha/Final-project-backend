import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { createIssue, deleteIssue } from "./issue-controller";

const router = Router();

router.post('/', auth, createIssue)
router.delete('/:id', auth, deleteIssue)

export default router;