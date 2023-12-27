## JSX for React Componets ##

jsx vs pure JS

Pure JS:

function App() {
  return (
    React.createElement('form', {},
    React.createElement("h1", {}, "Login"),
    React.createElement('input', {type: 'text',placeholder:'Name',
    value:'',}),
    React.createElement('br', {}),React.createElement('br', {}), 
    React.createElement('input', {type: 'password', placeholder:'password',
    value:'',}), 
    React.createElement('br', {}), React.createElement('br', {}), 
    React.createElement('button', {type: 'submit'}, "Login"))
   )
}
export default App;

JSX: ​​​​​​​This technique is a replacement for writing pure JavaScript code and hence enhances productivity.

function App() {
  return (<form><h2>Login</h2>
    <input type="text" placeholder="Name" /><br/><br/>
    <input type="password" placeholder="password" /> <br/><br/>
    <input type="submit" nvalue="log" />                 
</form>);
}
export default App;

​​​​​​​The above code shows that more lines of JavaScript code need to be written to implement the Login component. The Code looks difficult to understand and hence productivity goes down. JSX has been introduced in React to create very easy elements to read and write, making the component's code simple and understandable. The above Login component can be written using JSX in an easier way.

## Creating JSX Elements: ##

-JSX is a special syntax introduced in ReactJS to write elements of components. It is syntactically identical to HTML and hence it can be easily read and written. Code written using JSX helps in visualizing the DOM structure easily.

import React from 'react'
function App () {
    return <h1>Hello World</h1>
}
export default App;

-As the browser does not understand JSX code, this gets converted to JavaScript using the plugins of the babel.

**JSX code**

<h1>Hello World!!! </h1>

**JSX code Converted to JS Code:**

React.createElement("h1, {}, "Hello World!!! ");

-While working with React components, multiple React elements are required to be rendered. For example, the below code needs to render multiple JSX elements:

function App() {
    return  
    <h3>ReactJS:</h3>
     <img src="./image/react.PNG" width="120" height="120"/>
    <p> React is a JavaScript library for creating User Interfaces.</p>
}
export default App;   

The above code logs an error saying "Adjacent JSX elements must be wrapped in an enclosing tag".  As per the JSX syntax, all the adjacent elements must be wrapped in an enclosing tag i.e., there should be only one outermost element. Hence, the above code can be modified as follows:

function App() {
  return (
    <div>
      <h3>ReactJS:</h3>
      <img src="./image/react.PNG" width="120" height="120" />
      <p> React is a JavaScript library for creating User Interfaces.</p>
    </div>
  );
}
export default App;

**React Fragments:**

By adhering to JSX syntax the <div> tag can be used for grouping the elements and this introduces an extra and unnecessary node into the DOM. As a solution to this, React Fragments are introduced which is a common pattern in React for a component to return multiple elements. React Fragments allows to grouping of a list of React elements without adding any extra node to the DOM.

Modifying the previous code as follows using React Fragments:

function App() {
  return (
    <React.Fragment>
      <h3>ReactJS:</h3>
      <img src="./image/react.PNG" width="120" height="120" />
      <p> React is a JavaScript library for creating User Interfaces.</p>
    </React.Fragment>
  );
}
export default App;

**Empty Tags:**

-You can use empty tags instead of React. Fragment.

function App() {
  return (
    <>
      <h3>ReactJS:</h3>
      <img src="./image/react.PNG" width="120" height="120" />
      <p> React is a JavaScript library for creating User Interfaces.</p>
    </>
  );
}
export default App;

-Fragments can be passed with key attributes if required. Empty tags don’t support any attributes


**JS Expressions in JSX:**

***Accessing a variable:***

-The values of any variable can be accessed within curly braces as shown below:

function App() {
  let count = 5;
  return (
    <>
      <h1>{count}</h1>
      <h2>{count * count}</h2>
    </>
  );
}
export default App;

-Arithmetic operators can also be used as shown above.

***Accessing an object:*** 

-The properties of an object can be accessed as shown below:

function App() {
    let name = {
      firstName: "John",
      lastName: "Doe",
    };
    return (
      <>
        <h1>
          {name.firstName} {name.lastName}
        </h1>
      </>
    );
  }
  export default App;

***Specifying attributes' expression:*** 

Dynamic values can be provided to attributes as shown below:

function App() {
  return (
    <>
      <h1>Welcome to React</h1>
    </>
  );
}
export default App;
 
***Usage of the map function to render JSX elements:**

**map() method in React:**

-The map() function in React is used to iterate over an array and return a new array with the results of the function call. The function passed to map() is called once for each element in the array, and the result of the function call is used as the element in the new array.

For example, the following code creates an array of numbers and then uses map() to double the values in the array:

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

The map() function can also be used to iterate over objects and return a new array with the values of the object's properties. For example, the following code creates an object with some properties and then uses map() to return an array with the values of the properties:

const object = {
  name: "John Doe",
  age: 30,
  address: "123 Main Street"
};

const properties = Object.keys(object).map((property) => object[property]);
console.log(properties); // ["John Doe", 30, "123 Main Street"]

The map() function is a powerful tool that can be used to iterate over data and transform it into a new form. It is a commonly used function in React components, and it can be used to create a variety of different UI elements.

***Here are some additional tips for using map() in React components:***

1. Always use a unique key for each element in the array that is being mapped. This will help React to update the UI correctly when the data changes.
2. If the function passed to map() is too complex, it may be a good idea to extract it into a separate component. This will make the code more readable and maintainable.
3. Use map() to create reusable components that can be used in multiple places in your application. This will help to keep your code DRY (not repetitive).
​​​​​​​
Map Function Demo for vscode:

Highlights:
Usage of ternary operator for conditional rendering

Usage of map function for looping

Demo Steps:
1. Create an App component within the App.js file as shown below:

function App() {
  var employees = [
    { empId: 1234, name: "John", designation: "SE" },
    { empId: 4567, name: "Tom", designation: "SSE" },
    { empId: 8910, name: "Kevin", designation: "TA" },
  ];
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.empId}>
                <td>{employee.empId}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default App;

2. Render the App component to the DOM in the index.js file

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<App/>
 );
