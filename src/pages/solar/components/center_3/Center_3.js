import React from 'react' ;
import './Center_3.css' ;

export function Center_3(props){
  return(
    <div id="center-S">
      <div id="p_Conn" data-inviewport="txt" >
        <div>
          <p>{props.txt}</p>
        </div>
      </div>
    </div>
  )
}