import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { createIssue, deleteIssue, getAllIssues, getMyIssues, updateIssueStatus } from "./issue-controller";

const router = Router();

router.post('/', auth, createIssue)
router.delete('/:id', auth, deleteIssue)
router.put('/:id', auth, updateIssueStatus)
router.get('/admin',auth, getAllIssues)
router.get('/', auth, getMyIssues )
router.get('/:id', auth, )

export default router;