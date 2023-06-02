import styled from "styled-components";

export const RootNavContainer = styled.div`
  //min-width: 1440px; /* 최소 너비를 1440px로 설정 (주석 처리됨) */
  width: 100%; /* 너비를 100%로 설정 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 그림자 효과 설정 */

  padding: 10px; /* 내부 여백을 10px로 설정 */
  display: flex; /* Flexbox 레이아웃 사용 */
  flex-direction: row; /* 아이템들을 가로로 배치하는 행 방향 설정 */
  justify-content: space-between; /* 아이템들을 좌우로 공간을 분배하여 배치 */
  align-items: center; /* 아이템들을 수직 중앙으로 정렬 */
  margin-bottom: 25px; /* 하단 여백을 25px로 설정 */
`;

export const LoginBox = styled.div`
  display: flex; /* Flexbox 레이아웃 사용 */
  gap: 20px; /* 아이템들 사이의 간격을 20px로 설정 */
`;

export const RogoBox = styled.div``;
