import React from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
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
        {/* <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
        <a href="#">Powerwall</a> */}

        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Account</a>
          {/* <a href="#">Menu</a> */}
          <CustomMenu />
        </RightMenu>

      </Menu>
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
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    flex-wrap: nowrap;
    padding: 0 10px;
    text-decoration: none;
    color: black;
    margin-right: 20px;
  }

  @media(max-width : 768px){
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;


`
