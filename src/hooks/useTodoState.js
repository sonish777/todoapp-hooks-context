import { useState, useEffect } from "react";
import { v4 } from "uuid";

export default (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([...todos, { id: v4(), task: newTodoText, completed: false }]);
    },
    removeTodo: (todoId) => {
      setTodos(todos.filter((todo) => todo.id !== todoId));
    },
    toggleTodo: (todoId) => {
      setTodos(
        todos.map((todo) =>
          todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodos);
    },
  };
};
