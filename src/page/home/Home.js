import react, { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import Carosel from "../../components/carousel/Carosel";
import NavBar from "../../components/nav";
import { CommonButton } from "../../components/button";
import Board from "../../components/board";
import api from "../../api/api";
import { useSelector } from "react-redux";

const Home = () => {
  const path = useLocation();
  const navigate = useNavigate();
  const [boardData, setBoardData] = useState([]);
  const auth = useSelector((state) => state?.auth);

  const getBoard = async () => {
    try {
      const { data } = await api.get("/home");
      setBoardData(data?.data);
    } catch (e) {
      if (e?.response?.data?.msg) {
        return alert(e?.response?.data?.msg);
      }
      console.log(e?.response);
    }
  };
  useEffect(() => {
    getBoard();
  }, [path.pathname === "/"]);

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
          <CommonButton
            text={"글쓰기"}
            onClick={() => {
              if (auth?.user.id === null) {
                alert("로그인이 필요한 서비스입니다.");
              } else {
                navigate("/board-service");
              }
            }}
          />
        </div>
        <Board boardData={boardData} />
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
