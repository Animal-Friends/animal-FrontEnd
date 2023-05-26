import react from "react";

import { useLocation } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import Carosel from "../../components/carousel/Carosel";
import NavBar from "../../components/nav";
import { CommonButton } from "../../components/button";
import Board from "../../components/board";

const Home = () => {
  const path = useLocation();

  return (
    <>
      {path.pathname === "/" && <NavBar />}

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