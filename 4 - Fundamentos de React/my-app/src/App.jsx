import { useEffect, useState } from "react"
import ListaTarefas from "./components/ListaTarefas"
import Login from "./components/Login";
import { UserContext } from "./contexts/UserContext";

function App() {

  const [usuario, setUsuario] = useState ({nome: null, estaLogado: false});


  return (
    <UserContext.Provider value={{usuario, setUsuario}}>
      <main>
        <h1>{usuario.nome}'s List App</h1>
        {usuario.estaLogado ? <ListaTarefas/> : <Login/>}
        
      </main>
    </UserContext.Provider>
  )
}

export default App
