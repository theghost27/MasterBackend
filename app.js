import express from "express";
import cors from "cors";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./src/Middlewares/Error.js";
import userRouter from "./src/Routes/User/index.js";

config({
    path: "./config.env",
});

export const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
    res.send("Server is Working !!");
});

app.use(ErrorMiddleware);
