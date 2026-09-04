import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Showcase from './pages/Showcase';
import './styles/showcase.css';

function App() {
  return (
    <BrowserRouter basename="/portal-escolar3">
      <Routes>
        <Route path="/" element={<Showcase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
