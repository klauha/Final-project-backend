import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { createIssue } from "./issue-controller";

const router = Router();

router.post('/', auth, createIssue)

export default router;