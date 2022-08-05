import React, { memo, useState, useEffect } from 'react';
import './Load.css';

var int;
function Loading_screen() {
  const [dot, setDot] = useState('.');
  useEffect(() => {
    int = setInterval(() => {
      setDot((dot) => {
        dot = dot + '.';
        if (dot.length >= 4) {
          dot = '.';
        }
        return dot;
      });
    }, 1000);
    return () => {
      clearInterval(int);
    };
  }, []);
  return (
    <div id="center-S">
      <h1 class="sp">
        <span>Loading</span>
        <span
          onchange={(e) => {
            $(e.currentTarget).css('animation', 'dot_co 0.2s linear');
          }}
        >
          {dot}
        </span>
      </h1>
    </div>
  );
}

export default memo(Loading_screen);
