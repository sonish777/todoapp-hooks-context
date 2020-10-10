import React, { useContext } from "react";
import { Paper, List, Divider } from "@material-ui/core";
import TodoItem from "./TodoItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { TodosContext } from "./contexts/todos.context";

function TodoList() {
  const todos = useContext(TodosContext);
  return (
    <Paper className={`todo-list ${todos.length <= 0 ? "zero-ht" : ""}`}>
      <List style={{ overflowY: "hidden" }}>
        <TransitionGroup>
          {todos.map((todo, i) => (
            <CSSTransition key={todo.id} classNames="todo" timeout={600}>
              <div className="todo">
                <TodoItem
                  task={todo.task}
                  id={todo.id}
                  completed={todo.completed}
                />
                {i < todos.length - 1 && <Divider />}
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </List>
    </Paper>
  );
}

export default TodoList;
