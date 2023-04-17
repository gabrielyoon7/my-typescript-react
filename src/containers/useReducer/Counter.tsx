import React, { useReducer } from 'react';

interface State {
  count: number;
}

interface Action {
  type: 'INCREMENT' | 'DECREMENT';
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  }

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  }

  return (
    <div>
      <h1>useReducer Count: {state.count}</h1>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </div>
  );
}
export default Counter;
