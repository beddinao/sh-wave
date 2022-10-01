import React, { memo, useEffect } from 'react';

var sW, sH, hpP, sv_g;

const svg_con = {
  position: "absolute",
  height: "1100vh",
  top: '350vh',
  width:'30vw',
  left: '20vw',
  zIndex: '-1',
}
const s_vg_s = {
  height : "100%" ,
  width : "100%" ,
}

function draw_svg() {
  sv_g = document.getElementById('svg_2');
  var s_S = getComputedStyle(sv_g);
  sW = parseFloat(s_S.width) - 10;
  sH = parseFloat(s_S.height);
  hpP = sH / 11;

  draw_in();
}
function draw_in() {
  var path_1 = `M ${sW + `,` + hpP / 10} L ${sW + `,` + hpP / 4} C ${
    sW + `,` + hpP / 4 + ` ` + sW + `,` + hpP / 2 + ` ` + sW / 2 + `,` + hpP / 2
  } C ${
    sW / 2 +
    `,` +
    hpP / 2 +
    ` ` +
    10 +
    `,` +
    hpP / 2 +
    ` ` +
    10 +
    `,` +
    (hpP / 4) * 3
  } L ${10 + `,` + sH}`;
  var path_2 = `M ${sW / 4 + `,` + hpP * 2} L ${sW / 4 + `,` + hpP * 9}`;
  var path_3 = `M ${sW / 2 + `,` + hpP * 5} L ${sW / 2 + `,` + hpP * 7}`;

  let path_d_value = `${path_1} ${path_2} ${path_3}`;
  let path_html_element = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  $(path_html_element).css('stroke','var(--main-color)') ;
  $(path_html_element).css('stroke-width','1') ;
  path_html_element.setAttributeNS(null, 'd', path_d_value);
  sv_g.appendChild(path_html_element);

  console.log('d = ' + path_d_value);
}

function Svg() {
  useEffect(() => {
    draw_svg();
    return () => {
      $('#svg_2').attr('d', null);
    };
  }, []);
  return (
    <div className="svg_container" style={svg_con} >
      <svg
        id="svg_2"
        viewBox="0 0 30vw 1100vh"
        xmlns="http://www.w3.org/2000/svg"
        style={s_vg_s}
      ></svg>
    </div>
  );
}

export default memo(Svg);
