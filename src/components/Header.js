import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
export {
  Header,
  Container,
  Menu,
  RightMenu,
  CustomMenu,
  BurgerNav,
  CustomClose,
  CloseWrapper,
  Backdrop,
};

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <Link to="">
        <img src="/assets/images/logo.svg" alt="Tesla Logo" />
      </Link>

      <Menu>
        <Link to="/model-s">Model S</Link>
        <Link to="/model-3">Model 3</Link>
        <Link to="/model-x">Model X</Link>
        <Link to="/model-y">Model Y</Link>
        <Link to="/solar-roof">Solar Roof</Link>
        <Link to="/solar-panels">Solar Panels</Link>
        <Link to="/powerwall">Powerwall</Link>

        <RightMenu>
          <Link to="/shop">Shop</Link>
          <Link to="/account">Account</Link>

          <CustomMenu onClick={() => setBurgerStatus(true)} />
        </RightMenu>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>
          <li>
            <Link to="#">Existing Inventory</Link>
          </li>
          <li>
            <Link to="#">Used Inventory</Link>
          </li>
          <li>
            <Link to="#">Trade-In</Link>
          </li>
          <li>
            <Link to="#">Demo Drive</Link>
          </li>
          <li>
            <Link to="#">Insurence</Link>
          </li>
          <li>
            <Link to="#">Fleet</Link>
          </li>
          <li>
            <Link to="#">Cybertruck</Link>
          </li>
          <li>
            <Link to="#">Roadster</Link>
          </li>
          <li>
            <Link to="#">Semi</Link>
          </li>
          <li>
            <Link to="#">Charging</Link>
          </li>
          <li>
            <Link to="#">Commercial Energy</Link>
          </li>
          <li>
            <Link to="#">Utilities</Link>
          </li>
          <li>
            <Link to="#">Careers</Link>
          </li>
          <li>
            <Link to="#">Find Us</Link>
          </li>
          <li>
            <Link to="#">Events</Link>
          </li>
          <li>
            <Link to="#">Supports</Link>
          </li>
          <li>
            <Link to="#">Investor Relations</Link>
          </li>
        </BurgerNav>
      </Menu>
      {burgerStatus && <Backdrop onClick={() => setBurgerStatus(false)} />}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex;
  flex: 0.85;


  a {
    font-weight: 600;
    flex-wrap: nowrap;
    padding: 0 10px;
    text-decoration: none;
    color: black;
    margin-right: 20px;
  }

  a :hover{
    color: white;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  a {
    font-weight: 600;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  list-style: none;
  z-index: 16;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: transform 0.3s;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 15;
`;
