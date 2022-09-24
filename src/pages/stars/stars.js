import React, { memo , useEffect } from 'react';
import Loading_scene from '../../components/loading/Load';
import Faits from './components/faits/Faits';
import Wrapper from './components/img_wrapper/Wrapper';
import Intro from './components/intro/Intro';
import Svg from './components/faits_svg/Svg';
import { Menu } from '../../components/menu_btn/Menu_btn';
import Mfooter from '../../components/mini-footer/M_footer' ;

const con_f_n_s = {
  position: 'fixed',
  top: '0%',
  height: '10vh',
  alignItems: 'flex-end',
  padding: '0% 5%',
};

function Stars() {
  useEffect(()=> {
    document.title = '  / Stars' ;
  })
  return (
    <Loading_scene tm={3000}>
      <main>
        <div style={con_f_n_s}>
          <Menu class="menuu-btn" />
        </div>
        <Intro />
        <Wrapper />
        <div id="center-S">
          <h1 id="fpP" className='arc_h1' >Stars Faits</h1>
        </div>
        <Faits />
        <Svg />
        <Mfooter />
      </main>
    </Loading_scene>
  );
}

export default memo(Stars);
