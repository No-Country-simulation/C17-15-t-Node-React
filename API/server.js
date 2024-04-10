import "dotenv/config";
import express from "express";
import cors from "cors";
import errorHandler from "./src/middlewares/errorhandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import __dirname from "./utils.js";
import apiRouter from "./src/routes/index.router.js";
import dbConnection from "./src/utils/dbConnection.js";

const server = express();
const PORT = process.env.PORT || 8080;
const ready = () => {
  console.log(`server ready on port ${PORT}`),
  dbConnection()
  console.log("db connected")
}

server.listen(PORT, ready)

server.use(
  cors({
    origin: true,
    credentials: true,
  })
);

server.use(express.json());
server.use("/api", apiRouter)
server.use(express.urlencoded({ extended: true }));
server.use(errorHandler);
server.use(pathHandler);
server.use(express.static(__dirname + "/public"));
