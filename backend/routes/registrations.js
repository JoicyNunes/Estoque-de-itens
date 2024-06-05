import express from "express";
import { getRegistrations } from "../controllers/register.js";

const router = express.Router();

router.get("/", getRegistrations);

export default router;
