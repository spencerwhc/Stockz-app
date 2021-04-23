import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function Home() {
    return (
      <div>
        <h1>Stock</h1>
        <p>Welcome to this stock app </p>
      </div>
    )
}
function Stocks() {
    return (
      <div>
        <h2>Stocks List</h2>
      </div>
    )
}
function Quote() {
    return (
      <div>
        <h2>Quote</h2>
      </div>
    )
}
function Price() {
    return (
      <div>
        <h2>Price Histroy</h2>
      </div>
    )
  }
  

export default function Main(){
    return(
     
        <div class="main">
        
        <Switch>
            <Route path="/stocks">
              <Stocks />
            </Route>
            <Route path="/quote">
              <Quote />
            </Route>
            <Route path="/price">
              <Price />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
        </Switch>
        </div>

    );
}