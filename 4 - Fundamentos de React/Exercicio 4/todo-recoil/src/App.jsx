import { RecoilRoot } from "recoil";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";

function App() {
  return (
    <RecoilRoot>
      <h1>Lista de Tarefas</h1>
      <TaskInput />
      <FilterButtons />
      <TaskList />
    </RecoilRoot>
  );
}

export default App;
