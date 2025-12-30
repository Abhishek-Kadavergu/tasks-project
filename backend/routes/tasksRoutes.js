import express from "express";
import {
  getTasks,
  updateTask,
  getAllTasks,
  deleteTask,
  createTask,
} from "../controllers/taskController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createTask);
router.get("/", authMiddleware, getTasks);
router.put("/:id", authMiddleware, updateTask);
router.delete("/:id", authMiddleware, deleteTask);

router.get("/admin/all", authMiddleware, roleMiddleware("ADMIN"), getAllTasks);

export default router;
