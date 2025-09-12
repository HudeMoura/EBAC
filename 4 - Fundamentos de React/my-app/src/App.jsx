import ListaTarefas from "./components/ListaTarefas";
import Login from "./components/Login";
import { useRecoilValue } from 'recoil';
import userState from "./state/user";
import { tarefasCountSelector } from "./state/tarefas";

function App() {

  const usuario = useRecoilValue(userState);
  const tarefasCount = useRecoilValue(tarefasCountSelector);

  return (
      <main>
        <h1>{usuario.nome}'s List App({tarefasCount})</h1>
        {usuario.estaLogado ? <ListaTarefas/> : <Login/>}
      </main>
  )
}

export default App
