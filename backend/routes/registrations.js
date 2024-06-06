import express from "express";
import { getRegistrations, addRegistrations, updateRegistrations, deleteRegistrations } from "../controllers/register.js";

const router = express.Router();

router.get("/", getRegistrations);
router.post("/", addRegistrations);
router.put("/:ID", updateRegistrations);
router.delete("/:ID", deleteRegistrations);

export default router;
