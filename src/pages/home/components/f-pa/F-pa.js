import React, {memo} from 'react';
import './F-pa.css';
import { Home_logo } from '../logo/Logo';

function FPa(props) {
  return (
    <div id="center-S" className="f-Pa">
      <Home_logo>
        <h1 ref={props.aRef} className='all_h1' >sh-wave</h1>
      </Home_logo>
    </div>
  );
}

export default memo(FPa);

