import { useState } from "react";
import Game from "./components/Game";
import GlobalStyle from "./GlobalStyles";
import { cards as initialCards } from "./data";
import styled from "styled-components";

function App() {
  initialCards.forEach((card) => (card.played = false));
  const [cards, setCards] = useState(initialCards);
  return (
    <Container>
      <GlobalStyle />
      <Game />
    </Container>
  );
}

const Container = styled.div`
  font-family: "Recursive", sans-serif;
  background-color: #FB6B6B;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default App;
