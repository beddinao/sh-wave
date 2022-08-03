import React, { useState } from 'react';
import './S_nav.css';
import { Menu_btn } from '../../../../components/menu_btn/Menu_btn';

export function S_nav(props) {
  const [is_hidden, setIs_hidden] = useState(false);
  window.onscroll = function () {
    let p_y_o = this.pageYOffset;
    p_y_o > 200 ? setIs_hidden(true) : setIs_hidden(false);
  };
  return (
    <div id="center-S" className="center-D">
      <nav
        id="s_nav"
        className={is_hidden ? 'mini_nav' : 'big_nav'}
        style={{ height: is_hidden ? '10%' : '60%' }}
      >
        <div id="s_logo">
          <img id="cir" src={props.img} className={props.isHid} />
          <h1>{props.name}</h1>
        </div>
        <Menu_btn class="menuu" />
      </nav>
    </div>
  );
}
