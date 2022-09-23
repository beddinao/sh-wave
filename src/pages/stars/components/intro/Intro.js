import React , {memo} from 'react' ;
import './Intro.css' ;

function Intro(){
  return(
    <div>
      <div className="intr" id='center-S'>
          <div>  </div>
          <div>
            <div>
              <p>Stars are the most widely recognized astronomical objects, and represent the most<span className="for-st" > fundamental building</span> blocks of galaxies. The age, distribution, and composition of the stars in a galaxy trace the history, dynamics, and evolution of that galaxy . </p>
            </div>
          </div>
        </div>
        <div className="intr" id='center-S'>
          <div></div>
          <div>
            <div>
              <h1>Formation</h1>
              <p>are born within the clouds of dust and scattered throughout most galaxies. A familiar example of such as a dust cloud is the Orion Nebula. Turbulence deep within these clouds gives rise to knots with sufficient mass that the gas and dust can begin to collapse under its own gravitational attraction. As the cloud collapses, the material at the center begins to heat up. Known as a<span className='for_cl' > protostar</span>, it is this hot core at the heart of the collapsing cloud that will one day become a star.</p>
            </div>
          </div>
        </div>
        <div className="intr" id='center-S'>
          <div>
            <div></div>
            <div>
              <h1>Red Dwarfs</h1>
              <p>The smallest stars. may contain as little as 10% the mass of the Sun and emit only<span className='for_cl'> 0.01%</span> as much energy, glowing feebly at temperatures between 3000-4000K. Despite their diminutive nature, red dwarfs are by far the most numerous stars in the Universe and have lifespans of tens of billions of years.  </p>
            </div>
          </div>
          <div>
            <div>
              <h1>Main Sequence</h1>
              <p>As shown in the <a href='http://chandra.harvard.edu/edu/formal/stellar_ev/story/index3.html' className='for-st' > Hertzsprung-Russell Diagram </a>, Main Sequence stars span a wide range of luminosities and colors, and can be classified according to those characteristics. </p>
            </div>
            <div>
              <h1>Hypergiants</h1>
              <p> the most massive stars. may be 100 or more times more massive than the Sun, and have surface temperatures of more than 30,000 K. Hypergiants emit<span className="for_cl"> hundreds of thousands </span>of times more energy than the Sun, but have lifetimes of only a few million years . </p>
            </div>
          </div>
        </div>
    </div>
  )
}


export default memo(Intro)
