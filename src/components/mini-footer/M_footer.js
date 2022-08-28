import React , {memo} from 'react' ;
import Up_btn from '../up_btn/Up_btn' ;
import './M_footer.css' ;

function Mfooter(){
  return(
    <div className='foo' >
      <div >
        <Up_btn />
      </div>
      <p></p>
    </div>
  )
}

export default memo(Mfooter)
