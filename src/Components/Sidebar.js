import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = { fontWeight: "bold", color: "#00adb5" };

function Sidebar() {
  return (
    <div className="container-fluid, sidenav">
      <nav>
        <NavLink exact to="/" activeStyle={activeStyle}>
          Home
        </NavLink>
        <NavLink to="/stocks" activeStyle={activeStyle}>
          Stocks
        </NavLink>
        <NavLink to="/quote" activeStyle={activeStyle}>
          Quote
        </NavLink>
        <NavLink to="/price" activeStyle={activeStyle}>
          Price Histroy
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
