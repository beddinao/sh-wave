import React, { memo, useEffect } from 'react';

var cH, cW, ctx, $canvas;
var mColor = '#006eff';
const solarPlanets = [
  { o: 10, name: 'Planet A' },
  { o: 20, name: 'Planet B' },
  { o: 15, name: 'Planet C' },
  { o: 30, name: 'Earth A' },
  { o: 40, name: 'Planet E' },
  { o: 35, name: 'Planet F' },
  { o: 25, name: 'Planet G' },
  { o: 35, name: 'Planet H' },
];

function draw_canvas() {
  const canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth - window.innerWidth / 10;
  canvas.height = window.innerHeight - window.innerHeight / 2;
  cH = parseFloat(getComputedStyle(canvas).height);
  cW = parseFloat(getComputedStyle(canvas).width);

  draw_in();
}

function draw_in() {
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
        fillStyle: 'rgb(80,80,80)',
        fontFamily: 'monospace',
        fontSize: 15,
      });
      $canvas.drawRect({
        layer: true,
        name: 'rect',
        x: params.x,
        y: params.y,
        height: 30,
        width: 100,
        strokeWidth: 1,
        strokeStyle: 'rgb(10,10,10)',
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
        strokeStyle: 'rgb(13,13,13)',
        strokeWidth: p.sW,
        fillStyle: p.c,
        mouseover: function (layer) {
          $canvas.disText({
            x: p.sX,
            y: cH / 1.5 + p.radio,
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
    let leftS = cW / (solarPlanets.length + 2);
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
          1000,
          function (layer) {
            $canvas.removeLayer(solarPlanets[3].name);

            $canvas.drawPlanet({
              radio: solarPlanets[3].o,
              x: cW / 2,
              sX: cW / 2,
              txt: solarPlanets[3].name,
              sW: 0,
              c: $canvas.createGradient({
                x1: cW / 2 - 100,
                y1: 0,
                x2: cW / 2,
                y2: 0,
                c1: mColor,
                c2: '#000',
              }),
            });
          }
        );
      }
    );

    solarPlanets.forEach((num) => {
      left = left + leftS;
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
  //...
}

function Solar_canvas() {
  useEffect(() => {
    draw_canvas();
    return () => {
      $canvas.removeLayers();
      ctx.clearRect(0, 0, cW, cH);
      console.log('planets have been removed');
    };
  }, []);
  return (
    <div id="center-S">
      <canvas id="canvas">check something</canvas>
    </div>
  );
}

export default memo(Solar_canvas);
