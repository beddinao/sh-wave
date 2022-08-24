import React , {memo , useEffect , useState} from 'react' ;
import './drag_img.css' ;
import { Loading } from '../../../../components/loading/Load' ;
import cursor_icon_1 from './img/zoom_icon.png' ;
import cursor_icon_2 from './img/grab_icon.png' ;
import milkyWay_img_a from './img/milky_way_a.jpg' ;
import milkyWay_img_b from './img/milky_way_b.jpg' ;

let zoom = 1 , speed = 0.07 , coun = 0;
var elmnt ;
var pos_1 = 0 ,
  pos_2 = 0 ,
  pos_3 = 0 ,
  pos_4 = 0 
;

function set_size(t, l) {
  elmnt.style.top = t ;
  elmnt.style.left = l
}
function handle_wheel(e) {
  if (e.deltaY > 0) {
    if (zoom <= 1) {
      set_size('auto', 'auto');
      zoom = 1
    } else {
      zoom -= speed
    }
  } else {
    zoom >= 4 ? (zoom = 4) : (zoom += speed);
  }
  $(e.currentTarget).css('transform', `scale(${zoom})`);
}

function handle_down(e) {
  e = e || window.event;
  e.preventDefault();
  pos_3 = e.clientX;
  pos_4 = e.clientY;
  document.onmouseup = handle_close;
  document.onmousemove = handle_move
}
function handle_move(e) {
  e = e || window.event;
  e.preventDefault();
  if (zoom > 1.1) {
    pos_1 = pos_3 - e.clientX;
    pos_2 = pos_4 - e.clientY;
    pos_3 = e.clientX;
    pos_4 = e.clientY;
    set_size(elmnt.offsetTop - pos_2 + 'px', elmnt.offsetLeft - pos_1 + 'px')
  }
}
function handle_close() {
  document.onmouseup = null;
  document.onmousemove = null
}

const i_s = [ { c : 'var(--main-color)' }, { c : 'var(--border)' } ] ;

function handle_click() {
  coun++ ;
  if (coun >= i_s.length) {
    coun = 0 
  }
  $('#cont_s').css('color',i_s[coun].c) ;
}

function Notice(props){
  const [ is_vis , set_is_vis ] = useState(true) ;
  return (is_vis) ? (
    <div className='notice'>
      <div>
          <h1>{props.children}</h1>
          <img src={props.img} />
      </div>
      <div>
          <button onClick={()=>{set_is_vis(false)}} >OK</button>
      </div>
    </div>
  ) : <div></div>
}

function Gal_notice(props){
  return(
    <div className='cont_con' >
      <div className='notice_container' >
        <Notice img={cursor_icon_1} >
          hover and scroll to zoom
        </Notice>
        <Notice img={cursor_icon_2} >
          grab and drag to navigate
        </Notice>
      </div>
      { props.children }
    </div>
  )
}

function Gal_img(props){
  const [is_loading, setIs_loading] = useState();
  useEffect(()=>{
    setIs_loading(true) ;
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 2500));
      setIs_loading(false);
    };
    loadData();
  },[props.con])
  return (is_loading) ? <Loading ght='%' /> : (props.con) ? <img src={milkyWay_img_b} /> : <img src={milkyWay_img_a} /> 
}

function Milky_way_img(){
  //
  const [ which_img , set_which_img] = useState(true) ;
  //
  useEffect(()=>{
    elmnt = document.getElementById('target_') ;
    return()=>{
      handle_close() ;
      set_size('auto','auto')
    }
  },[])
  return(
    <div id="center-S" className='gal_con' >
      <div
        id="target_"
        onWheel={handle_wheel}
        onMouseEnter={()=>{$('body').css('overflow', 'hidden')}}
        onMouseLeave={()=>{$('body').css('overflow', 'visible')}}
        onMouseDown={handle_down}
      >
        <Gal_img con={which_img} />
      </div>
      <Gal_notice>
        <button onClick={()=>{
          (which_img) ? set_which_img(false) : set_which_img(true) ;
          handle_click() ;
        }} id='cont_s'>orientations</button>
      </Gal_notice >
  </div>
  )
}

export default memo(Milky_way_img)