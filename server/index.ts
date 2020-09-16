import express from "express";
import io from "socket.io";

const app = express();
const socket = io();
const PORT = 4000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

socket.on("connection", (socket) => {
  console.log("a user connected");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
