import React, { createContext } from "react";
// import useTodoState from "../hooks/useTodoState";
import todoReducer from "../reducers/todos.reducer";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";

const defaultTodos = [];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
