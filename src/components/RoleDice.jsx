import styled from "styled-components";

function RoleDice(props) {
  return (
    <DiceContainer>
      <div onClick={props.roleDice} className="dice">
        <img
          style={{
            width: "250px",
            height: "250px",
          }}
          src={`images/dice/dice-${props.currentDice}.png`}
          alt=""
        />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
