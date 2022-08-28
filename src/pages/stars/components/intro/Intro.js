import React , {memo} from 'react' ;
import './Intro.css' ;

function Intro(){
  return(
    <div>
      <div className="intr" id='center-S'>
          <div>  </div>
          <div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenatur. </p>
            </div>
          </div>
        </div>
        <div className="intr" id='center-S'>
          <div></div>
          <div>
            <div>
              <h1>Formation</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do iam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  </p>
            </div>
          </div>
        </div>
        <div className="intr" id='center-S'>
          <div>
            <div></div>
            <div>
              <h1>Something</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </div>
          </div>
          <div>
            <div>
              <h1>Something</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </div>
            <div>
              <h1>Something</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nilla pariatur. </p>
            </div>
          </div>
        </div>
    </div>
  )
}


export default memo(Intro);