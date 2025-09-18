import React, { createContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [storedTasks, setStoredTasks] = useLocalStorage("tasks", []);
  const [tasks, setTasks] = useState(storedTasks);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setStoredTasks(tasks);
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTask, removeTask, filter, setFilter }}
    >
      {children}
    </TaskContext.Provider>
  );
};
