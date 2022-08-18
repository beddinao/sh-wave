import React , { useEffect , memo } from 'react';
import './Inter.css';
import { SeLogo } from '../se-logo/Se-logo';
import { TheUniversalPart } from '../uni-part/Uni-part';
import { Matter } from '../matter/Matter';
import { Gravity_part } from '../gravity/Gravity';
import { Int_h1 } from '../int-h1/Int';

var txxxt =
  'consectetur adipisicing elit, sed doi eiusmod tempor incididunt ut labore et dolore magna fef fe  Ut enim ad minim veniam.';
var container , wid , s_wid , hei , m_size , interv ;

const rando_m = (min , max) => {
  return min + Math.random() * ( max - min )
}

function draw_stars() {
  container = document.getElementById('stars_cont');
  wid = parseFloat(getComputedStyle(container).width);
  s_wid = parseFloat(getComputedStyle(document.getElementById('s_width')).width) - 25 ;
  hei = parseFloat(getComputedStyle(container).height);

  draw_in();
}
function draw_in() {
  m_size = (wid * hei) / 11000;
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
  let oo = 0 ;
  interv = setInterval(()=>{
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

function undraw_stars() {
  $('.a_star').remove();
}
function Inter_home(props) {
  useEffect(()=>{
    draw_stars()
    return () =>{
      undraw_stars()
    }
  })
  return (
    <div id="inter-home">
      <div id='center-S'>
        <SeLogo aRef={props.aref.se_logo_ref} />
      </div>
      <div id="center-S" className="und-Rect-container">
        <div>
        <div>
          <div id='stars_cont'></div>
        </div>
        <div id='s_width' >
          <h1 id='to_s_width' >from the Universe to the Universe</h1>
          <hr />
        </div>
        </div>
      </div>
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

export default memo(Inter_home)