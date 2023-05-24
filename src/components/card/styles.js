import styled from "styled-components";

export const Box = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  /* 필요한 다른 스타일링 옵션들 */
`;
export const CardBox = styled.div`
  display: flex;
  height: 200px;

  &:hover {
    border-radius: 10px;
    background-color: #ff7f00;
    opacity: 0.45;
    /* 필요한 다른 스타일링 옵션들 */
  }
`;

export const BoxDetail = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;

  p {
    margin: 10px 0px;
    white-space: nowrap;
  }
`;

export const DataListBox = styled.div`
  padding: 30px;
`;
