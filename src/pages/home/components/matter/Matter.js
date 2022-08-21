import React from 'react';
import './Matter.css';

export function Matter(props) {
  return (
    <div id="center-S">
      <div className="matter-txt-container">
        <h1>{props.sec_title}</h1>
        <h1 className='arc_h1'>{props.title}</h1>
        <p>
          <span className="matter-per">{props.num}</span>
          {props.txt}
        </p>
      </div>
    </div>
  );
}
