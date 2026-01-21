import express from "express";
import { Server } from "socket.io";
import { handleConnection } from "./rooms.js";

const app = express();
const server = app.listen(process.env.PORT || 3000);
const io = new Server(server);

app.use(express.static("client"));

io.on("connection", socket => {
  handleConnection(socket, io);
});

console.log("Server running");