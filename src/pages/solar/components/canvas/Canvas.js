import React, { memo, useEffect } from 'react';
import './c_.css' ;
var cH, cW, ctx, $canvas , btn , earth_size , solarPlanets ;
var mColor = '#006eff';

function draw_canvas() {
  const canvas = document.getElementById('canvas');
  btn = document.getElementById('c_btn') ;
  ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth - window.innerWidth / 10;
  canvas.height = window.innerHeight - window.innerHeight / 2;
  cH = parseFloat(getComputedStyle(canvas).height);
  cW = parseFloat(getComputedStyle(canvas).width);
  earth_size = cW / 120 ;

  solarPlanets = [
    {
      o : calc_size(.30) ,
      name : 'Mercury'
    },{
      o : calc_size(.95) ,
      name : 'Venus'
    },{
      o : earth_size ,
      name : 'Earth'
    },{
      o : earth_size / 2 ,
      name : 'Mars'
    },{
      o : calc_size(11) ,
      name : 'Jupiter'
    },{
      o : calc_size(9) ,
      name : 'Saturn'
    },{
      o : calc_size(4) ,
      name : 'Uranus'
    },{
      o : calc_size(3.95) ,
      name : 'Neptune'
    }
  ];

  draw_in();
}

const calc_size = (x) => {
  return earth_size * x
}

function draw_in() {
  $(btn).css('pointer-events','none') ;
  $canvas = $('canvas');
  $.jCanvas.extend({
    name: 'disText',
    props: {
      x: 0,
      y: 0,
      txt: 'f',
    },
    fn: function (ctx, params) {
      $canvas.drawText({
        layer: true,
        name: 'txt',
        text: params.txt,
        x: params.x,
        y: params.y,
        fillStyle: 'rgb(100,100,100)',
        fontFamily: 'monospace',
        fontSize: 12,
      });
      $canvas.drawRect({
        layer: true,
        name: 'rect',
        x: params.x,
        y: params.y,
        height: 30,
        width: 90,
        strokeWidth: 1,
        strokeStyle: '#111',
        cornerRadius: 2,
      });
    },
  });
  $.jCanvas.extend({
    name: 'drawPlanet',
    props: {
      x: 0,
      radio: 0,
      txt: '',
      sX: 0,
      c: '#000',
      sW: 1,
    },
    fn: function (ctx, params) {
      var p = params;
      $canvas.drawArc({
        layer: true,
        name: p.txt,
        x: p.x,
        y: cH / 2,
        radius: p.radio,
        strokeStyle: 'rgb(30,30,30)',
        strokeWidth: p.sW,
        fillStyle: p.c,
        mouseover: function (layer) {
          $canvas.disText({
            x: p.sX,
            y: ( cH / 1.5 ) + p.radio,
            txt: p.txt,
          });
        },
        mouseout: function (layer) {
          $canvas.removeLayer('txt');
          $canvas.removeLayer('rect');
        },
      });
    },
  });
  $.jCanvas.extend({
    name: 'drawSun',
    props: {
      radio: 0,
      bg: 'rgb(20,20,20)',
      x: 10,
    },
    fn: function (ctx, params) {
      var p = params;
      $canvas.drawArc({
        layer: true,
        name: 'sun',
        x: p.x,
        y: cH / 2,
        radius: p.radio,
        fillStyle: p.bg,
        strokeWidth: 0,
        strokeStyle: $canvas.createGradient({
          x1: 0,
          y1: cH / 5,
          x2: 0,
          y2: cH - cH / 5,
          c1: '#000',
          c2: mColor,
          c3: '#000',
        }),
      });
    },
  });

  function drawSolar() {
    var keey = 0  , aak = 0 ;
    for(let i = 0 ; i < solarPlanets.length ; i++){
      keey = keey + solarPlanets[i].o
    }
    let leftS = (cW - (keey * 2)) / (solarPlanets.length + 2) ;
    let left = leftS;

    $canvas.drawSun({
      radio: cH * 2,
      x: cW / 2,
      bg: 'rgb(20,20,20)',
    });
    $canvas.animateLayer(
      'sun',
      {
        x: -(cH * 2) + leftS,
        fillStyle: '#000',
      },
      10000,
      function (layer) {
        $canvas.animateLayer(
          'sun',
          {
            strokeWidth: 2,
          },
          2000,
          () => {
            $canvas.animateLayer(
              'Earth',
              {
                strokeStyle : mColor
              },
              2500 ,
              () => {
                $(btn).css('pointer-events','all') ;
              }
            )
          }
        );
      }
    );
    solarPlanets.forEach((num) => {
      left = (left) + (leftS + num.o) + aak ;
      aak = num.o ;
      $canvas.drawPlanet({
        radio: num.o,
        x: cW / 2,
        txt: num.name,
        sX: left,
      });
      $canvas.animateLayer(
        num.name,
        {
          x: left,
        },
        10000
      );
    });
  }
  //...
  drawSolar();
  //...
  //...
}
function Solar_canvas() {
  useEffect(() => {
    draw_canvas();
    return () => {
      $canvas.removeLayers();
      ctx.clearRect(0, 0, cW, cH);
    };
  }, []);
  return (
    <div id="center-S">
      <canvas id="canvas">check something</canvas>
      <button id='c_btn' onClick={ () => {
        $canvas.removeLayers() ;
        ctx.clearRect(0, 0, cW, cH); 
        //
        draw_in()
        //
      }}>Repeat</button>
    </div>
  );
}

export default memo(Solar_canvas);
