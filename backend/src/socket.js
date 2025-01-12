import http from "http";
import {Server } from "socket.io";
import cors from 'cors';
import express from 'express';

const app = express();
const server = http.createServer(app)

app.use(cors());
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    }
})

export {app,io, server}