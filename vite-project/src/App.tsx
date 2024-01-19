import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

// pages
import Home from './Pages/Home'
import PageModele from './Pages/PageModele'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/PageModele/:modele'} element={<PageModele />} />
        <Route path={'*'} element={<>Erreur 404</>} />
      </Routes>
    </div>
  )
}

export default App;
