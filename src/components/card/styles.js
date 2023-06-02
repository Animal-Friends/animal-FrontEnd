import styled from "styled-components";

export const Box = styled.div`
  background-color: #f9f9f9; //배경색
  border-radius: 10px; //테두리설정
  /* 필요한 다른 스타일링 옵션들 */
`;
export const CardBox = styled.div`
  display: flex; //요소 flex
  height: 200px; //높이
  cursor: pointer; // 커서

  &:hover {
    border-radius: 10px; //테두리 px
    background-color: #ff7f00;
    opacity: 0.45; //투명도 설정
    transition: all ease 1s 0s;
    /* 필요한 다른 스타일링 옵션들 */
  }
`;

export const BoxDetail = styled.div`
  padding: 10px; //여백 px
  display: flex; //flex요소 추가
  flex-direction: column;

  p {
    margin: 10px 0px;
    white-space: nowrap;
  }
`;

export const DataListBox = styled.div`
  padding: 30px;
`;
