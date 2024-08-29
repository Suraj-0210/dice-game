import styled from "styled-components";

function TotalScore(props) {
  return (
    <ScoreContainer>
      <h1>{props.score}</h1>
      <p>Total Score</p>
      <p className="high_score">High Score {props.highScore}</p>
    </ScoreContainer>
  );
}

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  max-height: 190px;

  .high_score {
    font-size: 24px;
    font-weight: 500px;
    color: red;
  }
  h1 {
    font-size: 100px;
    line-height: 0px;
  }
  p {
    font-size: 20px;
    font-weight: 500px;
    max-height: min-content;
  }
`;
