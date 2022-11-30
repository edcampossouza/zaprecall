import styled from "styled-components";
import arrowPlay from "../assets/img/seta_play.png";
import arrowReveal from "../assets/img/seta-virar.png";

export default function Question({ question, number, playCard, showAnswer }) {
  let content = null;
  switch (question.status) {
    case "unplayed":
      content = (
        <UnplayedCard onClick={playCard}>
          Pergunta {number + 1} <ImgSetaPlay src={arrowPlay} />{" "}
        </UnplayedCard>
      );
      break;
    case "playing":
      content = (
        <PlayingCard>
          {question.question}{" "}
          <ImgContainer>
            <ImgSetaReveal src={arrowReveal} onClick={showAnswer} />
          </ImgContainer>
        </PlayingCard>
      );
      break;
    case "revealed":
      content = (
        <RevealedCard>
          {question.answer}
          <ButtonsContainer>
            <AnswerButton color="#FF3030">Não lembrei </AnswerButton>
            <AnswerButton color="#FF922E">Quase não lembrei</AnswerButton>
            <AnswerButton color="#2FBE34">Zap!</AnswerButton>
          </ButtonsContainer>
        </RevealedCard>
      );
  }
  return content;
}

const ImgSetaPlay = styled.img`
  width: 20px;
  height: 23px;
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
`;

const UnplayedCard = styled(BaseCard)`
  font-weight: 700;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  height: 65px;
  &:hover {
    cursor: pointer;
  }
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

const CorrectCard = styled(BaseCard)`
  background-color: #ffffff;
`;

const AlmostCard = styled(BaseCard)`
  background-color: #ffffff;
`;

const WrongCard = styled(BaseCard)`
  background-color: #ffffff;
`;
