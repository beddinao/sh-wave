import React , { useEffect } from 'react';
import './main.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { SolarSystem } from './pages/solar/solar';
import { MilkyWay } from './pages/solar/solar';
import Home from './pages/home/home';
import Stars from './pages/stars/stars';
import createScrollSnap from 'scroll-snap' ;


export default function App() {
  useEffect(()=>{
    var html_el = document.body.parentNode ;


    console.log(getComputedStyle(html_el).height)

    const { bind , unbind } = createScrollSnap( html_el , {
      snapDestinationX: '0%',
      snapDestinationY: '100vh',
      timeout: 100,
      duration: 300,
      threshold: 0.2,
      snapStop: false,
    } , () => console.log('snap done') )


    bind() ;

    return () => {
      unbind()
    }
  } , [])
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
