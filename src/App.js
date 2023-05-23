import styled, { createGlobalStyle } from "styled-components";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import NavBar from "./components/nav";

function App() {
  const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Noto Sans', sans-serif;
      padding: 0;
      margin: 0;
      background: #F4F6F8;
    }

    div, p, span, h1 {
      margin: 0;
      box-sizing: border-box;
      color: #474749;

      ::-webkit-scrollbar {
        display: none;
      }
    }

    button, input {
      outline: none;
      border: none;
    }

    button {
      cursor: pointer;
    }
  `;

  return (
    <Router>
      <GlobalStyle />
      <NavBar />

      <Center>
        <BodyContainer>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BodyContainer>
      </Center>
    </Router>
  );
}

const Center = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: row;
  min-width: 1024px;
`;
const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: scroll;
  height: 100vh;
  position: relative;
`;

export default App;
