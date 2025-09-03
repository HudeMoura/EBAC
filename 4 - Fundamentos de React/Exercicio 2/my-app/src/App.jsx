import React, { useContext, useMemo } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";
import { TaskContext } from "./context/TaskContext";

export default function App() {
  const { tasks, filter } = useContext(TaskContext);

  // useMemo para evitar recalcular a lista filtrada desnecessariamente
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "completed":
        return tasks.filter((task) => task.completed);
      case "pending":
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  return (
    <div className="container">
      <h1>✅ Lista de Tarefas</h1>
      <TaskForm />
      <FilterButtons />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}
