import "./App.css";
import Navbar from "./components/users/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Games from "./components/games/Games";
import GameForm from "./components/games/GameForm";
import React from 'react';
import Home from "./components/users/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Games" element={<Games/>}/>
          <Route path="/Games/GameForm" element={<GameForm/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;