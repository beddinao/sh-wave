import React, { useEffect } from 'react';
import { Center_3 } from './components/center_3/Center_3';
import { S_nav } from './components/s_nav/S_nav';
import Milky_way_img from './components/milky_img/drag_img' ;
import Solar_canvas from './components/canvas/Canvas';
import Loading_scene from '../../components/loading/Load';
import Mfooter from '../../components/mini-footer/M_footer' ;
import ring_1 from './img/ring-1.svg' ;
import ring_2 from './img/glRing.png' ;

const solar_is = 'Our solar system consists of our star, the Sun, and everything bound to it by gravity – the planets Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune; dwarf planets such as Pluto; dozens of moons; and millions of asteroids, comets, and meteoroids .' ;
const solar_been  = 'formed 4.6 billion years ago from the gravitational collapse of a giant interstellar molecular cloud.' ;
const galaxy_is = 'The Milky Way is a barred spiral galaxy, one of hundreds of billions in the observable universe.  an isolated collection of stars and other material bound together by their common gravity .' ;
const galaxy_been = 'began as one or several small overdensities in the mass distribution in the Universe shortly after the Big Bang 13.61 billion years ago' ;

export function MilkyWay() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Loading_scene tm={2000}>
      <main>
        <S_nav name="milky way" isHid="isHid" img={ring_2} />
        <Milky_way_img />
        <Center_3 txt={solar_is} />
        <Center_3 txt={solar_been} />
        <Mfooter />
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
        <Center_3 txt={galaxy_is} />
        <Center_3 txt={galaxy_been} />
        <Mfooter />
      </main>
    </Loading_scene>
  );
}
