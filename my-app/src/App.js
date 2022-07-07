import "./App.css";
// import { Helloworld, Byeworld } from "./components/Helloworld";
// import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import About from "./routes/About";


function App() {
 

  return (
    <div className="App">
      <nav>
        <Link to="/" className="text">
          Home
        </Link>
        <Link to="/Contact" className="text">
          Contact
        </Link>
        <Link to="/About" className="text">
          About
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={ <About/>} />
      </Routes>
    </div>
  );
}

export default App;
