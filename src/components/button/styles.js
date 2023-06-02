import styled from "styled-components";

export const CommonStyleButton = styled.button`
  width: 160px; //너비
  height: 40px; // 높이
  border: none; // 테두리없애기
  border-radius: 10px; //테두리 px
  background-color: #ff7f50; /* 새로운 색상 */
  color: white; //색상
  font-size: 16px; //폰트사이즈
  font-weight: bold; //폰트굵기
  cursor: pointer; //커서
  transition: background-color 0.3s ease; //0.3초 지연

  &:hover {
    background-color: #ff6347; /* 호버 효과에 적용되는 색상 */
  }

  &:active {
    background-color: #ff4500; /* 클릭 효과에 적용되는 색상 */
  }
`;

export const HeaderBarContainer = styled.div`
  min-width: 1440px; /* 최소 너비를 1440px로 설정 */

  width: 100%; /* 너비를 100%로 설정 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 그림자 효과 설정 */
  padding: 10px; /* 내부 여백을 10px로 설정 */
  text-align: center; /* 텍스트 정렬을 가운데로 설정 */
  display: flex; /* Flexbox 레이아웃 사용 */
  //justify-content: center; /* 주축 가운데 정렬 설정 (주석 처리됨) */
  flex-direction: row; /* 아이템들을 가로로 배치하는 행 방향 설정 */
  align-items: center; /* 아이템들을 수직 중앙으로 정렬 */
  margin-bottom: 25px; /* 하단 여백을 25px로 설정 */
`;

export const Loginbutton = styled.button`
  //위 내용과 같습니다.
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
