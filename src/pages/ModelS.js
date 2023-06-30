import React from "react";
import Section from "../components/Section";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";

function ModelS() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Explore Inventory"
        backgroundImg="/model-s.jpg"
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
        range1="396 mi"
        range2=" Range (EPA est.)"
        mph1="2.5 s"
        mph2="0-60 mph*"
        mile1="9.9 s"
        mile2="1/4 Mile"
        peakpower1="1,020 hp"
        peakpower2="Peak Power"

        // describe3="200 mph Top Speed*"
        // describe4="1,020 hp Peak Power"
      />

      <Section
        title="Interior of the Future"
        backgroundImg="/new-interior.jpg"
        leftBtnText="Live Demo"
      />
    </Container>
  );
}

export default ModelS;

const Container = styled.div`
  height: 100vh;
`;

const rightBtnText = styled.button`
  background-color: blue;
`;
