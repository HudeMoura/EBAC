import { useRecoilState } from "recoil";
import { tasksAtom } from "../atoms/tasksAtom";

export default function TaskItem({ task }) {
  const [tasks, setTasks] = useRecoilState(tasksAtom);

  const toggleTask = () => {
    setTasks(
      tasks.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const removeTask = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <li>
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text}
      </span>
      <button onClick={toggleTask}>
        {task.completed ? "Desmarcar" : "Concluir"}
      </button>
      <button onClick={removeTask}>Remover</button>
    </li>
  );
}
