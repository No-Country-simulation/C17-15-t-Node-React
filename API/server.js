import "dotenv/config";
import express from "express";
import cors from "cors";
import errorHandler from "./src/middlewares/errorhandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import __dirname from "./utils.js";

const server = express();
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`server ready on port ${PORT}`));

// Global Middlewares
server.use(
  cors({
    origin: true,
    credentials: true,
  })
);

server.get("/", (req, res, next) => {
  try {
    return res.send("hola mundo");
  } catch (error) {
    next(error);
  }
});

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(errorHandler);
server.use(pathHandler);
server.use(express.static(__dirname + "/public"))

