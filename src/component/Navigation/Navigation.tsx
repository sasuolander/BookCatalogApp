import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = (): JSX.Element => {
  return (
    <nav className={"navigation-bar"}>
      <div className={"btn home-btn"}>
        <NavLink exact to="/" activeClassName={"navigation-active"}>
          Home page
        </NavLink>
      </div>
      <div className={"btn list-btn"}>
        <NavLink to="/books" activeClassName={"navigation-active"}>
          List
        </NavLink>
      </div>
      <div className={"btn add-btn"}>
        <NavLink to="/addbook" activeClassName={"navigation-active"}>
          Add
        </NavLink>
      </div>
    </nav>
  );
};
