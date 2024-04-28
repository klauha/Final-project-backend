import { Router } from "express"
import authRoutes from "../entities/auth/auth.routes"
import userRoutes from "../entities/user/user.routes"
const router = Router();

router.use('/auth', authRoutes)
router.use('/users', userRoutes)
export default router;