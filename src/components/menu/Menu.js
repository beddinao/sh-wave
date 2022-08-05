import React , {memo , useEffect} from 'react' ;
import './Menu.css' ;
import {Menu_btn} from '../menu_btn/Menu_btn' ;

function Menu_conte(props){
  useEffect(()=>{
    $('body').css('overflow','hidden')
    return()=>{
      $('body').css('overflow','visible')
    }
  },[])
  return (
    <div className='menu_conta' >
      <Menu_btn click={props.click} class='menu_bttn' />
      <h1>Menu___</h1>
    </div>
  )
}


export default memo(Menu_conte)