import React from 'react';
import Header from "./Component/Header";
import Main from "./Component/Main";
import Footer from "./Component/Footer";
import InternalStyle from "./Component/InternalStyle";
import Property from "./Component/Property";
import CardPic from "./Component/CardPic";
import CardData from "./Component/CardData";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Button from "../node_modules/react-bootstrap/Button";

const sub = "React";

const App = () => {
  const place = "UAE";
 return(
  <>
  <Header></Header>
  <Main></Main>
  {sub === "React"?<h2>You have selected React</h2>:null}
  <Button variant="danger m-2">Danger</Button>
  <button className="btn btn-primary m-2">Click Me</button>
  <Footer></Footer>
  <InternalStyle></InternalStyle>
  <Property imgSr="I am an image" dta="data" city={place} mob={3178008398} objT={{greet: "Good Morning"}} titile="React.js"></Property>
  <CardPic
  imgSr={CardData[0].imgSr}
  title={CardData[0].title}></CardPic>
  </>
 )
}

export default App;
