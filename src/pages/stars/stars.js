import React, { memo , useEffect } from 'react';
import Loading_scene from '../../components/loading/Load';
import Faits from './components/faits/Faits';
import Intro from './components/intro/Intro';
import Svg from './components/faits_svg/Svg';
import { Menu } from '../../components/menu_btn/Menu_btn';
import Mfooter from '../../components/mini-footer/M_footer' ;
import img_g from './components/images/stars.jpg' ;
const img_wr_b = {
  position : 'sticky' ,
  top : '0%' ,
  height : '60vh' ,
  width : '35vw' ,
  borderBottom : '1px solid var(--main-color)',
  backgroundImage : img_g ,
  backgroundSize : 'cover' ,
  backgroundPosition : 'center'
};
const img_wr_a = {
  position: 'absolute' ,
  top : '100vh' ,
  left : '10vw' ,
  height : '160vh' ,
  width : '35vw' ,
  justifyContent: 'flex-start' ,
};
const con_f_n_s = {
  position: 'fixed',
  top: '0%',
  height: '10vh',
  alignItems: 'flex-end',
  padding: '0% 5%',
};

function Wrapper(){
  return(
    <div style={ img_wr_a } >
      <div style={ img_wr_b } ></div>
    </div>
  )
}
function F_p_P (){
  return (
    <div id='center-S' >
      <h1 id='fpP' className='arc_h1' >Stars Faits</h1>
    </div>
    )
}

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
        <F_p_P />
        <Faits />
        <Svg />
        <Mfooter />
      </main>
    </Loading_scene>
  );
}

export default memo(Stars);
