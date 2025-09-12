import { useContext, useEffect, useState } from "react"
import Tarefa from "./Tarefa"
import { useInput } from "../hooks/useInput";
import styles from './ListaTarefas.module.css'
import { useRecoilState, useRecoilValue } from "recoil";
import userState from "../state/user";
import { tarefasState } from "../state/tarefas";

const API_URL = 'https://crudcrud.com/api/908189f87e9744e799081b82a1f9d6c6/tarefas';

function ListaTarefas() {

  const [tarefas, setTarefas] = useRecoilState(tarefasState);
  const tarefa = useInput();
  const usuario = useRecoilValue(userState);

  // Buscar os dados na API quando o componente for montado
  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(dados => setTarefas(dados))
    .catch(error => console.error("Erro ao buscar tarefas:", error))
  },[])

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(tarefa.valor === '') return;

    // Envio da tarefa para API
    const nova = {usuario: usuario.nome, texto: tarefa.valor}
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(nova)
    })
    .then(res => res.json())
    .then(tarefaCriada => {
      setTarefas([...tarefas, tarefaCriada]);
      tarefa.limpar();
    })
    .catch(error => console.error("Erro ao buscar tarefas:", error))

    setTarefas([...tarefas, nova]);
    setNovaTarefa('');

  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} type="text" placeholder="Digite uma nova tarefa" 
          value={tarefa.valor}
          onChange={tarefa.onChange}
        />
        <button className={styles.button} type="submit">Adicionar</button>
      </form>
      <ul className={styles.list}>
        {tarefas
          .filter(tarefa => tarefa.usuario === usuario.nome)
        .map(tarefa => <Tarefa key={tarefa._id} texto={tarefa.texto}/>)}
      </ul>
    </>
  )
}

export default ListaTarefas
