import styled, { createGlobalStyle } from "styled-components";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/nav";
import Home from "./page/home/Home";
import AnimalService from "./page/animalService/AnimalService";
import useGeoLocation from "./hooks/useGeoLocation";

function App() {
  useGeoLocation();
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
    <>
      <GlobalStyle />
      <Center>
        <BodyContainer>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/animal-service" element={<AnimalService />} />
            </Routes>
          </Router>
        </BodyContainer>
      </Center>
    </>
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
