import { Router } from "express";
import { createTodo, getTodos } from "../controllers/todo";

const router = Router();

// add a new todo
router.post("/", createTodo);

// get all todos
router.get("/", getTodos);

// update a todo
router.patch("/:id");

// delete a toto
router.delete("/:id");

export default router;