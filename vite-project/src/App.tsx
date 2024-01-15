import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

// pages
import Home from './Pages/Home'
import About from './Pages/About'



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/about/'} element={<About />} />
        <Route path={'*'} element={<>Erreur 404</>} />
      </Routes>
    </div>
  )
}

export default App;
