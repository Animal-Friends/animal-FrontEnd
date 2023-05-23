import react from "react";
import Carosel from "../components/carousel/Carosel";
import Board from "../components/board";
import { CommonButton } from "../components/button";
import { useLocation } from "react-router-dom";
import NavBar from "../components/nav";
import React from "react";
import styled from "styled-components";

const Home = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" && <NavBar />}

      <Carosel />
      <div style={{ padding: "0px 10px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2>자유 게시판</h2>
          <CommonButton text={"글쓰기"} />
        </div>
        <Board />
      </div>
    </>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
