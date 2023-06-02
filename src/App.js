import styled, { createGlobalStyle } from "styled-components";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./page/home/Home";
import AnimalService from "./page/animalService/AnimalService";
import useGeoLocation from "./hooks/useGeoLocation";
import BoardService from "./components/board/BoardService";
import BoardDetail from "./components/board/BoardDetail";

function App() {
  useGeoLocation(); //맨처음 홈에 들어오게 되었을시 , 시작되는 hooks

  const GlobalStyle = createGlobalStyle` // styled-components 안에 있는 내장 함수면서, 위와같은 설정을 통해 css를 적용시킬수있습니다.
  body {
    font-family: 'Noto Sans', sans-serif; /* 글꼴을 'Noto Sans'로 설정하고, 'Noto Sans'를 사용할 수 없는 경우 sans-serif 글꼴을 사용합니다. */
    padding: 0; /* body 주위의 여백을 제거합니다. */
    margin: 0; /* body 주위의 외부 여백을 제거합니다. */
    background: #F4F6F8; /* 배경색을 #F4F6F8로 설정합니다. */
  }

  div, p, span, h1 {
    margin: 0; /* div, p, span, h1 요소들의 여백을 제거합니다. */
    box-sizing: border-box; /* 요소의 크기 계산을 border-box로 설정하여, 내부 패딩과 테두리를 요소 크기에 포함시킵니다. */
    color: #474749; /* 요소들의 텍스트 색상을 #474749로 설정합니다. */

    ::-webkit-scrollbar {
      display: none; /* 웹킷 브라우저에서 스크롤바를 숨깁니다. */
    }
  }

  button, input {
    outline: none; /* 버튼과 입력 필드에 포커스가 될 때 생기는 외곽선을 제거합니다. */
    border: none; /* 버튼과 입력 필드의 테두리를 제거합니다. */
  }

  button {
    cursor: pointer; /* 버튼에 마우스 커서가 올라갔을 때 커서 모양을 포인터로 설정합니다. */
  }
  `;
  return (
    <>
      <GlobalStyle />
      <Center>
        <BodyContainer>
          <Router>
            {/*각 해당 화면을 가기위한 라우터 설정 */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/animal-service" element={<AnimalService />} />
              <Route path="/board-service" element={<BoardService />}>
                <Route path=":id" element={<BoardService />} />
              </Route>
              <Route path="/board-detail" element={<BoardDetail />}>
                <Route path=":id" element={<BoardDetail />} />
              </Route>
            </Routes>
          </Router>
        </BodyContainer>
      </Center>
    </>
  );
}

const Center = styled.div`
  height: 100vh; /* 세로 높이를 브라우저 창의 100%로 설정 */
  display: flex; /* Flexbox 레이아웃 사용 */
  flex: 1; /* Flex 요소의 크기 비율을 1로 설정 */
  flex-direction: row; /* 아이템들을 가로로 배치하는 행 방향 설정 */
  min-width: 1024px; /* 최소 가로 너비를 1024px로 설정 */
`;

const BodyContainer = styled.div`
  display: flex; /* Flexbox 레이아웃 사용 */
  flex-direction: column; /* 아이템들을 세로로 배치하는 열 방향 설정 */
  flex: 1; /* Flex 요소의 크기 비율을 1로 설정 */
  overflow: scroll; /* 내용이 넘칠 경우 스크롤바 표시 */
  height: 100vh; /* 세로 높이를 브라우저 창의 100%로 설정 */
  position: relative; /* 상대적인 위치 설정 */
`;


export default App;
