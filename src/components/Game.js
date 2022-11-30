import Question from "./Question";
import styled from "styled-components";
import logo from "../assets/img/logo.png";

export default function Game({ cards }) {
  return (
    <>
      <Title>
        <img src={logo} />
        <span>ZapRecall</span>
      </Title>
      <QuestionContainer>
        {cards.map((card, index) => (
          <Question question={card} number={index + 1} />
        ))}
      </QuestionContainer>
    </>
  );
}

const Title = styled.h1`
  font-family: "Righteous", cursive;
  font-weight: 400;
  font-size: 36px;
  display: flex;
  align-items: center;
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
  margin-top: 51px;
`;
