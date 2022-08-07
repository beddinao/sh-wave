import React from 'react';
import './Inter.css';
import { SeLogo } from '../se-logo/Se-logo';
import { TheUniversalPart } from '../uni-part/Uni-part';
import { Matter } from '../matter/Matter';
import { Gravity_part } from '../gravity/Gravity';
import { Int_h1 } from '../int-h1/Int';

var txxxt =
  'consectetur adipisicing elit, sed doi eiusmod tempor incididunt ut labore et dolore magna fef fe  Ut enim ad minim veniam.';

export function Inter_home(props) {
  return (
    <div id="inter-home">
      <SeLogo aRef={props.aref.se_logo_ref} />
      <div id="center-S" className="und-Rect-container">
        <div></div>
        <div>
          <h1>from the Universe to the Universe</h1>
          <hr />
        </div>
      </div>
      <img id="se-log-img" src="./img/4_1.jpg"></img>
      <TheUniversalPart />
      <Matter sec_title="more" title="dark energy" num="68" txt={txxxt} />
      <Matter sec_title="than" title="dark matter" num="27" txt={txxxt} />
      <Matter sec_title="and the" title="matter we know" num="" txt="" />
      <div id="center-S">
        <div>
          <h1 className="stars-sh ssh" ref={props.aref.for_viss}>
            Stars
          </h1>
        </div>
      </div>
      <Gravity_part />
      <Int_h1 aRef={props.aref.int_h1_ref} />
    </div>
  );
}
