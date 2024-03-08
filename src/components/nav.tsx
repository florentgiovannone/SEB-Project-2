import React from "react";
import { Link } from "react-router-dom";
import CharacterCard from "./characterCard";

interface CharacterCard {
  id: Number;
  firstName: string;
  lastName: string;
  fullName: string;
  imageUrl: string;
  title: string;
  family: string;
}

type Characters = null | Array<CharacterCard>;

function Navbar() {
  return (
    <header>
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/characters">
                Characters
              </Link>
              <Link className="navbar-item" to="/pickteam">
                To Battle
              </Link>
            </div>
            <div className="navbar-end">
              <Link className="navbar-item" to="/sign-in">
                Sign-in
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
