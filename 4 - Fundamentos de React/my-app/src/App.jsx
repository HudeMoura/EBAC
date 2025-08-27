import { useEffect, useState } from "react"
import Tarefa from "./components/Tarefa"

const API_URL = 'https://crudcrud.com/api/908189f87e9744e799081b82a1f9d6c6/tarefas';

function App() {

  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  // Buscar os dados na API quando o componente for montado
  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(dados => setTarefas(dados))
    .catch(error => console.error("Erro ao buscar tarefas:", error))
  },[])

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(novaTarefa.trim() === '') return;

    // Envio da tarefa para API
    const nova = {texto: novaTarefa.trim()}
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(nova)
    })
    .then(res => res.json())
    .then(tarefaCriada => {
      setTarefas([...tarefas, tarefaCriada]);
      setNovaTarefa('');
    })
    .catch(error => console.error("Erro ao buscar tarefas:", error))

    setTarefas([...tarefas, nova]);
    setNovaTarefa('');

  }

  return (
    <main>
      <h1>To-Do List App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite uma nova tarefa" 
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tarefas.map(tarefa => <Tarefa key={tarefa._id} texto={tarefa.texto}/>)}
      </ul>
    </main>
  )
}

export default App
