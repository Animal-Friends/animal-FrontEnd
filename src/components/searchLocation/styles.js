import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px;
`;
export const StyledSelect = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  font-size: 16px;
  transition: border-color 0.3s ease-in-out;
  outline: none;

  &:hover {
    border-color: #999;
  }

  &:focus {
    outline: none;
    border-color: #555;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;

export const StyledOption = styled.option`
  padding: 10px;
  background-color: #fff;
  color: #333;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;
  outline: none;

  &:hover {
    background-color: #f1f1f1;
  }
`;
