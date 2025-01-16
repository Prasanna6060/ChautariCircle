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

const userSocketMap = {};

io.on("connection", (socket) => {
    console.log(`new client connected ${socket.id}`)
    

     const userId = socket.handshake.query.userId;

     if(userId) {
        userSocketMap[userId] = socket.id;
     }

     socket.emit('onlineUsers', Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log(`Client disconnected ${socket.id}`)
        if(userId) {
            delete userSocketMap[userId]
            socket.emit('onlineUsers', Object.keys(userSocketMap))
        }
    })
})

export {app,io, server}