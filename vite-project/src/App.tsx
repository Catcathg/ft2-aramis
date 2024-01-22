import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

// pages
import Home from './Pages/Home'
import ContentPageModele from "./Components/ContentPageModele";
import BarChart from "./Components/BarChart";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/PageModele/:modele'} element={<ContentPageModele />} />
        <Route path={'*'} element={<>Erreur 404</>} />
        <Route path={'/barchart/'} element={<BarChart />} />
      </Routes>
    </div>
  )
}

export default App;
