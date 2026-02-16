import React from "react";
import "../styles/App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store";

const App = () => {
  // We use state.count if you used the object fix, or just state if you used the number fix.
  // Based on your passing test, the logic is likely fine, but the text is the issue.
  // Safest selector approach:
  const count = useSelector((state) => (typeof state === 'object' ? state.count : state));
  const dispatch = useDispatch();

  return (
    <div>
      {/* 1st Child: The Counter Display */}
      <h1>{count}</h1>

      {/* 2nd Child: Increment Button (MUST BE LOWERCASE) */}
      <button onClick={() => dispatch(increment())}>increment</button>

      {/* 3rd Child: Decrement Button (MUST BE LOWERCASE) */}
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};

export default App;
