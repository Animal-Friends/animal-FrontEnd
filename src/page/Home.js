import react from "react";
import Carosel from "../components/carousel/Carosel";
import Board from "../components/board";
import { CommonButton } from "../components/button";

const Home = () => {
  return (
    <>
      <div style={{ margin: "20px 0px" }}>
        <Carosel />
      </div>
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

        {/*<div>1</div>*/}
      </div>
    </>
  );
};

export default Home;
