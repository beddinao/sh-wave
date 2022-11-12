import React from 'react';
import './Footer.css';
import Up_btn from '../up_btn/Up_btn' ;

export function Footer() {
  return (
    <div className="footer-container">
      <div>
        <div>
          <h1 className='arc_h2'>
            check
            <br />
            out
            <br />
            other
            <br />
            work
          </h1>
        </div>
        <div>
          <div onClick={window.open( 'https://g-simulation.netlify.app' , '_blank' )} >
            <h1>g. simulation</h1>
          </div>
          <div>
            <Up_btn />
          </div>
        </div>
      </div>
    </div>
  );
}
