import React from 'react';
import './Se-logo.css';

export function SeLogo(props) {
  return (
      <div ref={props.aRef} className="se-intro">
        <h1>the</h1>
        <h1>interstellar</h1>
        <h1>Space</h1>
      </div>
  );
}
