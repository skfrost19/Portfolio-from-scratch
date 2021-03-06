import React from "react";
import logo from "../logo2.png";

//react fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import hamburger-menu
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo}></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <font color="white">Home</font>
                <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <font color="white">About-Me</font>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <font color="white">Education</font>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <font color="white">Projects</font>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <font color="white">Achievements</font>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <font color="white">Contact-Me</font>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
