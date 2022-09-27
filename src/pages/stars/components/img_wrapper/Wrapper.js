import React , {memo} from 'react' ;
import './Wrapper.css' ;

function Wrapper(){
  return(
    <div className="img_wr_a_pper" style={{ position : "absolute" , top : "100vh" }} >
      <div></div>
    </div>
  )
}


export default memo(Wrapper);
