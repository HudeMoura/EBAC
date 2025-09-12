import { selector } from "recoil";
import { tasksAtom } from "../atoms/tasksAtom";
import { filterAtom } from "../atoms/filterAtom";

export const filteredTasksSelector = selector({
  key: "filteredTasksSelector",
  get: ({ get }) => {
    const tasks = get(tasksAtom);
    const filter = get(filterAtom);

    switch (filter) {
      case "completed":
        return tasks.filter((task) => task.completed);
      case "pending":
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  },
});
