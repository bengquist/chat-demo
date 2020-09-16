import cors from "cors"
import express from "express"
import io from "socket.io"

const PORT = 4000

const app = express()
const socket = io()

app.use(cors())

app.get("*", (req, res) => {
  res.send({ user: 1, messaage: "yo" })
})

socket.on("connection", (socket) => {
  console.log("a user connected")
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})