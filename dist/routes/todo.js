"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = require("../controllers/todo");
const router = express_1.Router();
// add a new todo
router.post("/", todo_1.createTodo);
// get all todos
router.get("/", todo_1.getTodos);
// update a todo
router.patch("/:id");
// delete a toto
router.delete("/:id");
exports.default = router;
