import { useState } from "react";

export function FlashCards({ flashcards, onClear, onDelete }) {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <>
      <div className="flashcards">
        {flashcards.map((flashcard) => (
          <div
            key={flashcard.id}
            className={flashcard === selectedId ? "selected" : ""}
            onClick={() => handleClick(flashcard)}
          >
            <p>
              {flashcard !== selectedId
                ? flashcard.pergunta
                : flashcard.resposta}
            </p>

            <button onClick={() => onDelete(flashcard.id)} className="btn">
              X
            </button>
          </div>
        ))}
      </div>

      <div className="apagar-container">
        <button className="apagar-btn" onClick={() => onClear()}>
          Apagar Tudo
        </button>
      </div>
    </>
  );
}
