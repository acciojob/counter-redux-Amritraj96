import React from "react";
import "../styles/App.css"; // Keeping your existing style import
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store";

const App = () => {
  // Access the counter state from the store
  const count = useSelector((state) => state);
  
  // Create the dispatch function to send actions
  const dispatch = useDispatch();

  return (
    <div>
      {/* 1st Child: The Counter Display */}
      <h1>{count}</h1>

      {/* 2nd Child: Increment Button */}
      <button onClick={() => dispatch(increment())}>Increment</button>

      {/* 3rd Child: Decrement Button */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;
