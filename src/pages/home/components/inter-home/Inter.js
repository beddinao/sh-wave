import React , { useEffect , memo } from 'react';
import './Inter.css';
import { SeLogo } from '../se-logo/Se-logo';
import { TheUniversalPart } from '../uni-part/Uni-part';
import { Matter } from '../matter/Matter';
import { Gravity_part } from '../gravity/Gravity';
import { Int_h1 } from '../int-h1/Int';

const matter_txt = 'of the universe, is a hypothetical form of matter thought to account for approximately 85% of the matter in the universe ';
const energy_txt = 'of the universe, an unknown form of energy that affects the universe on the largest scales '  ;
var container , wid , s_wid , hei , svg , vg_he , vg_wid;

const rando_m = (min , max) => {
  return min + Math.random() * ( max - min )
}
const get_width = (tar , key) => {
  return parseFloat(getComputedStyle(document.querySelector(tar)).width) - key 
}
function draw_() {
  container = document.getElementById('stars_cont');
  svg = document.getElementById('_svg') ;
  vg_he = parseFloat(getComputedStyle(svg).height) - 10;
  vg_wid = get_width('#_svg' , 10) ;
  wid = get_width('#stars_cont',0) ;
  s_wid = get_width('#s_width',100);
  hei = parseFloat(getComputedStyle(container).height);

  draw_in();
}
function draw_svg(){
  let html_path_value = `M 10,0 L 10,${vg_he} L ${vg_wid},${vg_he} L ${vg_wid},0` ;
  let html_path_elem = document.createElementNS('http://www.w3.org/2000/svg','path') ;
  html_path_elem.setAttributeNS(null,'d',html_path_value) ;
  html_path_elem.classList.add('a_path') ;
  svg.appendChild(html_path_elem) ;
}
function draw_in() {
  let m_size = (wid * hei) / 11000;
  for (let i = 0; i < m_size; i++) {
    let star = document.createElement('div');
    let o_size = rando_m(1, 4);
    let o_co = `rgba(255,255,255,${rando_m(.01,.8)})` ;

    star.style.top = rando_m(0, 100 - m_size / 10) + '%';
    star.style.left = rando_m(0, 100) + '%';
    star.style.width = o_size + 'px';
    star.style.height = o_size + 'px';
    star.style.backgroundColor = o_co ;
    star.style.boxShadow = `0 0 ${o_size + 5}px `+ o_co ;
    star.classList.add('a_star');
    star.animate(
      [
        { opacity : 0.5  } ,
        { opacity : 1  }
      ],{
        duration : rando_m(1000,5000) ,
        easing : 'linear' ,
        iterations : Infinity , 
        direction : 'alternate'
      })
    container.appendChild(star)
  }
  draw_svg() ;
  let oo = 0 ;
  let interv = setInterval(()=>{
    let for_s_wid = parseFloat(getComputedStyle(document.querySelector('.und-Rect-container > div > div:nth-child(2) h1')).width);
    if(for_s_wid >= s_wid){
      window.clearInterval(interv) ;
      oo = 0 ;
    }else{
      oo++ ;
      $('.und-Rect-container > div > div:nth-child(2) h1').css('letter-spacing',oo + 'px')
    }
  },5)
}

function _undraw() {
  $('.a_star').remove();
  $('.a_path').remove();
}
function Inter_home(props) {
  useEffect(()=>{
    draw_()
    return () =>{
      _undraw()
    }
  })
  return (
    <div id="inter-home">
      <div id='center-S'>
        <div id='stars_cont'></div>
        <SeLogo aRef={props.aref.se_logo_ref} />
      </div>
      <div id="center-S" className="und-Rect-container">
        <div>
        <div>
          <svg id="_svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="b_" gradientTransform="rotate(90)">
                <stop offset="40%" stopColor="black" />
                <stop offset="60%" stopColor="#006eff" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div id='s_width' >
          <h1 id='to_s_width' >from the Universe to the Universe</h1>
          <hr />
        </div>
        </div>
      </div>
      <TheUniversalPart />
      <Matter sec_title="more" title="dark energy" num="~68% " txt={energy_txt} />
      <Matter sec_title="than" title="dark matter" num="~27% " txt={matter_txt} />
      <Matter sec_title="and the" title="matter we know" num="" txt="" />
      <div id="center-S">
        <div>
          <h1 className="stars-sh ssh arc_h1" ref={props.aref.for_viss}>
            Stars
          </h1>
        </div>
      </div>
      <Gravity_part />
      <Int_h1 aRef={props.aref.int_h1_ref} />
    </div>
  );
}

export default memo(Inter_home)