import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <p>Nenhuma tarefa encontrada.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

// memo evita re-renderizações desnecessárias
export default React.memo(TaskList);
