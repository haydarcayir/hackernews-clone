import React from "react";
import { NavLink } from "react-router-dom";
import Enums from "../utils/enums";
import { Zap, Wind, Compass } from "react-feather";

const Header = () => {
  return (
    <div className="header-container">
      <h1>Hacker News Clone</h1>
      <div className="nav-link">
        <NavLink to={Enums.NEW_STORIES}>
          New
          <Zap size="20" color="black" className="ml-1 mb-1" />
        </NavLink>
        <NavLink to={Enums.BEST_STORIES}>
          Best
          <Wind size="20" color="black" className="ml-1 mb-1" />
        </NavLink>
        <NavLink to={Enums.TOP_STORIES}>
          Top
          <Compass size="20" color="black" className="ml-1 mb-1" />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
