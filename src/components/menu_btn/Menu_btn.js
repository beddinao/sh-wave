import React from 'react';
import { Link } from 'react-router-dom';
import './Menu_btn.css';

export function Menu_btn() {
  return (
    <Link to="/menu">
      <div className="menu-btn">
        <div className="menu-container">
          <hr />
          <hr />
          <hr />
        </div>
      </div>
    </Link>
  );
}
