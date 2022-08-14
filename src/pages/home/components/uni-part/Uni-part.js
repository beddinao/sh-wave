import React from 'react';
import './Uni-part.css';

function TheUniversalCard() {
  let num = true ;
  const handle_click = (e) =>{
    if(num){
      $('#uni-text').appendTo(e.currentTarget) ;
      num = false
    }else{
      $('#uni-text').insertBefore(e.currentTarget) ;
      num = true ;
    }
  }
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
          consectetur adipisicing elit, sed doi eiusmod tempor incididunt ut
          dolore magna..
        </p>
        <div id="uni-btn" onClick={handle_click} >Show More</div>
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
