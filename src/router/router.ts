import { Router } from "express"
import authRoutes from "../entities/auth/auth.routes"
import userRoutes from "../entities/user/user.routes"
import issueRoutes from "../entities/issue/issue.routes"
import departamentRoutes from "../entities/departament/departament.routes"
import issueTypeRoutes from "../entities/issueType/issueType.routes"
import commentRoutes from "../entities/comment/comment.routes"

const router = Router();

router.use('/auth', authRoutes)
router.use('/users', userRoutes)
router.use('/issues', issueRoutes)
router.use('/departaments', departamentRoutes)
router.use('/issue-types', issueTypeRoutes)
router.use('/comments', commentRoutes)
export default router;