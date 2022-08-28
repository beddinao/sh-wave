import React  from 'react';
import './Uni-part.css';


function TheUniversalCard() {
  return (
    <div className="theUniversalCard">
      <div>
        <h1 className='arc_h1' >
          and an
          <br /> observable <br />
          universe
        </h1>
      </div>
      <div>
        <p id="uni-text">
        a spherical region of the<span style={{ fontWeight : 'bold' }} > entire universe</span> that can be observed from Earth. What this means is that you can’t see past the edge of the observable universe although we know it is much larger. It has nothing to do with our current technology and rather refers to the physical limit created by<span className='for-st' > the speed of light</span> itself
        </p>
      </div>
    </div>
  );
}
export function TheUniversalPart() {
  return (
    <div className="universe-part">
      <div id="center-S">
        <h1 className='arc_h1 for_cl'>a universe</h1>
        <p>
        all of space and time and their contents, including planets, stars, galaxies, and all other forms of matter and energy
        </p>
      </div>
      <div id="center-S"></div>
      <TheUniversalCard />
      <div id="center-S"></div>
    </div>
  );
}
