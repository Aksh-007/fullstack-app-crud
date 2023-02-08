import dotenv from "dotenv";
import express from 'express';
import router from "./routes/userRouter.js"
dotenv.config()
const app = express();

app.use('/', router);

export default app;