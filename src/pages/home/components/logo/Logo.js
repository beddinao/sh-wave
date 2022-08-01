import React, { useState, useEffect } from 'react';
import './Logo.css';
import { Menu_btn } from '../../../../components/menu_btn/Menu_btn';
import { isElementInViewport } from '../../home';

export function Home_logo(props) {
  return (
    <div className="intro">
      <h1>{props.logo_title}</h1>
      <h1>Space</h1>
    </div>
  );
}
var elem;
function getE(el) {
  return (elem = document.querySelector(el));
}
export function Nav_logo() {
  const [navDi, setNavDi] = useState('-10%');
  useEffect(() => {
    const els = {
      elem_1: getE('.se-intro'),
      elem_2: getE('.int-h1'),
    };
    window.addEventListener('scroll', function () {
      let pOff = this.pageYOffset;
      if (
        isElementInViewport(els.elem_1) ||
        isElementInViewport(els.elem_2) ||
        pOff < 500
      ) {
        setNavDi('-10%');
      } else {
        setNavDi('0%');
      }
    });
  }, []);
  return (
    <nav id="nav" style={{ top: navDi }}>
      <div className="logo">
        <Home_logo logo_title="well" />
      </div>
      <Menu_btn />
    </nav>
  );
}
