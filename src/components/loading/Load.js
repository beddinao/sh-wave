import React, { memo, useEffect, useState } from 'react';
import set_scroll_snap , { dis_fun } from '../../lib/scroll-snap' ;
import './Load.css';

export function Loading(props) {
  var int , doot ;
  useEffect(() => {
    var dot = document.getElementById('dot');
    int = setInterval(() => {
      doot = document.createElement('span');
      doot.innerHTML = '.';
      dot.appendChild(doot);
    }, 1000);
    return () => {
      window.clearInterval(int);
    };
  }, []);
  return (
    <div className="center-f" style={{ height : '100' + props.ght }} >
      <h1 className="sp">
        <span>Loading</span>
        <span id="dot">
          <span>.</span>
        </span>
      </h1>
    </div>
  );
}

function Loading_scene(props) {
  const [is_loading, setIs_loading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, props.tm));
      setIs_loading(false);
    };
    loadData();
  }, []);
  useEffect(() => {
    if(!is_loading) {
      set_scroll_snap( document.body.parentNode , document.querySelectorAll('#center-S') )
    } ;
    return () => {
      dis_fun(document.body.parentNode)
    }
  })
  return (is_loading) ? <Loading ght='vh' /> : props.children
}

export default memo(Loading_scene);
