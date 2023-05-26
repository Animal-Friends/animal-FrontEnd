import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999999999999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

export const LoginBox = styled.form`
  padding: 20px;
`;

export const InputStyle = {
  width: "100%",
  marginBottom: "10px",
};
export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
