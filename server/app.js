import {dbConnection} from "./config/dbConnection.js"
// initialising connection to Db
dbConnection();
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
const app = express();
import userRoutes from "./routes/userRouter.js";

//middleare of express
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// CORS middleware
app.use(cors());



// app.get('/', (req, res)=>{
//     res.send("<h1>Hello from App.js</h1>")
// })

// using router as middleware
app.use('/', userRoutes);

export default app;