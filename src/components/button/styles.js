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

export const HeaderBarContainer = styled.div`
  min-width: 1440px;

  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  text-align: center;
  display: flex;
  //justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
`;

export const Loginbutton = styled.button`
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
