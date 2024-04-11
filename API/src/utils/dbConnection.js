import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const { MONGO_USER, MONGO_PASSWORD } = process.env;

// URL de la base de datos
const dbURI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.zjtkxvt.mongodb.net/Cohorte17-15?retryWrites=true&w=majority&appName=Cluster0`;

// Conectar a la base de datos
const dbConnection = async () => {
    mongoose.connect(dbURI);
};

export default dbConnection;

