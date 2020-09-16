import cors from "cors"
import express from "express"
import io from "socket.io"

const PORT = 4000

const app = express()

app.use(cors())

app.get("*", (req, res) => {
  res.send({ user: 1, messaage: "yo" })
})

const server = app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})

const socket = io().listen(server)

socket.on("connection", (socket) => {
  console.log("a user connected")

  const interval = setInterval(() => getApiAndEmit(socket), 1000)

  socket.on("disconnect", () => {
    console.log("user disconnected")
    clearInterval(interval)
  })
})

const getApiAndEmit = (socket) => {
  const response = new Date()

  socket.emit("FromAPI", response)
}
