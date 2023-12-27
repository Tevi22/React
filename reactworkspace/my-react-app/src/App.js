import React from 'react';
import Header from "./Component/Header";
import Main from "./Component/Main";
import Footer from "./Component/Footer";
import InternalStyle from "./Component/InternalStyle";
import Property from "./Component/Property";
import CardPic from "./Component/CardPic";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Button from "../node_modules/react-bootstrap/Button";
import { useState } from "react";
import StateFunc from './Component/StateFunc';
import Increment from './Component/Increment';
import ObjectState from './Component/ObjectState';
import Effect from './Component/Effect.js';
import ArrayState from './Component/ArrayState.js';
import Reference from './Component/Reference';
import Forms from './Component/Forms'
import AxiosPost from './Component/AxiosPost.js';
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./Component/Home.js";
import AboutUs from "./Component/AboutUs.js";
import ContactUs from "./Component/ContactUs.js";
import Login from './Component/Login.js';
import RegistrationForm from './Component/RegistrationForm.js';
import Ecart from './Component/Ecart.js';
import SearchBar from './Component/SearchBar.js';

const sub = "React";

const App = () => {
  const [counter, setCounter] = useState(0)
  const place = "UAE";
  return (
    <>
      <Header></Header>
      <Main></Main>
      {sub === "React" ? <h2>You have selected React</h2> : null}
      <Button variant="danger m-2">Danger</Button>
      <button className="btn btn-primary m-2">Click Me</button>
      <Footer></Footer>
      <InternalStyle></InternalStyle>
      <Property imgSr="I am an image" dta="data" city={place} mob={3178008398} objT={{ greet: "Good Morning" }} titile="React.js"></Property>
      <CardPic></CardPic>

      <div className="second">
        <p>useState in App.js</p>
        Counter: {counter}<br />
        <button ClassName="btn btn-primary" onClick={() => setCounter(() => counter + 1)}>Increment</button>
      </div>
      <Increment></Increment>
      <StateFunc></StateFunc>
      <ObjectState></ObjectState>
      <ArrayState></ArrayState>
      <Effect></Effect>
      <br></br>
      <p>useRef</p>
      <Reference></Reference>
      <Forms></Forms>
      <Login></Login>
      <RegistrationForm></RegistrationForm>
      <Ecart></Ecart>
      <SearchBar></SearchBar>
      <AxiosPost></AxiosPost>
      <br></br>
      <br></br>
      <div className="second">
        <h1>React Routes</h1>
        <Link to='./Component/Home.js' className="m-3">Home</Link>
        <Link to='./Component/AboutUs.js' className="m-3">About Us</Link>
        <Link to='./Component/ContactUs.js' className="m-3">Contact</Link>
        <Routes>
          <Route path='./Component/Home.js' element={<Home />}></Route>
          <Route path='./Component/AboutUs.js' element={<AboutUs />}></Route>
          <Route path='./Component/ContactUs.js' element={<ContactUs />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App;
