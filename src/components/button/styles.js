import styled from "styled-components";

export const CommonStyleButton = styled.button`
  width: 160px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #ff7f50; /* 새로운 색상 */
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff6347; /* 호버 효과에 적용되는 색상 */
  }

  &:active {
    background-color: #ff4500; /* 클릭 효과에 적용되는 색상 */
  }
`;
