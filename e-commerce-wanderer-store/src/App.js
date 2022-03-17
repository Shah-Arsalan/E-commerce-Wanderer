import "./App.css";
import logo from "./logo.png";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./WebPages/LandingPage/LandingPage";
import { Nav } from "./Components/Nav/Nav.jsx";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  );
}

export default App;
