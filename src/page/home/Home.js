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
  const [boardData, setBoardData] = useState([]); //api를 받은 데이터를 저장하기위한 state
  const auth = useSelector((state) => state?.auth); // store에 있는 auth가져옴

  const getBoard = async () => {
    try {
      const { data } = await api.get("/home");
      setBoardData(data?.data); //받은 api 데이터저장
    } catch (e) {
      if (e?.response?.data?.msg) {
        return alert(e?.response?.data?.msg);
      }
    }
  };
  useEffect(() => {
    //home에들어오면 무조건 바로실행
    getBoard();
  }, [path.pathname === "/"]);

  return (
    <>
      {/* path가 / 이거랑 동일하다면 navBar보여지는 조건  */}
      {path.pathname === "/" && <NavBar />}

      <Carosel />
      <div style={{ padding: "0px 10px" }}>
        <div
          style={{
            display: "flex", // 자식 요소들을 플렉스 박스 레이아웃으로 배치합니다.
            alignItems: "center", // 자식 요소들을 수직으로 가운데 정렬합니다.
            justifyContent: "space-between", // 자식 요소들을 좌우로 공간을 동일하게 분배하여 배치합니다.
          }}
        >
          <h2>자유 게시판</h2>
          <CommonButton
            text={"글쓰기"} // 버튼 텍스트
            onClick={() => {
              //버튼 클릭함수
              if (auth?.user.id === null) {
                // user.id가 없으면
                alert("로그인이 필요한 서비스입니다.");
              } else {
                // 그게아니면 board-service path로 이동
                navigate("/board-service");
              }
            }}
          />
        </div>
        {/*  게시판 영역 */}
        {/*  보드 컴포넌트에 boardData를 props로보내는부분*/}
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
