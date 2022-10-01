import React , {memo , useEffect} from 'react' ;

const intr_s = {
  flexDirection : "row" ,
  alignItems : "flex-start"
}
const intr_h1_s = {
  fontFamily : 'Megrim'
}
const inter_fd_s = {
  height : "60%" ,
  width : "40%" ,
  justifyContent : "flex-end" ,
  alignItems : "flex-start" ,
  gridGap : "5vh"
}
const inter_sd_s = {
  width : "80%" ,
  gridGap: "2vh" ,
  alignItems : "flex-start" ,
  justifyContent : "flex-start" ,
}

function Intro(){
  useEffect(()=>{
    $('.int_r_:nth-child(3) > div ').css('height','84%') ;
    $('.int_r_ > div:nth-child(2)').css('padding-left','5vw') ;
    $('.int_r_ > div > div:nth-child(2)').css('height','20v')
  })
  return(
    <div>
      <div id='center-S' className="int_r_" style={intr_s} >
          <div style={inter_fd_s} >  </div>
          <div style={inter_fd_s} >
            <div style={inter_sd_s} >
              <p>Stars are the most widely recognized astronomical objects, and represent the most<span className="for-st" > fundamental building</span> blocks of galaxies. The age, distribution, and composition of the stars in a galaxy trace the history, dynamics, and evolution of that galaxy . </p>
            </div>
          </div>
        </div>
        <div id='center-S' className="int_r_" style={intr_s} >
          <div style={inter_fd_s} ></div>
          <div style={inter_fd_s} >
            <div style={inter_sd_s} >
              <h1 style={intr_h1_s}>Formation</h1>
              <p>are born within the clouds of dust and scattered throughout most galaxies. A familiar example of such as a dust cloud is the Orion Nebula. Turbulence deep within these clouds gives rise to knots with sufficient mass that the gas and dust can begin to collapse under its own gravitational attraction. As the cloud collapses, the material at the center begins to heat up. Known as a<span className='for_cl' > protostar</span>, it is this hot core at the heart of the collapsing cloud that will one day become a star.</p>
            </div>
          </div>
        </div>
        <div  id='center-S' className="int_r_" style={intr_s} >
          <div style={inter_fd_s} >
            <div style={inter_sd_s} ></div>
            <div style={inter_sd_s} >
              <h1 style={intr_h1_s} >Red Dwarfs</h1>
              <p>The smallest stars. may contain as little as 10% the mass of the Sun and emit only<span className='for_cl'> 0.01%</span> as much energy, glowing feebly at temperatures between 3000-4000K. Despite their diminutive nature, red dwarfs are by far the most numerous stars in the Universe and have lifespans of tens of billions of years.  </p>
            </div>
          </div>
          <div style={inter_fd_s} >
            <div style={inter_sd_s} >
              <h1 style={intr_h1_s} >Main Sequence</h1>
              <p>As shown in the <a href='http://chandra.harvard.edu/edu/formal/stellar_ev/story/index3.html' className='for-st' > Hertzsprung-Russell Diagram </a>, Main Sequence stars span a wide range of luminosities and colors, and can be classified according to those characteristics. </p>
            </div>
            <div style={inter_sd_s} >
              <h1 style={intr_h1_s} >Hypergiants</h1>
              <p> the most massive stars. may be 100 or more times more massive than the Sun, and have surface temperatures of more than 30,000 K. Hypergiants emit<span className="for_cl"> hundreds of thousands </span>of times more energy than the Sun, but have lifetimes of only a few million years . </p>
            </div>
          </div>
        </div>
    </div>
  )
}


export default memo(Intro)
