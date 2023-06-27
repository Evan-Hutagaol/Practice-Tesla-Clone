import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
