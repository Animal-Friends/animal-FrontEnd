import styled, { css } from "styled-components";

export const TopContainerStyle = styled.div`
  display: flex; // 자식 요소들을 플렉스 박스 레이아웃으로 배치합니다.
  width: 100%; // 요소의 가로 너비를 100%로 설정합니다.
  align-items: center; // 자식 요소들을 수직으로 가운데 정렬합니다.

  h3 {
    margin-left: 30px; // h3 요소의 왼쪽 여백을 30px로 설정합니다.
  }
`;

export const UploadTopStyle = styled.div`
  width: 100%; // 요소의 가로 너비를 100%로 설정합니다.
  display: flex; // 자식 요소들을 플렉스 박스 레이아웃으로 배치합니다.
  justify-content: right; // 자식 요소들을 오른쪽으로 정렬합니다.
  padding: 10px; // 요소의 안쪽 여백을 10px로 설정합니다.
`;

export const RootStyle = styled.div`
  padding: 10px 0px; // 요소의 위아래 안쪽 여백을 10px로 설정합니다.
  display: flex; // 자식 요소들을 플렉스 박스 레이아웃으로 배치합니다.
  flex-direction: row; // 자식 요소들을 가로로 배치합니다.
  justify-content: right; // 자식 요소들을 오른쪽으로 정렬합니다.
`;

export const CommentRootStyle = styled.div`
  padding: 10px; // 요소의 안쪽 여백을 10px로 설정합니다.
  display: flex; // 자식 요소들을 플렉스 박스 레이아웃으로 배치합니다.
  flex-direction: column; // 자식 요소들을 세로로 배치합니다.
  justify-content: center; // 자식 요소들을 수직으로 가운데 정렬합니다.
`;

export const CommentBox = styled.div`
  width: 100%; // 요소의 가로 너비를 100%로 설정합니다.
  border-radius: 10px; // 요소의 테두리를 10px만큼 둥글게 설정합니다.
  background-color: #fff; // 요소의 배경색을 흰색으로 설정합니다.
  margin: 10px; // 요소의 바깥 여백을 10px로 설정합니다.
  display: flex; // 자식 요소들을 플렉스 박스 레이아웃으로 배치합니다.
  flex-direction: column; // 자식 요소들을 세로로 배치합니다.
`;

export const CommentContent = styled.div`
  display: flex; // 자식 요소들을 플렉스 박스 레이아웃으로 배치합니다.
  align-items: center; // 자식 요소들을 수직으로 가운데 정렬합니다.
`;
export const Button = styled.button`
  width: 200px; // 버튼의 가로 너비를 200px로 설정합니다.
  padding: 10px 0px; // 버튼의 안쪽 여백을 상하 10px, 좌우 0px로 설정합니다.
  border-radius: 10px; // 버튼의 테두리를 10px만큼 둥글게 설정합니다.
  background-color: #6eeaff; // 버튼의 배경색을 #6eeaff로 설정합니다.
  margin-left: 10px; // 버튼의 왼쪽 여백을 10px로 설정합니다.
  transition: background-color 0.3s ease; // 배경색 변경 시 0.3초의 애니메이션 효과를 추가합니다.

  &:hover {
    background-color: #5ac8ff; // 마우스를 버튼 위로 올렸을 때의 배경색을 #5ac8ff로 변경합니다.
  }
`;

// 스타일드 컴포넌트 생성
export const Input = styled.input`
  /* 비활성화 스타일 */
  ${(props) =>
    props.disabled &&
    css`
      background-color: white;
      // 넘어오는 props값이 true면 white
    `};
`;

export const NullableStyle = styled.div`
  p {
    font-weight: bold;
  }

  width: 100%;
  margin: 10px 0px;
  text-align: center;
  // 이 컴포넌트는 너비가 100%이고, 상하 여백은 10px이며, 가운데 정렬된 div.
`;

// export const UploadRootConatiner = styled.div`
//   padding: 10px;
//   // 이 컴포넌트는 10px의 안쪽 여백을 갖습니다.
// `;

export const UploadSubContentStyle = styled.div`
  min-width: 310px;
  width: 100%;
  display: flex; //하위 요소 flex로 배치
  margin: 10px 0px;
  justify-content: center; //요소 가운데정렬
  // 이 컴포넌트는 최소 너비가 310px이고, 너비는 100%입니다. flex로 표시되며 가운데 정렬됩니다.

  p {
    margin: 10px 10px;
    white-space: nowrap;
    // p 요소는 상하 여백이 10px이며, 너비가 넘칠 경우 줄바꿈되지 않도록 설정됩니다.
  }

  div {
    padding: 10px;
    display: flex;
    width: 100%;
    // div 요소는 10px의 안쪽 여백을 갖고, 가로 너비는 100%입니다.
  }

  form {
    padding: 10px;
    display: flex;
    width: 100%;
    // form 요소는 10px의 안쪽 여백을 갖고, 가로 너비는 100%입니다.
  }

  input {
    padding: 10px;
    width: 100%;
    // input 요소는 10px의 안쪽 여백을 갖고, 가로 너비는 100%입니다.
  }

  textarea {
    resize: none;
    width: 100%;
    padding: 10px;
    outline: none;
    border: none;
    height: 5vh;
    // textarea 요소는 크기 조절이 불가능하며, 100%의 가로 너비와 10px의 안쪽 여백을 갖습니다.
  }
  // 컨텐츠를 수직으로 가운데로 정렬합니다.
  align-items: center;
`;
