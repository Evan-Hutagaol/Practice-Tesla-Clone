import React from "react";
import { Fade } from "react-reveal";
import { styled } from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Sections({ title, backgroundImg, backgroundImg2, posterImg, description, rightTitle }) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
        </ItemText>
      </Fade>
    </Wrap>
  );
}

export default Sections;

const WrapContainer = styled(Container)`
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    align-items: center;

    img{
        background-image: ${(props) => `url("../assets/images/${props.leftBgImg}")`};
    }

`

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("../assets/images/${props.bgImage}")`};
  opacity: 0.9;
  position: relative;
  overflow: hidden;

  h1 {
    padding-top: 10px;
    color: black;
    font-size: 32px;
    font-weight: bold;
  }
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

