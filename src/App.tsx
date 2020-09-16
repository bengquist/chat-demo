import axios from "axios"
import React from "react"
import { useQuery } from "react-query"
import styled from "styled-components"

const App: React.FC = () => {
  const { data } = useQuery("fetchLuke", () => axios("http://localhost:4000"))

  console.log(data)

  return <Container>Hellooooooo</Container>
}

export default App

const Container = styled.div``
