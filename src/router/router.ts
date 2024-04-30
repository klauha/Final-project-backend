import { Router } from "express"
import authRoutes from "../entities/auth/auth.routes"
import userRoutes from "../entities/user/user.routes"
import issueRoutes from "../entities/issue/issue.routes"
const router = Router();

router.use('/auth', authRoutes)
router.use('/users', userRoutes)
router.use('/issues', issueRoutes)

export default router;