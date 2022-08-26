import React , {memo} from 'react' ;
import './Up_btn.css' ;


function Up_btn(){
  return(
    <div id="to-up-btn" onClick={()=>{window.scrollTo(0,0)}} >
      <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' >
        <path d='M 20,70 L 50,30 ' />
        <path d='M 50,30 L 80,70 ' />
      </svg>
    </div>
  )
}

export default memo(Up_btn)