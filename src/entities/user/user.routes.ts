import { Router } from "express";
import { deleteUser, getProfile, getUsers, updateUserById } from "./user-controller";
import { auth } from "../../middlewares/auth";


const router = Router();

router.get('/', auth, getUsers)
router.get('/profile', auth, getProfile)
router.put('/profile', auth, updateUserById)
router.delete('/:id', auth, deleteUser)

export default router;