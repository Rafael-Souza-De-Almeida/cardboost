import { useState } from "react";

import { Logo } from "./Logo";
import { Forms } from "./Forms";
import { FlashCards } from "./FlashCards";

export default function App() {
  const [flashcards, setFlashCards] = useState([]);

  function handleAddFlashCards(novoFlashCard) {
    setFlashCards((flashcards) => [...flashcards, novoFlashCard]);
  }

  function handleDeleteFlashCard(id) {
    setFlashCards(flashcards.filter((fc) => fc.id !== id));
  }

  function handleClear() {
    const confirmar = window.confirm(
      "Tem certeza que você deseja apagar tudo?"
    );

    if (confirmar) {
      setFlashCards([]);
    }
  }
  return (
    <div className="App">
      <Logo />
      <Forms onFlashCards={handleAddFlashCards} />
      <FlashCards
        flashcards={flashcards}
        onClear={handleClear}
        onDelete={handleDeleteFlashCard}
      />
    </div>
  );
}
