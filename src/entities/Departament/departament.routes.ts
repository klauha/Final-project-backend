import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { getDepartament } from "./departament-contoller";

const router = Router();

router.get('/',auth, getDepartament)

export default router;