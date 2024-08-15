import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Antiguos from './pages/Antiguos'; // Asegúrate de que la ruta es correcta
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/antiguos" element={<Antiguos />} />
      </Routes>
    </Router>
  );
}

export default App;
