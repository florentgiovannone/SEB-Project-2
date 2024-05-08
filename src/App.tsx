import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/nav";
import Footer from "./components/footer";
import SignIn from "./components/sign-in";
import Characters from "./components/characters";
import CharacterModal from "./components/CharacterModal";
import PickTeam from "./components/pickTeam";
import image from "./assets/images/Got.webp"
function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home
          image={image as any} />} />
          <Route path="/characters" element={<Characters />} />
          <Route
            path="/characters/:charactersName"
            element={<CharacterModal />}
          />
          <Route path="/pickteam" element={<PickTeam />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
