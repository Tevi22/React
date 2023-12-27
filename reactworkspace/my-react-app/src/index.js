import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Card from './Component/Card';

ReactDOM.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Card></Card>
  </div>
  , document.getElementById("root")
);


