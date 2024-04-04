import "dotenv/config";
import express from "express";
import cors from "cors";
import errorHandler from "./src/middlewares/errorhandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import __dirname from "./utils.js";
import apiRouter from "./src/routes/index.router.js";
import db from "./src/utils/dbConnection.js";

const server = express();
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`server ready on port ${PORT}`));

try {
  await db();
  console.log("DB connected");
} catch (e) {
  console.log(e);
}

// Global Middlewares
server.use(
  cors({
    origin: true,
    credentials: true,
  })
);

server.use("/api", apiRouter);
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(errorHandler);
server.use(pathHandler);
server.use(express.static(__dirname + "/public"));
