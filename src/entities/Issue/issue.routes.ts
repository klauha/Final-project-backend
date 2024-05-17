import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { createIssue, deleteIssue, getAllIssues, getAllIsuesByUser, getIssueById, getIssueByIdForAdmin, getIssueByStatus, getMyIssues, updateIssueStatus } from "./issue-controller";
import { isSuperAdmin } from "../../middlewares/isSuperAdmin";

const router = Router();

router.post('/', auth, createIssue)
router.delete('/:id', auth,isSuperAdmin, deleteIssue)
router.put('/:id', auth, updateIssueStatus)
router.get('/admin',auth, getAllIssues)
router.get('/', auth, getMyIssues )
router.get('/:id', auth, getIssueById )
router.get('/status/:status', auth, getIssueByStatus)
router.get('/user/:id', auth, getAllIsuesByUser)
router.get('/admin/:id', auth,isSuperAdmin, getIssueByIdForAdmin)
export default router;