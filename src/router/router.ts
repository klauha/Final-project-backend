import { Router } from "express"
import authRoutes from "../entities/auth/auth.routes"

const router = Router();

router.use('/auth', authRoutes)

export default router;