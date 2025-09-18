import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskItem({ task }) {
  const { toggleTask, removeTask } = useContext(TaskContext);

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => toggleTask(task.id)}>{task.text}</span>
      <button onClick={() => removeTask(task.id)}>❌</button>
    </li>
  );
}
