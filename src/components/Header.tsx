import React from "react";
import NavBar from "./NavBar";
import '../styles/Header.css';
const Header = () => {
  return (
    <div className="banner">
        <NavBar/>
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            
            <h1>THE MEAL DB</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              minus ut mollitia error molestiae quia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
