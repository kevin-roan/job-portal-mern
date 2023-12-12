import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";

const app = express();

dotenv.config();

connectDB();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("<h1>My Welcome to job portal</h1>");
});

app.listen(PORT || 8080, () => {
  console.log(
    `Node Server running in ${process.env.DEV_MODE} port ${PORT}`.bgCyan.white,
  );
});
