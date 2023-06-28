import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="/model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
        footerDescription="3 months free Supercharging when you take delivery of a new Inventory vehicle by June 30"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Demo Drive"
      />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Demo Drive"
      />
      <Section
        title="Solar Panels"
        description="Schedule a Virtual Consultation"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />

      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />

      <Section
        title="Powerwall"
        backgroundImg="powerwall.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />

      <Section
        title="Accessories"
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
