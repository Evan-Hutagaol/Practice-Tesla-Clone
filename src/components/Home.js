import React from 'react'
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.css';
function Home() {
  return (
    <Container>
      Home
      <button>Click Me</button>
    </Container>
  )
}

export default Home;

const Container = styled.div`
  height : 100vh;
`
