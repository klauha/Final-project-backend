import { Router } from "express";
import { getProfile, getUsers } from "./user-controller";
import { auth } from "../../core/auth";


const router = Router();

router.get('/', auth, getUsers)
router.get('/profile', auth, getProfile)
export default router;