import React, { useEffect, memo , useState } from 'react';
import './Sides.css';
import { Link } from 'react-router-dom';

function Home_sides(props) {
  useEffect(()=>{
    console.log('sides are updated')
  })
  const [s_link , setS_link] = useState(
    [
      {
        link : '/solar-system' ,
        color : 'var(--background)'
      },
      {
        link : '/milky-way' ,
        color : 'var(--background)'
      },
      {
        link : '/stars' ,
        color : 'var(--main-color)'
      }
    ]
  )
  return (
    <div>
      <div className="side">
        <div className="side-container">
          <div>
            <h1 style={{ color : s_link[props.whi].color}} >
              <Link to={'https/nasa.gov/' + s_link[props.whi].link } id="left-link">
                More
              </Link>
            </h1>
          </div>
        </div>
      </div>
      <div className="side">
        <div className="side-container">
          <div>
            <h1 style={{ color : s_link[props.whi].color}} >
              <Link to={s_link[props.whi].link} id="right-link">
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
