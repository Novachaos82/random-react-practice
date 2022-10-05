// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from "react";
function countReducer(previousState, newState) {
  //console.log({...previousState})
  //console.log({...previousState, ...newState})
  //const hold = {
  //  ...previousState,
  //  ...(typeof newState === 'function' ? newState(previousState) : newState),
  //}
  //console.log(previousState.count)
  //return hold
  switch (newState.type) {
    case "INCREMENT": {
      const hold = { count: previousState.count + newState.step };
      console.log(previousState);
      return hold;
    }
    default: {
      return;
    }
  }
}
function init(initialState = 0) {
  return { count: initialState };
}
function Counter({ initialCount = 0, step = 1 }) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  //const [count, setCount] = React.useState(initialCount)
  //const [state, newState] = React.useReducer(countReducer, {
  //  count: initialCount,
  //})
  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  //const increment = () => newState(step)

  //const {count} = state
  //const increment = () => newState({count: count + step})
  //const [state, setState] = React.useReducer(countReducer, {
  //  count: initialCount,
  //})
  //const {count} = state
  //const increment = () =>
  //  setState(currentState => ({count: currentState.count + step}))

  const [state, dispatch] = React.useReducer(countReducer, initialCount, init);

  const increment = () => dispatch({ type: "INCREMENT", step });

  return <button onClick={increment}>{state.count}</button>;
}

export default Counter;
