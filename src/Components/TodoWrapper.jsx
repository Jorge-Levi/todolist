import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
uuidv4();

export const TodoWrapper = () => {
  const [toDoList, setToDoList] = useState([]);
  const addToDo = (todo) => {
    setToDoList([
      ...toDoList,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setToDoList(
      toDoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setToDoList(toDoList.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setToDoList(
      toDoList.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setToDoList(
      toDoList.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addToDo={addToDo}></TodoForm>
      {toDoList.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTask={editTask} task={todo} key={index} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
