import React from "react";
import { styled } from "styled-components";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Roll from 'react-reveal/Roll';

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
  range1,
  range2,
  mph1,
  mph2,
  mile1,
  mile2,
  peakpower1,
  peakpower2,
}) {
  return (
    // <Roll right>
      <Wrap bgImage={backgroundImg}>
      <Zoom>
        <ItemText>
          <h1>{title}</h1>
          {/* <h5>{description}</h5> */}
          <a href="https://cis.del.ac.id/user/login" target="blank">
            {description}
          </a>
        </ItemText>
      </Zoom>

      <CenteredContainer>
        <Row>
          <Col xs={3}>
            <h3>{range1}</h3>
            <p>{range2}</p>
          </Col>
          <Col xs={3}>
            <h3>{mph1}</h3>
            <p>{mph2}</p>
          </Col>
          <Col xs={3}>
            <h3>{mile1}</h3>
            <p>{mile2}</p>
          </Col>
          <Col xs={3}>
            <h3>{peakpower1}</h3>
            <p>{peakpower2}</p>
          </Col>
        </Row>
      </CenteredContainer>
      <Button>
        {/* <Fade bottom> */}
        <ButtonGroup>
          <Fade left>
            <LeftButton>{leftBtnText}</LeftButton>
          </Fade>
          <Fade right>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </Fade>
          {/* <RightButton>{rightBtnText}</RightButton> */}
        </ButtonGroup>
        {/* </Fade> */}
        {/* <DownArrow src="../assets/images/down-arrow.svg" /> */}
      </Button>
    </Wrap>

    // </Roll>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical column
  align-items: center; //horizontal
  background-image: ${(props) => `url("../assets/images/${props.bgImage}")`};
  position: relative;
  overflow: hidden;

  /* Container {
    padding-top: 20px;
  } */

  h3 {
    padding-top: 25%;
    color: white;
    font-size: 36px;
  }

  p {
    color: white;
    font-size: 20px;
    height: 10%;
    font-weight: bold;
  }

  h5 {
    margin-bottom: 100%;
  }
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  a {
    color: black;
    text-decoration: none;
    position: relative;
    margin: 20px;

    
  }

  a:after{
    content: '';
    position: absolute;
    background-color: black;
    height: 1.5px;
    width: 0;
    left:0;
    bottom: -7px;
    transition: 0.5s;
    /* transform: translateX(-0%); */
  }

  a:hover:after{
    width: 100%;
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 230px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  opacity: 0.85;
  text-transform: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

// const DownArrow = styled.img`
//   height: 40px;
//   overflow-x: hidden;
//   animation: animateDown infinite 1.5s;
// `;

const Button = styled.div``;

const CenteredContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 300px;
`;
