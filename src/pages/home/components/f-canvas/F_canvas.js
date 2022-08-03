import React, { useEffect, useState, memo } from 'react';

var cH, cW, t_Height, ctx, $canvas;
var mColor = '#006eff';
function draw_canvas() {
  const canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  t_Height = window.innerHeight / 2.1;
  canvas.height = t_Height;
  canvas.width = t_Height + 100;
  cH = parseFloat(getComputedStyle(canvas).height) - 15;
  cW = parseFloat(getComputedStyle(canvas).width);

  draw_in();
}

function draw_in() {
  $canvas = $('canvas');
  $.jCanvas.extend({
    name: 'drawThePolygon',
    props: {
      height: cH,
      width: cW,
      sColor: '#fff',
      isClosed: true,
      c: 'transparent',
      lWidth: 4,
      pNum: 0,
    },
    fn: function (ctx, params) {
      ctx.beginPath();
      ctx.moveTo(cW / 2 - params.width / 2, cH + params.pNum);
      ctx.lineTo(cW / 2, cH - params.height + params.pNum);
      ctx.lineTo(cW / 2 + params.width / 2, cH + params.pNum);
      ctx.strokeStyle = params.sColor;
      ctx.lineWidth = params.lWidth;
      ctx.fillStyle = params.c;
      if (params.isClosed) {
        ctx.closePath();
      }
      ctx.stroke();
      ctx.fill();
    },
  });
  $.jCanvas.extend({
    name: 'crobS',
    props: {
      num0: 0,
      num1: cW / 2 - 2,
      num3: cH - 2,
      num4: 0,
    },
    fn: function (ctx, params) {
      ctx.beginPath();
      ctx.moveTo(params.num0, 0);
      ctx.lineTo(params.num1, 0);
      ctx.lineTo(params.num4, params.num3);
      ctx.fillStyle = '#000';
      ctx.closePath();
      ctx.fill();
    },
  });
  function linee(c, co) {
    return $canvas.createGradient({
      y1: cH / 1.5,
      x1: 0,
      y2: cH,
      x2: 0,
      c1: c,
      c2: co,
    });
  }
  function drawPolygons() {
    $canvas
      .drawThePolygon({
        isClosed: false,
        sColor: $canvas.createGradient({
          x1: 0,
          y1: cH / 2,
          x2: 0,
          y2: cH,
          c1: mColor,
          c2: 'transparent',
        }),
        c: $canvas.createGradient({
          x1: cW / 2,
          y1: cH * 1.9,
          x2: cW / 2,
          y2: cH * 2.2,
          r1: cW,
          r2: cH * 1.3,
          c1: '#000',
          c2: mColor,
          c3: '#fff',
        }),
      })
      .drawThePolygon({
        height: cH / 3,
        width: cW / 2,
        isClosed: false,
        c: linee('#000', '#000'),
        sColor: linee('#000', mColor),
        lWidth: 3,
        pNum: 15,
      })
      .drawThePolygon({
        height: cH / 3,
        width: cW / 40,
        isClosed: false,
        sColor: linee('#000', mColor),
        lWidth: 2,
        pNum: 15,
      });
  }

  drawPolygons();
}

function Home_canvas() {
  useEffect(() => {
    draw_canvas();
    console.log('canvas re-drawed');
    return () => {
      $canvas.removeLayers();
    };
  }, [window.location]);
  return (
    <div id="center-S">
      <canvas id="canvas"></canvas>
    </div>
  );
}

export default memo(Home_canvas);
