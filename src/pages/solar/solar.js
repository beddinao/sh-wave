import React, { useEffect } from 'react';
import './solar.css';
import { Center_3 } from './components/center_3/Center_3';
import { Center_35 } from './components/center_35/Center_35';
import { S_nav } from './components/s_nav/S_nav';
import Milky_way_img from './components/milky_img/drag_img' ;
import Solar_canvas from './components/canvas/Canvas';
import Loading_scene from '../../components/loading/Load';
import ring_1 from './img/ring-1.svg' ;
import ring_2 from './img/glRing.png' ;
import milkyWay_img_a from './img/milky_way_a.jpg' ;
import milkyWay_img_b from './img/milky_way_b.jpg' ;

var txxxt =
  'consectetur adipisicing elit, sed doi eiusmod tempor incididunt ut labore et dolore magna fef fe  Ut enim ad minim veniam.';

export function MilkyWay() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Loading_scene tm={500}>
      <main>
        <S_nav name="milky way" isHid="isHid" img={ring_2} />
        <Milky_way_img img={milkyWay_img_a} />
        <Center_3 txt={txxxt} />
        <Center_35 txt={txxxt} />
      </main>
    </Loading_scene>
  );
}

export function SolarSystem() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Loading_scene tm={2000}>
      <main>
        <S_nav name="solar system" isHid="notHid" img={ring_1} />
        <Solar_canvas />
        <Center_3 txt={txxxt} />
        <Center_35 txt={txxxt} />
      </main>
    </Loading_scene>
  );
}
