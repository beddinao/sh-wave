import React , {useEffect , memo} from 'react';
import './F-pa.css';
import { Home_logo } from '../logo/Logo';

var container , cursor , wid , hei , m_size ;

const rando_m = (min,max) =>{
  return min + Math.random() * ( max - min )
}

function draw_stars(){
  container = document.querySelector('.f-pa') ;
  cursor = document.getElementById('cursor') ;
  wid = parseFloat(getComputedStyle(container).width) ;
  hei = parseFloat(getComputedStyle(container).height) ;

  draw_in()
}
function draw_in(){
  m_size = (wid * hei) / 4000 ;
  for (let i = 0 ; i < m_size ; i++){
    let star = document.createElement('div');
    
    let o_size = rando_m(1 , 2) ;
    star.style.position = 'relative' ;
    star.style.top = rando_m(0 , 100 - ( m_size / 6 )) + "%" ;
    star.style.left = rando_m(0 , 100) + "%" ;
    star.style.width = o_size + 'px' ;
    star.style.height = o_size + 'px' ;
    star.classList.add('a_star') ;
    
    star.animate(
      [
        {backgroundColor : `rgba(255,255,255,${rando_m(.5,.8)}`} ,
        {backgroundColor : `rgba(255,255,255,${rando_m(.0,.3)}}`}
      ],{
        duration : rando_m(2000,7000) ,
        easing : 'linear' ,
        iterations : Infinity , 
        direction : 'alternate'
      })
    
    container.appendChild(star) ;
  }
}

function FPa(props) {
  var handle_move = (e) =>{
    cursor.style.left = (e.pageX - 200) + 'px' ;
    cursor.style.top = (e.pageY - 200) + 'px' ;
  }

  useEffect(()=>{
    draw_stars()
    return () => {
      handle_move = null ;
      $('.a_star').remove() ;
    }
  },[])
  return (
    <div id="center-S" onMouseMove={handle_move} className="f-Pa">
      <Home_logo>
        <h1 ref={props.aRef}>Hello</h1>
      </Home_logo>
      <div id='cursor' ></div>
    </div>
  );
}


export default memo(FPa) ;