import React, { useEffect } from 'react';
import './S_nav.css';
import { Menu_btn } from '../../../../components/menu_btn/Menu_btn';


//useEffect(() => {
//  window.addEventListener('scroll', function () {
//    let p_y_o = this.pageYOffset;
//    if (p_y_o > 200) {
//      $('#s_nav').addClass('mini_nav').removeClass('big_nav');
//    } else {
//      $('#s_nav').removeClass('mini_nav').addClass('big_nav');
//    }
//  });
//});

export function S_nav(props) {
  
  return (
    <div id="center-S" className="center-D">
      <nav id="s_nav" className='big_nav'>
        <div id="s_logo">
          <img id="cir" src={props.img} className={props.isHid} />
          <h1>{props.name}</h1>
        </div>
        <Menu_btn class="menuu" />
      </nav>
    </div>
  );
}
