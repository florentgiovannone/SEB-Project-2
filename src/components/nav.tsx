import React from "react";
import { Link } from "react-router-dom"
import CharacterCard from "./characterCard"

interface CharacterCard { 
    "id": Number
    "firstName": string
    "lastName": string
    "fullName": string,
    "imageUrl": string
    "title": string
    "family": string 
} 

type Characters = null | Array<CharacterCard>
function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar is-dark">
          <div className="container">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/characters">
                Characters
              </Link>
              <Link className="navbar-item" to="/pickteam">
                Pick Team
              </Link>
              <Link className="navbar-item" to="/sign-in">
                Sign-in
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
