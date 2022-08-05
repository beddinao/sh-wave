import React , {useState} from 'react';
import './Menu_btn.css';
import Menu_conte from '../menu/Menu' ;

export function Menu_btn(props) {
  return (
      <div onClick={props.click}  className={props.class}>
        <div className="menu-container">
          <hr />
          <hr />
          <hr />
        </div>
      </div>
  );
}

export function Menu(props){
  const [is_visible , setIs_visible] = useState(false) ;
  const handle_in = () =>{
    setIs_visible(true)
  }
  const handle_out = () =>{
    setIs_visible(false)
  }
  if(!is_visible){
    return <Menu_btn click={handle_in} class={props.class} />
  }
  else{
    return <Menu_conte click={handle_out} />
  }
}
