import styled from "styled-components";
import arrowPlay from "../assets/img/seta_play.png";
import arrowReveal from "../assets/img/seta-virar.png";

export default function Question({
  question,
  number,
  playCard,
  showAnswer,
  setStatus,
}) {
  const status = question.status;
  return (
    <Card data-test="flashcard" status={status}>
      <Row>
        <span data-test="flashcard-text">
          {status === "playing"
            ? question.question
            : status === "revealed"
            ? question.answer
            : `Pergunta ${number + 1}`}
        </span>
        {status === "unplayed" ? (
          <ImgSetaPlay
            onClick={playCard}
            src={arrowPlay}
            data-test="play-btn"
          />
        ) : null}
      </Row>

      {status === "playing" ? (
        <Row align={"end"}>
          <ImgArrowReveal
            src={arrowReveal}
            onClick={showAnswer}
            data-test="turn-btn"
          />{" "}
        </Row>
      ) : status === "revealed" ? (
        <Row>
          <ButtonsContainer>
            <AnswerButton
              color="#FF3030"
              onClick={() => setStatus("wrong")}
              data-test="no-btn"
            >
              Não lembrei{" "}
            </AnswerButton>
            <AnswerButton
              color="#FF922E"
              onClick={() => setStatus("almost")}
              data-test="partial-btn"
            >
              Quase não lembrei
            </AnswerButton>
            <AnswerButton
              color="#2FBE34"
              onClick={() => setStatus("correct")}
              data-test="zap-btn"
            >
              Zap!
            </AnswerButton>
          </ButtonsContainer>
        </Row>
      ) : null}
    </Card>
  );
}

const colorsMap = {
  wrong: "#ff3030",
  almost: "#ff922e",
  correct: "#2fbe34",
};

const Row = styled.span`
  display: flex;
  justify-content: ${(props) =>
    props.align === "end" ? "flex-end" : "space-between"};
`;

const ImgSetaPlay = styled.img`
  width: 20px;
  height: 23px;
  &:hover {
    cursor: pointer;
  }
`;

const ImgArrowReveal = styled.img`
  width: 30px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Card = styled.li`
  font-family: "Recursive", sans-serif;
  background-color: ${(props) =>
    props.status === "playing" || props.status === "revealed"
      ? "#ffffd4"
      : "#ffffff"};
  color: ${(props) => colorsMap[props.status] || "#333333"};
  font-size: ${(props) =>
    props.status === "playing" || props.status === "revealed"
      ? "18px"
      : "16px"};
  font-weight: ${(props) =>
    props.status === "playing" || props.status === "revealed" ? "400" : "700"};
  text-decoration-line: ${(props) =>
    colorsMap[props.status] ? "line-through" : "none"};
  width: 300px;
  margin-bottom: 25px;
  padding: 15px;
  border-radius: 5px;
  box-sizing: border-box;
`;
const ButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const AnswerButton = styled.button`
  width: 85px;
  height: 37px;
  padding-left: 10px;
  padding-right: 10px;
  color: #ffffff;
  font-size: 12px;
  border-style: none;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  font-family: "Recursive", sans-serif;
  &:hover {
    cursor: pointer;
  }
`;
