import { useState } from "react";
import Game from "./components/Game";
import GlobalStyle from "./GlobalStyles";
import { cards as initialCards } from "./data";

function App() {
  initialCards.forEach((card) => (card.played = false));
  const [cards, setCards] = useState(initialCards);
  return (
    <>
      <GlobalStyle />
      <Game />
      <p>{JSON.stringify(cards)}</p>
    </>
  );
}

export default App;
