import React, { useState } from "react";

const App = () => {
  const [pregunta, setPregunta] = useState("");
  const [opcion1, setOpcion1] = useState("");
  const [opcion2, setOpcion2] = useState("");
  const [mostrarEncuesta, setMostrarEncuesta] = useState(false);
  const [votosOpcion1, setVotosOpcion1] = useState(0);
  const [votosOpcion2, setVotosOpcion2] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setMostrarEncuesta(true);
  };

  const handleVotarOpcion1 = () => {
    setVotosOpcion1(votosOpcion1 + 1);
  };

  const handleVotarOpcion2 = () => {
    setVotosOpcion2(votosOpcion2 + 1);
  };

  if (!mostrarEncuesta) {
    return (
      <div>
        <h2>Atividade REACT - Rodrigo Prieto - Exercício 1</h2>
        <h3>Criar enquete</h3>
        <form onSubmit={handleFormSubmit}>
          <label>
            Pergunta:
            <input
              type="text"
              value={pregunta}
              onChange={(e) => setPregunta(e.target.value)}
              required
            />
          </label>
          <br />
          <br />
          <label>
            Opção 1:
            <input
              type="text"
              value={opcion1}
              onChange={(e) => setOpcion1(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Opção 2:
            <input
              type="text"
              value={opcion2}
              onChange={(e) => setOpcion2(e.target.value)}
              required
            />
          </label>
          <br />
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h2>Enquete</h2>
      <h3>{pregunta}</h3>
      <button onClick={handleVotarOpcion1}>
        {opcion1} - Votos: {votosOpcion1}
      </button>
      <button onClick={handleVotarOpcion2}>
        {opcion2} - Votos: {votosOpcion2}
      </button>
    </div>
  );
};

export default App;
