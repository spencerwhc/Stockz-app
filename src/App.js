
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './App.css';
import Sidebar from './Components/Sidebar'
import Main from './Components/Main'
function App() {
  return (
    <Router>
    <div className="App">

      <Sidebar />
      <Main />
    </div>
    </Router>
  );
}

export default App;
