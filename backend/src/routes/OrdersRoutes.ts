import express from "express";
import OrdersController from "../controller/OrdersController";

const router = express.Router();

// Send all orders of history
router.get("/orders", OrdersController.getAllOrders());

// Add new order
router.post("/add-order", OrdersController.addOrder);
router.delete("/delete-order", OrdersController.deleteOrder);