reportWebVitals();

**Conditional Rendering:**

In any web application, certain content requires to be shown while other to be hidden based on some condition. For example, if the admin is logged in to an application, it should display a 'welcome' message otherwise display "Please Login". Similarly, the list of products is displayed based on its availability. 

To achieve these requirements, the if-else or ternary operator can be used for conditional rendering.

1. Using if-else:

function App() {
  let element = null;
  let isLoggedIn = false;
  if (isLoggedIn) {
    element = <h2>Welcome Admin</h2>;
  } else {
    element = <h2>Please Login</h2>;
  }
  return <>{element}</>;
}
export default App;

2a. Using ternary operator:

function App() {
  let isLoggedIn = false;
  return {isLoggedIn ? <h2>Welcome Admin</h2> : <h2>Please Login</h2>};
}
OR

2b. Using Short Circuiting:

function App() {
    let isLoggedIn = true;
    return (
    			<div>
    				{isLoggedIn && <h2>Welcome Admin</h2>}
    				{!isLoggedIn && <h2>Please Login</h2>}
    			</div>
    		)
}

3. Using variables:

export default App;
function App() {
  let element = null;
  let isLoggedIn = false;
  isLoggedIn
    ? (element = <h2>Welcome Admin</h2>)
    : (element = <h2>Please Login</h2>);​​​​​​​
  return <>{element}</>;
}
export default App;

Looping using map() method:

How can lists in React can be rendered using map() method.

function App() {
  var employees = [
    { empId: 1234, name: "John", designation: "SE" },
    { empId: 4567, name: "Tom", designation: "SSE" },
    { empId: 8910, name: "Kevin", designation: "TA" },
  ];
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr>
                <td>{employee.empId}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default App;

The above code provides a warning in the console as shown below:
Warning: Each child in a list should have a unique "key" prop.

To overcome the above error, a unique key must be provided to each element in an array as shown below:

<tbody>
    {employees.map(employee => {
        return (<tr key={employee.empId}>
            <td>{employee.empId}</td>
            <td>{employee.name}</td>
            <td>{employee.designation}</td>
         </tr>)
     })
     }
</tbody>

**Keys:**

Keys are used by React to identify the items that are added, removed, or modified. Keys should be provided to the elements inside the array to provide a unique identity. Keys should be unique and most commonly the IDs of the data are used as keys.

Demo Conditional Rendering for VSCode:

Demo Steps:
1. Create an App component within the App.js file as shown below:

function App() {
    var employees = [
      { empId: 1234, name: "John", designation: "SE" , exp: 2.5},
      { empId: 4567, name: "Tom", designation: "SSE" , exp: 5.5},
      { empId: 8910, name: "Kevin", designation: "TA", exp: 1.5 },
    ];
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>EmpID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => {
              return (
                <tr key={employee.empId}>
                  <td>{employee.empId}</td>
                  <td>{employee.name}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.exp>=2.5 ? <h4>Eligible</h4>:<h4>Not Eligible</h4>}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
  export default App;
2. Render the App component to the DOM in the index.js file:

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<App/>
 );
reportWebVitals();

Summary:

JSX:
1. JSX is a JavaScript syntax extension.
2. It is a replacement for writing pure JavaScript code.
3. Functional components return JSX elements. 
4. The best practice is to use React. Fragment or empty tags (<>JSX element</>).
5. JavaScript expressions that need to be evaluated must be wrapped within curly braces.

Conditional Rendering:
1. JSX elements can be rendered based on conditions using the if-else or ternary operator.
2. A list of elements can be rendered using the map method.
