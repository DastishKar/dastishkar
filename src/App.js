import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DianaPage from './pages/girls/DianaPage';
import DanaPage from './pages/girls/DanaPage';
import NargizaPage from './pages/girls/NargizaPage';
import SabinaPage from './pages/girls/SabinaPage';
import AliyaPage from './pages/girls/AliyaPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/diana" element={<DianaPage />} />
        <Route path="/dana" element={<DanaPage />} />
        <Route path="/nargiza" element={<NargizaPage />} />
        <Route path="/sabina" element={<SabinaPage />} />
        <Route path="/aliya" element={<AliyaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
