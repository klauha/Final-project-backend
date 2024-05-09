import { Router } from "express";
import { auth } from "../../middlewares/auth"
import { getIssueType } from "./issueType-controller";


const router = Router();

router.get('/',auth, getIssueType)

export default router;