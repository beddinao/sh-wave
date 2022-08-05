import React , {memo } from 'react';
import Loading_scene from '../../components/loading/Load' ;
import Faits from './components/faits/Faits' ;
import Wrapper from './components/img_wrapper/Wrapper' ;
import Intro from './components/intro/Intro' ;
import Svg from './components/faits_svg/Svg' ;

function Stars(){
  return(
    <Loading_scene tm={2000}>
      <main>
        <Intro />
        <Wrapper />
        <div id="center-S">
          <h1 id='fpP'>to the bottom</h1>
        </div>
        <Faits />
        <Svg />
      </main>
    </Loading_scene>
  )
}


export default memo(Stars)