import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" activeclassname="active">
        Home
      </NavLink>
      <NavLink to="/classcomponent" activeclassname="active">
        Class Component
      </NavLink>
      <NavLink to="/functionalcomponent" activeclassname="active">
        Functional Component
      </NavLink>
      <NavLink to="/lists&keys" activeclassname="active">
        Lists and Keys
      </NavLink>
      <NavLink to="/refs" activeclassname="active">
        Refs
      </NavLink>
      <NavLink to="/events" activeclassname="active">
        Events
      </NavLink>
      <NavLink to="/hoc" activeclassname="active">
        Higher Order Component
      </NavLink>
      <NavLink to="/forms" activeclassname="active">
        Forms
      </NavLink>
      <NavLink to="/rest" activeclassname="active">
        Rest
      </NavLink>
    </nav>
  );
}
