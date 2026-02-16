import { createStore } from "redux";

// --- ACTION TYPES ---
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// --- ACTION CREATORS ---
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

// --- REDUCER ---
// Initial state must be 0 as per requirements
const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// --- STORE ---
const store = createStore(counterReducer);

export default store;
