import React from "react";
import "./App.css";

import reducer from './reducers/counterReducer'
import actions from './actions/counterActions'

const initialState = {counter: 0, step: 1};

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>Counter with useReducer</h1>
      <h1>Counter : {state.counter} | Step : {state.step}</h1>
      <button onClick={() => dispatch({ type: actions.INCREMENT_STEP })}>Increment step</button>
      <button onClick={() => dispatch({ type: actions.INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: actions.DECREMENT })}>Decrement</button>
      <button onClick={() => dispatch({ type: actions.DECREMENT_STEP })}>Decrement step</button>
    </div>
  );
}
