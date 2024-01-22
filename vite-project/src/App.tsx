import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

// pages
import Home from './Pages/Home'
import About from './Pages/About'
import BarChart from "./Components/BarChart";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/PageModele/:modele'} element={<PageModele />} />
        <Route path={'*'} element={<>Erreur 404</>} />
        <Route path={'/barchart/'} element={<BarChart />} />
      </Routes>
    </div>
  )
}

export default App;
