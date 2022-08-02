import React from 'react';
import './F-pa.css';
import { Home_logo } from '../logo/Logo';

export function FPa(props) {
  return (
    <div id="center-S" className="f-Pa">
      <Home_logo>
        <h1 ref={props.aRef}>Hello</h1>
      </Home_logo>
    </div>
  );
}
