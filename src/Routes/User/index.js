import express from "express";
import {
    getMyProfile,
    login,
    logout,
    register,
} from "../../Controllers/User/index.js";
import { isAuthenticated } from "../../Middlewares/Auth.js";

const router = express.Router();

router.post("/new", register);
router.post("/login", login);

router.get("/logout", logout);
router.get("/me", isAuthenticated, getMyProfile);

export default router;
