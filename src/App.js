import React, { useState } from "react";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("");
  };

  const removerTarefa = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  return (
    <div className="App" style={styles.container}>
      <h1 style={styles.titulo}>Lista de Tarefas</h1>
      <div style={styles.formulario}>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma tarefa"
          style={styles.input}
        />
        <button onClick={adicionarTarefa} style={styles.botao}>
          Adicionar
        </button>
      </div>
      <ul style={styles.lista}>
        {tarefas.map((tarefa, index) => (
          <li key={index} style={styles.item}>
            {tarefa}
            <button onClick={() => removerTarefa(index)} style={styles.remover}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "30px",
    maxWidth: "500px",
    margin: "auto",
    textAlign: "center",
  },
  titulo: {
    color: "#333",
  },
  formulario: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: "1",
    padding: "10px",
    fontSize: "16px",
  },
  botao: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  lista: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    background: "#f5f5f5",
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  remover: {
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default App;

