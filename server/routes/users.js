import express from "express";
import {
    singIn,
    singUp
} from "../controller/users.js";
const router = express.Router();

router.post("/signin", singIn);
router.post("/signup", singUp);

export default router;
