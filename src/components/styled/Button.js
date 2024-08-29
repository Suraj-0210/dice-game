import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  font-size: 16px;
  width: 220px;
  height: 44px;

  background-color: black;
  border: none;
  border-radius: 10px;
  color: white;
  transition: 0.3s ease-in;
  cursor: pointer;
  align-self: end;

  &:hover {
    background-color: white;
    border: 1px, solid black;
    color: black;
    transition: 0.3s ease-in;
  }
`;
export const GamePlayBtn = styled(Button)`
  align-self: center;
`;
export const GamePlayOutlinedBtn = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;

  transition: 0.3s ease-in;
  cursor: pointer;
  align-self: center;

  &:hover {
    background-color: black;
    border: 1px, solid transparent;
    color: white;
    transition: 0.3s ease-in;
  }
`;
