import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function FilterButtons() {
  const { filter, setFilter } = useContext(TaskContext);

  return (
    <div className="filters">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        Todas
      </button>
      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => setFilter("completed")}
      >
        Concluídas
      </button>
      <button
        className={filter === "pending" ? "active" : ""}
        onClick={() => setFilter("pending")}
      >
        Pendentes
      </button>
    </div>
  );
}

export default React.memo(FilterButtons);
