import styled from "styled-components";
import arrowPlay from "../assets/img/seta_play.png";
import arrowReveal from "../assets/img/seta-virar.png";

export default function Question({ question, number }) {
  let content = null;
  switch (question.status) {
    case "unplayed":
      content = (
        <UnplayedCard>
          Pergunta {number} <ImgSetaPlay src={arrowPlay} />{" "}
        </UnplayedCard>
      );
      break;
    case "playing":
      content = (
        <PlayingCard>
          {question.question}{" "}
          <ImgContainer>
            <ImgSetaReveal src={arrowReveal} />
          </ImgContainer>
        </PlayingCard>
      );
      break;
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
`;

const BaseCard = styled.li`
  font-family: "Recursive", sans-serif;
  width: 300px;
  margin-bottom: 25px;
  padding: 25px;
  border-radius: 5px;
  box-sizing: border-box;
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

const CorrectCard = styled(BaseCard)`
  background-color: #ffffff;
`;

const AlmostCard = styled(BaseCard)`
  background-color: #ffffff;
`;

const WrongCard = styled(BaseCard)`
  background-color: #ffffff;
`;
