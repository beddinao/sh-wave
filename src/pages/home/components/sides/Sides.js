import React, { useEffect, memo } from 'react';
import './Sides.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';

function Home_sides(props) {
  useEffect(() => {
    console.log('sides are updated');
  });
  return (
    <div>
      <div className="side">
        <div className="side-container">
          <div>
            <h1>
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
            <h1>
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
