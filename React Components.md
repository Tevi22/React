## What is a React Component ##

-In React, a component is like a building block for your app. It bundles together data and how it looks. Components can team up with each other.
-Using components makes your code reusable, testing simple, and helps keep things organized.
-Creating your own components is a big help for making web apps quickly and efficiently.
-In ReactJS, components live in a virtual space, and they show up as parts of the real webpage.

## Virtual DOM ##

In React, there's something called the Virtual DOM. It's like a pretend version of the real webpage. The different parts of your page are represented as components in this virtual space.

-When we want to change something on our webpage, we don't directly mess with the real page. Instead, we change things in this pretend space, the Virtual DOM. React then takes care of figuring out what needs to change on the actual webpage.

-This is a smart move because changing the real webpage all the time can slow things down. React's Virtual DOM makes this process more efficient. Other frameworks handle this differently, but React's approach helps keep our web apps running smoothly.

-Whenever any updates happens in the application, the virtual DOM gets modified. React computes the difference between the previous virtual tree and the current virtual tree

-Based on these differences React will figure out how to make updates to the actual DOM efficiently

-React does all the computations in its abstracted DOM and updates the DOM tree accordingly

-Virtual DOM enhances performance and efficiency by minimizing expensive updates in the actual DOM

-Hence React is said to be a great performer because it manages a Virtual DOM

***Example**

Imagine we have a React component called "Component 1".

-If anything changes in "Component 1", a new pretend tree is made in the Virtual DOM.
-React notices the changes in this pretend tree and then updates the real webpage, which we call the Actual DOM.

## How to create a React Component ##

**There are 2 types of components that can be created in React**

1. Class based components
2. Functional components

In this course, you will be learning about functional components

**Functional Component**

-Created as a simple JavaScript function
-It just returns the HTML elements

***The functional component can be created as follows:***

import React from 'react';

function App() {
    return React.createElement("h1", {}, "Hello World!!!");
}

export default App;

-App - The component name should be in Pascal Casing
-React.createElement - helps to create an element in plain JavaScript

***In the code, React.createElement("h1", {}, "Hello World!!!");***

-h1 - is the HTML element to be used
-{ } - Attributes of an element can be mentioned
-"Hello World!!!" - Content to be appended to the h1 element
-export default App - App component must be exported so that it could be used in any other files

To display elements of a component, the component must be rendered.

***For rendering a component, ReactDOM.render method is used as follows:***

Syntax:
 
const root = ReactDOM.createRoot(parameter 1);

root.render( 
    parameter 2
); 

*parameters:*

-'parameter 1' is the HTML node reference where the component to be rendered
-'parameter 2' is the name of the component to be rendered
So, your final code would be as follows:

index.js:
 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
reportWebVitals();

**Summary**

1. React allows developers to create 2 types of components
     a. Class components
     b. Functional components
2. Functional components are javascript functions which returns HTML elements using React.createElement method
3. The component can be rendered to the DOM using ReactDOM.render method



 