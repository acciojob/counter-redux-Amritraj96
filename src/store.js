import { createStore } from "redux";

// --- ACTION TYPES ---
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// --- ACTION CREATORS ---
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

// --- REDUCER ---
// Fix: Use an object for state instead of a primitive number
const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// --- STORE ---
const store = createStore(counterReducer);

export default store;
