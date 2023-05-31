import styled, { css } from "styled-components";

export const TopContainerStyle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  h3 {
    margin-left: 30px;
  }
`;

export const UploadTopStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  padding: 10px;
`;

export const RootStyle = styled.div`
  padding: 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

export const CommentRootStyle = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CommentBox = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

export const CommentContent = styled.div`
  display: flex;
  align-items: center;
`;
export const Button = styled.button`
  width: 200px;
  padding: 10px 0px;
  border-radius: 10px;
  background-color: #6eeaff;
  margin-left: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5ac8ff;
  }
`;

// 스타일드 컴포넌트 생성
export const Input = styled.input`
  /* 비활성화 스타일 */
  ${(props) =>
    props.disabled &&
    css`
      background-color: white;

      /* 추가적인 스타일을 여기에 작성하세요 */
    `};

  /* 활성화 스타일 */
  /* 추가적인 스타일을 여기에 작성하세요 */
`;

export const NullableStyle = styled.div`
  p {
    font-weight: bold;
  }

  width: 100%;
  margin: 10px 0px;
  text-align: center;
`;

export const UploadRootConatiner = styled.div`
  padding: 10px;
`;

export const UploadSubContentStyle = styled.div`
  min-width: 310px;
  width: 100%;
  display: flex;
  margin: 10px 0px;
  justify-content: center;

  p {
    margin: 10px 10px;
    white-space: nowrap;
  }

  div {
    padding: 10px;
    display: flex;
    width: 100%;
  }

  form {
    padding: 10px;
    display: flex;
    width: 100%;
  }

  input {
    padding: 10px;
    width: 100%;
  }

  textarea {
    resize: none;
    width: 100%;
    padding: 10px;
    outline: none;
    border: none;
    height: 5vh;
  }

  align-items: center;
`;
