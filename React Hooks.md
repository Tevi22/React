## React Hooks ##

React Hooks are functions that allow functional components to manage state, side effects, and other React features that were traditionally only available in class components. Hooks were introduced in React 16.8 to simplify and improve the organization of logic in functional components. Here are some commonly used React Hooks:

1. **useState:**

-Allows functional components to have local state.
-Syntax: **const [state, setState]** = **useState(initialState);**

jsx
Copy code
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

2. **useEffect:**

-Enables performing side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.
Syntax: **useEffect(() => { /* effect */ }, [dependencies]);**

jsx
Copy code
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();

    // Cleanup function (equivalent to componentWillUnmount)
    return () => {
      // Cleanup tasks
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const fetchData = () => {
    // Simulated data fetching
    // Update state when data is received
    setTimeout(() => {
      setData(['item1', 'item2']);
    }, 1000);
  };

  return (
    <div>
      {data.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

3. **useContext:**

-Allows accessing the value of a React context within a functional component.
-Syntax: **const contextValue = useContext(MyContext);**

jsx
Copy code
import React, { useContext } from 'react';
import MyContext from './MyContext';

function MyComponent() {
  const contextValue = useContext(MyContext);

  return (
    <div>
      <p>Value from Context: {contextValue}</p>
    </div>
  );
}

4. **useReducer:**

-A more advanced alternative to useState. It is typically used for managing more complex state logic.
-Syntax: **const [state, dispatch] = useReducer(reducer, initialState);**

jsx
Copy code
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
    </div>
  );
}

These are just a few examples of the many hooks available in React. Hooks provide a more concise and readable way to manage state and side effects in functional components, making the code easier to understand and maintain.

Hooks are simple JavaScript functions, but they need to adhere to the following rules:

1. Hooks should be called at the top level of the functions.

2. Users should not call hooks in loops, conditions, and nested functions.

3. Hooks can be called only within React functions or functional components or custom hooks.





