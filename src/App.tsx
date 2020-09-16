import React from "react"
import { QueryCache, ReactQueryCacheProvider } from "react-query"
import styled from "styled-components"
import Chat from "./chat/Chat"

const queryCache = new QueryCache()

const App: React.FC = () => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Container>
        <Chat />
      </Container>
    </ReactQueryCacheProvider>
  )
}

export default App

const Container = styled.div``
