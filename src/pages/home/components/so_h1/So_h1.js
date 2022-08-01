import React, { memo } from 'react';

function Solar_h1(props) {
  return (
    <span
      id="for-Hv"
      onMouseEnter={props.enter}
      onMouseMove={props.move}
      onMouseLeave={props.leave}
      onClick={props.click}
      className={`${props.class}-sh ssh`}
    >
      {props.children}
    </span>
  );
}
export default memo(Solar_h1);
