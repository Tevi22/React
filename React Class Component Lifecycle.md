## React Component Lifecycle ##

In React, class components have lifecycle phases, while functional components use hooks to manage component lifecycle and state. Let's explore both approaches.

**React Class Component Lifecycle Phases:**

1. **Mounting Phase:**

a. constructor(): Initializes the component, setting up state and binding methods.

b. render(): Renders the component's UI.

c.componentDidMount(): Invoked after the component is mounted to the DOM. Useful for initial data fetching.

2. **Updating Phase:**

a. render(): Re-renders the component's UI.

b. componentDidUpdate(prevProps, prevState): Invoked after a component has been updated. Useful for side effects, such as fetching data based on prop changes.

3. **Unmounting Phase:**

a. componentWillUnmount(): Invoked just before a component is unmounted and destroyed. Useful for cleanup tasks, such as clearing intervals or canceling network requests.

Here's an example of a class component with lifecycle methods:

jsx
Copy code
// ClassComponent.jsx

import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // Fetch initial data when the component mounts
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    // Fetch new data when props change
    if (this.props.someProp !== prevProps.someProp) {
      this.fetchData();
    }
  }

  componentWillUnmount() {
    // Cleanup tasks before the component is unmounted
    clearInterval(this.intervalId);
  }

  fetchData() {
    // Simulated data fetching
    // Update state when data is received
    setTimeout(() => {
      this.setState({ data: ['item1', 'item2'] });
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.data.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    );
  }
}

export default ClassComponent;

**React Functional Component with Hooks:**

React Hooks were introduced in React 16.8 to provide state and lifecycle features in functional components. Here's an example using the **useState**, **useEffect**, and **useCleanup** hooks:

jsx
Copy code
// FunctionalComponent.jsx

import React, { useState, useEffect, cleanup } from 'react';

function FunctionalComponent({ someProp }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch initial data when the component mounts
    fetchData();

    // Cleanup function (equivalent to componentWillUnmount)
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    // Fetch new data when someProp changes
    fetchData();
  }, [someProp]);

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

export default FunctionalComponent;

In this example, the **useState** hook is used to manage state, and the **useEffect** hook replaces lifecycle methods for side effects. The **cleanup** function is used for cleanup tasks when the component is unmounted.

Choose the approach that fits your project and coding style, but note that **functional components with hooks have become the standard in modern React development**.

## React Lifecycle Methods - Summary ##

Every component has 3 phases in its lifecycle
1. Mounting Phase
2. Updating Phase
3. Unmounting phase

useEffect hook  
useEffect(()=>{
     //implementation
},[array of dependencies])

**Variations of useEffect hook**

1. No dependency - useEffect executes once after component mounts and every time the component gets updated

2. An Empty array - useEffect executes only once after component mounts

3. Props or State  - useEffect executes only once after component mounts and then every time the dependency value changes

**API calls using axios**

API calls are made in React using axios

**Unmounting phase**

Component can be unmounted using unmountComponentAtNode method​​​​

***ReactDOM.unmountComponentAtNode( document.getElementById('root') );***

Before unmounting the component clean up can be done by returning a function from useEffect hook