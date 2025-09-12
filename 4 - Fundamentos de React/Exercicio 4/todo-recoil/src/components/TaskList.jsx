import { useRecoilValue } from "recoil";
import { filteredTasksSelector } from "../selectors/filteredTasksSelector";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const filteredTasks = useRecoilValue(filteredTasksSelector);

  return (
    <ul>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

