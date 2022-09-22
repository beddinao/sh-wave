import React from 'react';
import './main.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { SolarSystem } from './pages/solar/solar';
import { MilkyWay } from './pages/solar/solar';
import Home from './pages/home/home';
import Stars from './pages/stars/stars';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path='stars' element={<Stars />} />
        <Route path='solar-system' element={<SolarSystem />} />
        <Route path='milky-way' element={<MilkyWay />} />
      </Routes>
    </BrowserRouter>
  );
}
