import React from 'react';
import './Logo.css';
import { Menu } from '../../../../components/menu_btn/Menu_btn';
import { isVisible } from '../../home';

export function Home_logo(props) {
  return (
    <div className="intro">
      {props.children}
      <h1>Space</h1>
    </div>
  );
}

export function Nav_logo(props) {
  function Is_vi_nav(el, elem, eleme) {
    if (el || elem || eleme) {
      return { top: '-10%' };
    } else {
      return { top: '0%' };
    }
  }
  return (
    <nav
      id="nav"
      style={Is_vi_nav(
        isVisible(props.aRef.int_h1_ref),
        isVisible(props.aRef.se_logo_ref),
        isVisible(props.aRef.fpa_ref)
      )}
    >
      <div className="logo">
        <Home_logo>
          <h1 className='all_h1' >sh-wave</h1>
        </Home_logo>
      </div>
      <Menu class="menu-btn" />
    </nav>
  );
}
