import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { createIssue, deleteIssue, updateIssueStatus } from "./issue-controller";

const router = Router();

router.post('/', auth, createIssue)
router.delete('/:id', auth, deleteIssue)
router.put('/:id', auth, updateIssueStatus)

export default router;