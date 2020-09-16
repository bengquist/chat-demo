import Axios from "axios"
import React, { useEffect } from "react"
import { useQuery } from "react-query"
import socketIOClient from "socket.io-client"

const Chat: React.FC = () => {
  const { data } = useQuery("fetchLuke", () => Axios("http://localhost:4000"))

  useEffect(() => {
    const socket = socketIOClient("http://localhost:4000")

    socket.on("FromAPI", (data) => {
      console.log("socket: ", data)
    })

    return () => socket.disconnect()
  }, [])

  console.log("query: ", data)

  return <div>yo</div>
}

export default Chat
