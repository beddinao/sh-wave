import React, { useEffect, memo, useRef } from 'react';
import './F-pa.css';
import { Home_logo } from '../logo/Logo';
import { isVisible } from '../../home';

var container, cursor, wid, hei, m_size;

const rando_m = (min, max) => {
  return min + Math.random() * (max - min);
};
function handle_move(e) {
  cursor.style.left = e.pageX - 200 + 'px';
  cursor.style.top = e.pageY - 200 + 'px';
}
function draw_stars() {
  container = document.getElementById('cont');
  cursor = document.getElementById('cursor');
  wid = parseFloat(getComputedStyle(container).width);
  hei = parseFloat(getComputedStyle(container).height);

  draw_in();
}
function draw_in() {
  m_size = (wid * hei) / 7000;
  for (let i = 0; i < m_size; i++) {
    let star = document.createElement('div');

    let o_size = rando_m(1, 4);
    star.style.top = rando_m(0, 100 - m_size / 6) + '%';
    star.style.left = rando_m(0, 100) + '%';
    star.style.width = o_size + 'px';
    star.style.height = o_size + 'px';
    star.classList.add('a_star');

    star.animate(
      [
        { backgroundColor: `rgba(255,255,255,${rando_m(0.6, 0.8)})` },
        { backgroundColor: `rgba(255,255,255,${rando_m(0.0, 0.2)})` },
      ],
      {
        duration: rando_m(2000, 8000),
        easing: 'linear',
        iterations: Infinity,
        direction: 'alternate',
      }
    );

    container.appendChild(star);
  }
  document.body.addEventListener('mousemove', handle_move);
}
function undraw_stars() {
  $('.a_star').remove();
  document.body.removeEventListener('mousemove', handle_move);
}
function FPa(props) {
  useEffect(() => {
    //
    return () => {
      undraw_stars();
    };
  }, []);
  return (
    <div id="center-S" className="f-Pa">
      <Home_logo>
        <h1 ref={props.aRef}>Hello</h1>
      </Home_logo>
      {isVisible(props.aRef) ? draw_stars() : undraw_stars()}
      <div id="cursor"></div>
      <div id="cont"></div>
    </div>
  );
}

export default memo(FPa);
