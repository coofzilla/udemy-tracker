import React from "react";
import "./header.css";
import Completion from "../progress/Completion";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header-heading">My learning</h1>
      <nav className="header-nav">
        <div>All Courses</div>
        <Completion />
      </nav>
    </div>
  );
};

export default Header;
