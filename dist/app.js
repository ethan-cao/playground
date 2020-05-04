"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = __importDefault(require("./routes/todo"));
const body_parser_1 = require("body-parser");
const PORT = 3000;
const app = express_1.default();
// parse body of all request and extract any existing json to populate request.body
app.use(body_parser_1.json());
// forward all request starts with "todos" to todoRoutes
app.use("/todos", todo_1.default);
// handle error
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(PORT);
