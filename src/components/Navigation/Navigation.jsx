import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">
        <h1>Cine App React</h1>
      </NavLink>
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mypicks"
            end
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            My Picks
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
