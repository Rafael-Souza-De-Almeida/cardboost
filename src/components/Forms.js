import { useState } from "react";

export function Forms({ onFlashCards }) {
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (pergunta === "" || resposta === "") {
      alert("Preencha todos os campos!");
      return;
    }

    const novaPergunta = {
      id: "id-" + Math.random().toString(36) + "-" + Date.now(),
      pergunta,
      resposta,
    };

    onFlashCards(novaPergunta);

    setPergunta("");
    setResposta("");
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          value={pergunta}
          onChange={(e) => setPergunta(e.target.value)}
          type="text"
          placeholder="Digite a pergunta"
          className="textbox"
        />
        <input
          value={resposta}
          onChange={(e) => setResposta(e.target.value)}
          type="text"
          placeholder="Digite a resposta"
          className="textbox"
        />

        <div className="enviar-container">
          <button className="enviar-btn">Enviar</button>
        </div>
      </form>
    </div>
  );
}
