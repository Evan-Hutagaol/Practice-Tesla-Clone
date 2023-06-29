import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a>
        <img src="/assets/images/logo.svg" alt="Tesla Logo" />
      </a>

      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
        <a href="#">Powerwall</a>

        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Account</a>
          <CustomMenu onClick={() => setBurgerStatus(true)} />
        </RightMenu>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-In</a>
          </li>
          <li>
            <a href="#">Demo Drive</a>
          </li>
          <li>
            <a href="#">Insurence</a>
          </li>
          <li>
            <a href="#">Fleet</a>
          </li>
          <li>
            <a href="#">Cybertruck</a>
          </li>
          <li>
            <a href="#">Roadster</a>
          </li>
          <li>
            <a href="#">Semi</a>
          </li>
          <li>
            <a href="#">Charging</a>
          </li>
          <li>
            <a href="#">Commercial Energy</a>
          </li>
          <li>
            <a href="#">Utilities</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Find Us</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Supports</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
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