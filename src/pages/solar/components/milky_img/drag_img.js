import React , {memo , useEffect} from 'react' ;
import './drag_img.css' ;

let zoom = 1 ;
let speed = 0.08 ;
var elmnt ;
var pos1 = 0 , pos2 = 0 , pos3 = 0 , pos4 = 0 ;

function Milky_way_img(props){
  function handle_wheel(e){
    if(e.deltaY > 0){
      if(zoom <= 1){
        set_size('auto','auto') ;
        zoom = 1 ;
      }else{
        zoom -= speed
      }
    }else{
      (zoom >= 4) ? zoom = 4 : zoom += speed
    }
    $(e.currentTarget).css('transform',`scale(${zoom})`)
  }
  const handle_hover = () =>{
    $('body').css('overflow','hidden')
  }
  const handle_out = () =>{
    $('body').css('overflow','visible')
  }
  function handle_down(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = handle_close;
    document.onmousemove = handle_move;  
  }
  function handle_move(e) {
    e = e || window.event;
    e.preventDefault();
    if(zoom > 1.5){
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      set_size((elmnt.offsetTop - pos2) + "px",(elmnt.offsetLeft - pos1) + "px" )
    }
  }
  function handle_close() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
  function set_size(top,left){
    elmnt.style.top = top ;
    elmnt.style.left = left ;
  }
  useEffect(()=>{
    elmnt = document.getElementById('target') ;
    return() =>{
      set_size('auto','auto') ;
      handle_close()
    }
  },[])
  return(
    <div id='center-S'>
      <div 
        id='target'
        onWheel={handle_wheel} 
        onMouseEnter={handle_hover} 
        onMouseLeave={handle_out} 
        onMouseDown={handle_down}
      >
        <img src={props.img}></img>
      </div>
      <div className='guide_icon'></div>
    </div>
  )
}


export default memo(Milky_way_img)