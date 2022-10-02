import React , {memo} from 'react' ;
import img_g from '../images/stars.jpg' ;

var img_wr_a = {
  position: 'absolute' ,
  top : '100vh' ,
  left : '10vw' ,
  height : '160vh' ,
  width : '35vw' ,
  justifyContent: 'flex-start' ,
} ;
var img_wr_b = {
    position : 'sticky' ,
    top : '0%' ,
    height : '60vh' ,
    width : '35vw' ,
    borderBottom : '1px solid var(--main-color)',
    backgroundSize : 'cover' ,
    backgroundPosition : 'center'
}

function Wrapper(){
  return(
    <div style={ img_wr_a } >
      <div style={ Object.assign(img_wr_b , {backgroundImage : img_g} )  } ></div>
    </div>
  )
}


export default memo(Wrapper);
