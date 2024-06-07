import express from "express";
import { getOrders, addOrder, updateOrder, deleteOrder } from "../controllers/order.js";

const router = express.Router();

router.get("/", getOrders);
router.post("/", addOrder);
router.put("/:ID", updateOrder);
router.delete("/:ID", deleteOrder);

export default router;
