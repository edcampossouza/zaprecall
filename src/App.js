import { useState } from "react";
import Game from "./components/Game";
import GlobalStyle from "./GlobalStyles";
import { cards as initialCards } from "./data";
import styled from "styled-components";

function App() {
  // possible statuses:
  // unplayed, playing, revealed, correct, almost, wrong
  initialCards.forEach((card) => (card.status = "unplayed"));
  const [cards, setCards] = useState(initialCards);
  return (
    <Container>
      <GlobalStyle />
      <Game cards={cards} />
    </Container>
  );
}

const Container = styled.div`
  font-family: "Recursive", sans-serif;
  background-color: #fb6b6b;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default App;
