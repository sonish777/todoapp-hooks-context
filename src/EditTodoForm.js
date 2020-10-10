import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";

function EditTodoForm({ id, todo, toggleEditForm }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(todo);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, newTask: value });
        reset();
        toggleEditForm();
      }}
      style={{
        marginLeft: "1rem",
        width: "50%",
      }}
    >
      <TextField
        fullWidth
        margin="normal"
        value={value}
        onChange={handleChange}
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;