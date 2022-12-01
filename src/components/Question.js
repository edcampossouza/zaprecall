import styled from "styled-components";
import arrowPlay from "../assets/img/seta_play.png";
import arrowReveal from "../assets/img/seta-virar.png";
import icon_correct from "../assets/img/icone_certo.png";
import icon_almost from "../assets/img/icone_quase.png";
import icon_wrong from "../assets/img/icone_erro.png";

export default function Question({
  question,
  number,
  playCard,
  showAnswer,
  setStatus,
}) {
  let content = null;
  switch (question.status) {
    case "unplayed":
      content = (
        <UnplayedCard data-test="flashcard">
          <span data-test="flashcard-text">Pergunta {number + 1}</span>
          <ImgSetaPlay
            onClick={playCard}
            src={arrowPlay}
            data-test="play-btn"
          />{" "}
        </UnplayedCard>
      );
      break;
    case "playing":
      content = (
        <PlayingCard data-test="flashcard">
          <span data-test="flashcard-text">{question.question}</span>
          <ImgContainer>
            <ImgSetaReveal
              src={arrowReveal}
              onClick={showAnswer}
              data-test="turn-btn"
            />
          </ImgContainer>
        </PlayingCard>
      );
      break;
    case "revealed":
      content = (
        <RevealedCard data-test="flashcard">
          <span data-test="flashcard-text">{question.answer}</span>
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
        </RevealedCard>
      );
      break;
    case "wrong":
      content = (
        <WrongCard data-test="flashcard">
          <span data-test="flashcard-text">Pergunta {number + 1}</span>
          <ImgIcon src={icon_wrong} data-test="no-icon" />
        </WrongCard>
      );
      break;
    case "correct":
      content = (
        <CorrectCard data-test="flashcard">
          <span data-test="flashcard-text">Pergunta {number + 1}</span>
          <ImgIcon src={icon_correct} data-test="zap-icon" />{" "}
        </CorrectCard>
      );
      break;
    case "almost":
      content = (
        <AlmostCard data-test="flashcard">
          <span data-test="flashcard-text">Pergunta {number + 1}</span>
          <ImgIcon src={icon_almost} data-test="partial-icon" />{" "}
        </AlmostCard>
      );
      break;
    default:
      content = "Algo deu errado...";
  }
  return content;
}

const ImgSetaPlay = styled.img`
  width: 20px;
  height: 23px;
  &:hover {
    cursor: pointer;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ImgSetaReveal = styled.img`
  width: 30px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const ImgIcon = styled.img`
  width: 23px;
  height: 23px;
`;

const BaseCard = styled.li`
  font-family: "Recursive", sans-serif;
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

const UnplayedCard = styled(BaseCard)`
  font-weight: 700;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  height: 65px;
`;

const PlayingCard = styled(BaseCard)`
  background-color: #ffffd4;
  min-height: 131px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &div.ImgContainer {
    display: flex;
    justify-content: flex-end;
  }
`;

const RevealedCard = styled(BaseCard)`
  background-color: #ffffd4;
`;

const CorrectCard = styled(UnplayedCard)`
  color: #2fbe34;
  text-decoration-line: line-through;
  &:hover {
    cursor: default;
  }
`;

const AlmostCard = styled(UnplayedCard)`
  color: #ff922e;
  text-decoration-line: line-through;
  &:hover {
    cursor: default;
  }
`;

const WrongCard = styled(UnplayedCard)`
  color: #ff3030;
  text-decoration-line: line-through;
  &:hover {
    cursor: default;
  }
`;
