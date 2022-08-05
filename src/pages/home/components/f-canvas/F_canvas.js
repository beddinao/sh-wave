import React, { useEffect, memo } from 'react';
import './F_canvas.css';
var svg, cW, cH;

function draw_pol() {
  svg = document.getElementById('svg');
  cW = parseFloat(getComputedStyle(svg).width);
  cH = parseFloat(getComputedStyle(svg).height);

  draw_in(cW, cH, 25, '1');
  draw_in(cW / 1.5, cH / 3, -10, '2');
  draw_in(cW / 40, cH / 3, -10, '3');
}

function draw_in(wid, hei, ky, con) {
  let ocy = cH - ky;
  var p_elem = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'polygon'
  );
  let cordinat = `${cW / 2 - wid / 2},${ocy}  ${cW / 2},${cH - hei}  ${
    cW / 2 + wid / 2
  },${ocy} `;
  p_elem.setAttributeNS(null, 'points', cordinat);
  p_elem.classList.add('polygon_' + con);
  svg.appendChild(p_elem);
}

function Home_canvas() {
  useEffect(() => {
    draw_pol();
    return () => {
      $('polygon').remove();
    };
  }, []);
  return (
    <div id="center-S">
      <div className="svg_con">
        <svg id="svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="b_gr_2" gradientTransform="rotate(90)">
              <stop offset="5%" stopColor="rgb(1,1,1)" />
              <stop offset="95%" stopColor="#006eff" />
            </linearGradient>
            <linearGradient id="b_gr" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#006eff" />
              <stop offset="90%" stopColor="black" />
            </linearGradient>
            <radialGradient id="rad_gra" fr="40%" cy="130%">
              <stop offset="10%" stopColor="white" />
              <stop offset="40%" stopColor="#006eff" />
              <stop offset="90%" stopColor="black" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default memo(Home_canvas);
