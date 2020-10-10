import { useState } from "react";

export default (initialValue = false) => {
  const [state, setState] = useState(initialValue);
  const toggleState = () => {
    setState(!state);
  };
  return [state, toggleState];
};
