import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const { MONGO_USER, MONGO_PASSWORD } = process.env;

// URL de la base de datos
const dbURI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.zjtkxvt.mongodb.net/nombre_de_la_base_de_datos?retryWrites=true&w=majority&appName=Cluster0`;

// Conectar a la base de datos
const db = async () => {
  mongoose.connect(dbURI);
};

export default db;