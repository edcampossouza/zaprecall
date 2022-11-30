import Question from "./Question";
import Footer from "./Footer";
import styled from "styled-components";
import logo from "../assets/img/logo.png";

export default function Game({ cards, setCards }) {
  function playCard(index) {
    const newCards = cards.map((a) =>
      a.status === "playing" ? { ...a, status: "unplayed" } : { ...a }
    );
    newCards[index].status = "playing";
    setCards(newCards);
  }
  function showAnswer(index) {
    const newCards = cards.map((a) => ({ ...a }));
    newCards[index].status = "revealed";
    setCards(newCards);
  }
  function setStatus(index, status) {
    const newCards = cards.map((a) => ({ ...a }));
    newCards[index].status = status;
    setCards(newCards);
  }
  return (
    <>
      <Title>
        <img src={logo} />
        <span>ZapRecall</span>
      </Title>
      <QuestionContainer>
        {cards.map((card, index) => (
          <Question
            key={index}
            question={card}
            number={index}
            playCard={() => playCard(index)}
            showAnswer={() => showAnswer(index)}
            setStatus={(status) => setStatus(index, status)}
          />
        ))}
      </QuestionContainer>
      <Footer />
    </>
  );
}

const Title = styled.h1`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 102px;
  display: flex;
  justify-content: center;
  font-family: "Righteous", cursive;
  font-weight: 400;
  font-size: 36px;
  display: flex;
  align-items: center;
  background-color: #fb6b6b;
  color: #ffffff;
  span {
    width: 204px;
    text-align: center;
  }
  img {
    width: 52px;
    height: 60px;
  }
`;

const QuestionContainer = styled.ul`
  margin-top: 150px;
  margin-bottom: 116px;
`;
