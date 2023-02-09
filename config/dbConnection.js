import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const dbConnection = async() =>{
    mongoose
    .connect(process.env.MONGO_URL)
    .then((conn) =>{
        console.log(`Connection is established succesfully to ${conn.connection.host}`);
    })
    .catch((err) =>{
        console.log(err.message);
        process.exit(1);
    })
}