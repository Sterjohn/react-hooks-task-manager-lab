import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  // Fetch all tasks on mount
  useEffect(() => {
    fetch("http://localhost:6001/tasks")
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  // POST new task to backend and add to state
  function addTask(title) {
    fetch("http://localhost:6001/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, completed: false }),
    })
      .then(res => res.json())
      .then(newTask => setTasks(prev => [...prev, newTask]));
  }

  // PATCH task to toggle completed and update state
  function toggleComplete(task) {
    fetch(`http://localhost:6001/tasks/${task.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed }),
    })
      .then(res => res.json())
      .then(updated => setTasks(prev => prev.map(t => t.id === updated.id ? updated : t)));
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleComplete }}>
      {children}
    </TaskContext.Provider>
  );
}