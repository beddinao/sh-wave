import React , {memo , useEffect} from 'react' ;
import './Menu.css' ;
import {Menu_btn} from '../menu_btn/Menu_btn' ;
import { Link } from 'react-router-dom' ;

function Menu_conte(props){
  useEffect(()=>{
    $('body').css('overflow','hidden')
    
    return()=>{
      $('body').css('overflow','visible')
    }
  },[])
  return (
    <div className='menu_conta' >
      <div>
        <Menu_btn click={props.click} class='menu_bttn' />
      </div>
      <div>
        <div>
          <Link to='/'><h1 className='arc_h2' >home</h1></Link>
          <Link to='/solar-system'><h1 className='arc_h2' >Solar System</h1></Link>
          <Link to='/milky-way'><h1 className='arc_h2' >milky way</h1></Link>
          <Link to='/stars'><h1 className='arc_h2' >stars</h1></Link>
        </div>
        <div>
          <div>
            <h1>Solar System</h1>
          </div>
          <h2>Hover over Title to display Links</h2>
        </div>
      </div>
    </div>
  )
}


export default memo(Menu_conte)