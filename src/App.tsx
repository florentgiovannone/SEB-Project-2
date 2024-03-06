import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import SignIn from "./components/sign-in";
import CharacterCard from "./components/characterCard";
import Characters from "./components/characters";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route
            path="/characters/:charactersName"
            element={<CharacterCard />}
          />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
