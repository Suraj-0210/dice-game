import { useState, useEffect } from "react";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { GamePlayOutlinedBtn, GamePlayBtn } from "./styled/Button";
import Rules from "./Rules";

function GamePlay() {
  const [error, setError] = useState(false);

  const [score, setScore] = useState(0);

  const [highScore, setHighScore] = useState(0);

  const [currentDice, setCurrentDice] = useState(1);

  const [selectedNumber, setSelectedNumber] = useState(0);

  const [showRules, setShowRules] = useState(false);

  const generateRandomNo = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  // Handle keydown events to select a dice number
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      // Check if the pressed key is a number between 1 and 6
      if (key >= "1" && key <= "6") {
        setSelectedNumber(parseInt(key, 10));
      }
    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyDown);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const roleDice = () => {
    if (selectedNumber === 0) {
      setError(true);
      return;
    }
    const randomNo = generateRandomNo();
    console.log(randomNo);
    setCurrentDice(randomNo);

    if (randomNo === selectedNumber) {
      setScore((prev) => prev + selectedNumber);
      setHighScore(highScore + randomNo);
    } else if (score < 2) {
      setScore(0); // If the score is less than 2, set it to 0 for a wrong guess
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(0);
  };

  const reset = () => {
    setScore(0);
    setCurrentDice(1);
    setSelectedNumber(0);
  };

  const toggleRules = () => {
    setShowRules((prev) => !prev);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} highScore={highScore} />
        <NumberSelector
          setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btn">
        <GamePlayOutlinedBtn onClick={reset}>Reset</GamePlayOutlinedBtn>
        <GamePlayBtn onClick={toggleRules}>
          {showRules ? "Hide Rules" : "Show Rules"}
        </GamePlayBtn>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.div`
  height: 100vh - calc(190px);
  padding-top: 30px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btn {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
