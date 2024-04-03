import { connect } from "mongoose";

export const dbConnection = async () => {
    await connect(/*aqui iria el link de mongo*/)
    console.log("db connected")
}