import { useState } from "react";

export const TodoForm = ({ addToDo }) => {
  const [taskToSave, setTaskToSave] = useState("");

  const handledSubmitTodo = (e) => {
    e.preventDefault();

    addToDo(taskToSave);
    setTaskToSave("");
  };

  return (
    <form className="TodoForm" onSubmit={handledSubmitTodo}>
      <input
        type="text"
        className="todo-input"
        value={taskToSave}
        placeholder="What is the task today?"
        onChange={(e) => setTaskToSave(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
