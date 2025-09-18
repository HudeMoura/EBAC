import { useRecoilState } from "recoil";
import { tasksAtom } from "../atoms/tasksAtom";
import { useState } from "react";

export default function TaskInput() {
  const [tasks, setTasks] = useRecoilState(tasksAtom);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: input.trim(), completed: false },
    ]);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Adicionar</button>
    </div>
  );
}
