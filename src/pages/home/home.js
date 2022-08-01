import React, { useState, useEffect, useRef } from 'react';
import './home.css';
import { Nav_logo } from './components/logo/Logo';
import { FPa } from './components/f-pa/F-pa';
import Home_welcome from './components/welcome/Welcom';
import { Inter_home } from './components/inter-home/Inter';
import { Footer } from '../../components/footer/Footer';
import Draw_canvas from './components/f-canvas/F_canvas';

export function isElementInViewport(elem) {
  var rect = elem.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
export function isVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);
  return isIntersecting;
}

export function Home() {
  const for_viss = useRef();
  return (
    <main>
      <Nav_logo />
      <FPa />
      <Draw_canvas />
      <Home_welcome aRef={for_viss} />
      <Inter_home aref={for_viss} />
      <Footer />
    </main>
  );
}
