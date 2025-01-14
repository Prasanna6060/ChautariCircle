import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
dotenv.config();
import cookieParser from "cookie-parser";

import userRouter from '../routes/user.js'
import postRouter from "../routes/posts.js";
import authRouter from '../routes/auth.route.js'
import messageRouter from '../routes/message.route.js'
import { server, app }  from "./socket.js";


mongoose
  .connect(process.env.MongoURI)
  .then(() => {
    console.log("Connected to Mongodb");
  })
  .catch((err) => {
    console.log(err);
  });


app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/posts', postRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter)
app.use('/api/message', messageRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const Port = process.env.PORT;

server.listen(Port, () => {
  console.log("Server is listening on port is running " + Port);
});


export {app}