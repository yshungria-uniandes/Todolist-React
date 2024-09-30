import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

const App = () => {
  const [tasks, setTasks] = useState([]); // Almacenar tareas

  // Añadir una nueva tarea
  const addTask = (label) => {
    if (label.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), label }]);
    }
  };

  // Eliminar una tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} />
      {tasks.length === 0 ? (
        <p className="no-tasks-message">No hay tareas, añadir tareas</p>
      ) : (
        <>
          <p className="tasks-count">Tienes {tasks.length} {tasks.length === 1 ? "tarea" : "tareas"}</p>
        </>
      )}
    </div>
  );
};

export default App;
