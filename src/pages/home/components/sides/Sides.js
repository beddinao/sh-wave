import React, { useEffect, memo } from 'react';
import './Sides.css';
import { Link } from 'react-router-dom';

function Home_sides(props) {
  return (
    <div>
      <div className="side">
        <div className="side-container">
          <div>
            <h1 style={{color : props.co}} >
              <Link to={'https/nasa.gov/' + props.s_link} id="left-link">
                More
              </Link>
            </h1>
          </div>
        </div>
      </div>
      <div className="side">
        <div className="side-container">
          <div>
            <h1 style={{color : props.co}} >
              <Link to={props.s_link} id="right-link">
                More in here
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Home_sides);
