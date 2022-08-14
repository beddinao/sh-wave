import React , {useState} from 'react';
import './Uni-part.css';


function TheUniversalCard() {
  return (
    <div className="theUniversalCard">
      <div>
        <h1>
          and an
          <br /> observable <br />
          universe
        </h1>
      </div>
      <div>
        <p id="uni-text">
        consectetur adipisicing elit, sed doi eiusmod tempor incididunt dolore magna const txt_1  = consectetur adipisicing elit, sed doi eiusmod tempor incididunt dolore magna..  incididunt dolore magna const txt_1  = consectetur 
        </p>
      </div>
    </div>
  );
}
export function TheUniversalPart() {
  return (
    <div className="universe-part">
      <div id="center-S">
        <h1>a universe</h1>
        <p>
          consectetur adipisicing elit, sed doi eiusmod tempor incididunt ut
          labore et dolore magna fef fe Ut enim ad minim veniam.
        </p>
      </div>
      <div id="center-S"></div>
      <TheUniversalCard />
      <div id="center-S"></div>
    </div>
  );
}
