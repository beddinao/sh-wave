import React, { useState, useEffect } from 'react';
import './Logo.css';
import { Menu_btn } from '../../../../components/menu_btn/Menu_btn';
import { isElementInViewport } from '../../home';
import { isVisible } from '../../home';

export function Home_logo(props) {
  return (
    <div className="intro">
      {props.children}
      <h1>Space</h1>
    </div>
  );
}
var elem;
function getE(el) {
  return (elem = document.querySelector(el));
}
export function Nav_logo(props) {
  function Is_vi_nav(el,elem,eleme){
    if( el || elem || eleme){
      return { top : '-10%' }
    }else{
      return { top : '0%' }
    }
  }
  return (
    <nav id="nav" style={ Is_vi_nav(isVisible(props.aRef.int_h1_ref),isVisible(props.aRef.se_logo_ref),isVisible(props.aRef.fpa_ref)) }>
      <div className="logo">
        <Home_logo>
          <h1>well</h1>
        </Home_logo>
      </div>
      <Menu_btn />
    </nav>
  );
}
