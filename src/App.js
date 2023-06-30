import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { styled } from "styled-components";
import ModelS from "./pages/ModelS";
import Model3 from "./pages/Model3";
import ModelX from "./pages/ModelX";
import ModelY from "./pages/ModelY";
import Powerwall from "./pages/Powerwall";
import SolarPanels from "./pages/SolarPanels";
import SolarRoof from "./pages/SolarRoof";
import Header from "./components/Header";
// import DarkMode from "./components/DarkMode";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      {/* <DarkMode/> */}
        <Header />
        

        <Route exact path="/" component={Home} />
        <Route exact path="/model-s" component={ModelS} />
        <Route exact path="/model-3" component={Model3} />
        <Route exact path="/model-x" component={ModelX} />
        <Route exact path="/model-y" component={ModelY} />
        <Route exact path="/powerwall" component={Powerwall} />
        <Route exact path="/solar-panels" component={SolarPanels} />
        <Route exact path="/solar-roof" component={SolarRoof} />
        {/* Define more routes here */}
        
      </div>
      
    </BrowserRouter>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
`;
