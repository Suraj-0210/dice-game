import { useState } from "react";
import styled from "styled-components";

function NumberSelector(props) {
  const dices = [1, 2, 3, 4, 5, 6];

  console.log(props.selectedNumber);

  const onClickNumberSelectorHandler = (value) => {
    props.setSelectedNumber(value);
    props.setError(false);
  };

  return (
    <NumberSelectorContainer>
      <p className="error">
        {props.error && "You have not selected any number"}
      </p>
      <div className="flex">
        {dices.map((value, index) => (
          <Box
            isselected={value == props.selectedNumber}
            onClick={() => onClickNumberSelectorHandler(value)}
            key={index}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Any Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  .error {
    color: red;
  }
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    display: flex;
    font-size: 24px;
    font-weight: 700px;
    align-self: end;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700px;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (props.isselected ? "white" : "black")};
  cursor: pointer;
`;
