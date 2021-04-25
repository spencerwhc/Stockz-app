import Home from "./Home";
import Stocks from "./Stocks";
import Quote from "./Quote";
import Price from "./Price";
import { Switch, Route } from "react-router-dom";
import React from "react";

export default function Main() {
  return (
    <div className="main">
      <Switch>
        <Route path="/stocks">
          <Stocks />
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
        <Route path="/price/:symbol?">
          <Price />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
