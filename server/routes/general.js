import express from "express";
const router = express.Router();
import { getUser, getDashboardStat } from "../controllers/general.js";

router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStat);

export default router;
