import React, { useState, useEffect, useRef , memo } from 'react';
import './home.css';
import { Nav_logo } from './components/logo/Logo';
import { FPa } from './components/f-pa/F-pa';
import Home_welcome from './components/welcome/Welcom';
import { Inter_home } from './components/inter-home/Inter';
import { Footer } from '../../components/footer/Footer';
import Loading_scene from '../../components/loading/Load';
import Home_canvas from './components/f-canvas/F_canvas';

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

function Home() {
  const refs = {
    for_viss: useRef(),
    int_h1_ref: useRef(),
    se_logo_ref: useRef(),
    fpa_ref: useRef(),
  };
  return(
    <Loading_scene tm={2000} >
      <main>
        <Nav_logo aRef={refs} />
        <FPa aRef={refs.fpa_ref} />
        <Home_canvas />
        <Home_welcome aRef={refs.for_viss} />
        <Inter_home aref={refs} />
        <Footer />
      </main>
  </Loading_scene>
  )
}
export default memo(Home)