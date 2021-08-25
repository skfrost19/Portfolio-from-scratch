import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    //create a class "header-wrapper"
    <div className="header-wrapper">
      <div className="main-info">
        <Typed
          className="typed-text"
          strings={[
            "Coding",
            "Python",
            "Data-Structures",
            "Algorithms",
            "C/C++",
            "Django",
            "React-js",
          ]} // add your qualities
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#about" className="btn-main-offer">
          contact-me
        </a>
      </div>
    </div>
  );
};

export default Header;
