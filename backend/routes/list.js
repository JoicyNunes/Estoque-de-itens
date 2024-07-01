import express from "express";
import { getList, addList, updateList, deleteList } from "../controllers/list.js";

const router = express.Router();

router.get("/", getList);
router.post("/", addList);
router.put("/:ID", updateList);
router.delete("/:ID", deleteList);

export default router;
