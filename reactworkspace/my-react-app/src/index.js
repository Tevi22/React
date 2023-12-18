import React from 'react';
import ReactDOM from 'react-dom';
import first from './images/IMG_5039.jpeg';
let name = "Tevin";

ReactDOM.render(
  <>
    <h1>Hello React!</h1>
    <p>Hi {name}!</p>
    <img 
    alt="of me"
    src={first}
    />
  </>
  ,document.getElementById("root")
);


