import React, { memo, useEffect , useState } from 'react';
import './drag_img.css';
import cursor_icon_1 from './scroll_icon.png' ;
import cursor_icon_2 from './grab_icon.png' ;

let zoom = 1 ;
let speed = 0.07 ;
var elmnt , img ;
var pos_1 = 0 ,
  pos_2 = 0 ,
  pos_3 = 0 ,
  pos_4 = 0 
;



function Notice(props){
  const [ is_vis , set_is_vis ] = useState(true) ;
  return (is_vis) ? (
    <div className='notice'>
      <div>
          <h1>{props.children}</h1>
          <div style={{ backgroundImage : props.img }} ></div>
      </div>
      <div>
          <button onClick={()=>{set_is_vis(false)}} >OK</button>
      </div>
    </div>
  ) : <div></div>
}
function Gal_notice(props){
  return(
    <div className='cont_con' >
      <div className='notice_container' >
        <Notice img={cursor_icon_1} >
          hover and scroll to zoom
        </Notice>
        <Notice img={cursor_icon_2} >
          grab and drag to navigate
        </Notice>
      </div>
      <button onClick={props.cli} id='cont_s'>orientations</button>
    </div>
  )
}

function Milky_way_img(props) {
  let coun = 0;
  const i_s = [{ i_mg: props.i_b , c : 'var(--main-color)' }, { i_mg: props.i_a, c : 'var(--border)' }];
  function handle_wheel(e) {
    if (e.deltaY > 0) {
      if (zoom <= 1) {
        $(e.currentTarget).css('cursor', 'default');
        set_size('auto', 'auto');
        zoom = 1
      } else {
        zoom -= speed
      }
    } else {
      $(e.currentTarget).css('cursor', 'grab');
      zoom >= 4 ? (zoom = 4) : (zoom += speed);
    }
    $(e.currentTarget).css('transform', `scale(${zoom})`);
  }
  const handle_hover = () => {
    $('body').css('overflow', 'hidden');
  };
  const handle_out = () => {
    $('body').css('overflow', 'visible');
  };
  function handle_down(e) {
    e = e || window.event;
    e.preventDefault();
    pos_3 = e.clientX;
    pos_4 = e.clientY;
    document.onmouseup = handle_close;
    document.onmousemove = handle_move
  }
  function handle_click() {
    coun++;
    if (coun >= i_s.length) {
      coun = 0
    }
    img.setAttribute('src',i_s[coun].i_mg) ;
    $('#cont_s').css('color',i_s[coun].c)
  }
  function handle_move(e) {
    e = e || window.event;
    e.preventDefault();
    if (zoom > 1.5) {
      pos_1 = pos_3 - e.clientX;
      pos_2 = pos_4 - e.clientY;
      pos_3 = e.clientX;
      pos_4 = e.clientY;
      set_size(elmnt.offsetTop - pos_2 + 'px', elmnt.offsetLeft - pos_1 + 'px')
    }
  }
  function handle_close() {
    document.onmouseup = null;
    document.onmousemove = null
  }
  function set_size(t, l) {
    elmnt.style.top = t;
    elmnt.style.left = l
  }
  useEffect(() => {
    elmnt = document.getElementById('target_');
    img = document.querySelector('#target_ img');
    return () => {
      set_size('auto', 'auto');
      handle_close()
    };
  }, []);
  return (
    <div id="center-S" className='gal_con' >
      <div
        id="target_"
        onWheel={handle_wheel}
        onMouseEnter={handle_hover}
        onMouseLeave={handle_out}
        onMouseDown={handle_down}
      >
        <img src={props.i_b} ></img>
      </div>
      <Gal_notice cli={handle_click}/>
    </div>
  );
}

export default memo(Milky_way_img);
