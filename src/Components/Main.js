import Home from './Home'
import Stocks from './Stocks'
import Quote from './Quote'
import Price from './Price'
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, { useState } from 'react';



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