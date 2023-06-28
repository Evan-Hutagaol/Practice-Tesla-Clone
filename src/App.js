import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { styled } from "styled-components";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
`;
