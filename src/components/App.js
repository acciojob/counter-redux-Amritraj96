import React from "react";
import "../styles/App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store";

const App = () => {
  // Fix: Select the specific 'count' property from the state object
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      {/* 1st Child: The Counter Display */}
      {/* Adding id="counter" is a common safety net for tests finding this element */}
      <h1 id="counter">{count}</h1>

      {/* 2nd Child: Increment Button */}
      <button onClick={() => dispatch(increment())}>Increment</button>

      {/* 3rd Child: Decrement Button */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;
