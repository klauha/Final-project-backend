import { Router } from "express";
import { deleteUser, getProfile, getUserById, getUsers, updateUserById } from "./user-controller";
import { auth } from "../../middlewares/auth";
import { isSuperAdmin } from "../../middlewares/isSuperAdmin";


const router = Router();

router.get('/', auth, getUsers)
router.get('/profile', auth, getProfile)
router.put('/profile', auth, updateUserById)
router.delete('/:id',  auth, isSuperAdmin, deleteUser)
router.get('/:id', auth, isSuperAdmin, getUserById)

export default router;