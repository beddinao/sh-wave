import React from 'react';
import { Link } from 'react-router-dom';
import './Menu_btn.css';

export function Menu_btn(props) {
  return (
    <Link to="/menu">
      <div className={props.class}>
        <div className="menu-container">
          <hr />
          <hr />
          <hr />
        </div>
      </div>
    </Link>
  );
}
