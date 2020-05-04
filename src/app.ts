
import express, { Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todo"
import { json } from "body-parser";

const PORT = 3000;
const app = express();

// parse body of all request and extract any existing json to populate request.body
app.use(json());

// forward all request starts with "todos" to todoRoutes
app.use("/todos", todoRoutes);

// handle error
app.use((err: Error, req:express.Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message });
})

app.listen(PORT);