import React , {memo} from 'react' ;
import './Faits.css' ;


function Faits(){
  return(
    <div id="ScenterS">
        <div>
          <div id='center-S' >
            <p>
If the star is sufficiently massive, the collapsing core may become hot enough to support more exotic nuclear reactions that consume helium and produce a variety of heavier elements up to iron. However, such reactions offer only a temporary reprieve. Gradually, the star's internal nuclear fires become increasingly unstable - sometimes burning furiously, other times dying down. These variations cause the star to pulsate and throw off its outer layers, enshrouding itself in a cocoon of gas and dust. What happens next depends on the size of the core.</p>
          </div>

          <div id='center-S' >
            <div>
              <h1 className='wire_one' >White Dwarfs</h1>
            </div>
            <div>
              <div>
                <p>For average stars like the Sun. this dead, but still ferociously hot stellar cinder, are roughly the size of our Earth despite containing the mass of a star</p>
              </div>
              <div>
                <p>This fate awaits only those stars with a mass up to about 1.4 times the mass of our Sun. Above that mass, electron pressure cannot support the core against further collapse. Such stars suffer a different fate as described below.</p>
              </div>
            </div>
          </div>

          <div id='center-S' >
            <p> If a white dwarf is close enough to a companion star, its gravity may drag matter - mostly hydrogen - from the outer layers of that star onto itself causing the cycle to<span className='for_cl' > starts again </span>.  Sometimes, particularly massive white dwarfs may accrete so much mass in the manner that they collapse and explode completely</p>
          </div>

          <div id='center-S' >
            <p>Main sequence stars over <span className="for_cl">eight solar masses</span> are destined to die in a titanic explosion</p>
          </div>

          <div id='center-S' >
            <div>
              <h1 className='wire_one'>SuperNovae</h1>
              
            </div>
            <div>
              <div>
                <p> the <span className='for_cl'>largest explosion</span> that takes place in space. releasing an almost unimaginable amount of energy and producing all the naturally occurring elements and a rich array of subatomic particles</p>
              </div>
              <div>
                <p>A supernova burns for only a short period of time, but it can tell scientists a lot about the universe. One kind of supernova has shown scientists that we live in an expanding universe, one that is growing at an ever increasing rate.</p>
              </div>
            </div>
          </div>

          <div id='center-S' >
            <p>If the collapsing stellar core at the center of a supernova contains between about 1.4 and 3 solar masses, the collapse continues until electrons and protons combine to form neutrons</p>
          </div>

          <div id='center-S' >
            <div>
              <h1 className='wire_one'>Neutron Stars</h1>
              
            </div>
            <div>
              <div>
                <p>are incredibly dense - similar to the density of an atomic nucleus. Because it contains so much mass packed into such a small volume, the gravitation at the surface of a neutron star is immense</p>
              </div>
              <div>
                <p>they also have powerful magnetic fields which can accelerate atomic particles around its magnetic poles producing powerful beams of radiation that sweep around like massive searchlight as the star rotates, if such beams points towards Earth the neutron star is known as a<span className="for_cl"> Pulsar</span> </p>
              </div>
            </div>
          </div>

          <div id='center-S' >
            <p>If the collapsed stellar core is larger than three solar masses, it collapses completely</p>
          </div>


          <div id='center-S' >
            <div>
              <div>
                <h1 className='wire_one'>black holes</h1>
              </div>
            </div>
          </div>

          <div id='center-S' ></div>

          <div id='center-S' >
            <div>
              <p><span className='for_cl'>From the Remains, New Stars Arise</span>
              The dust and debris left behind by supernovae eventually blend with the surrounding interstellar gas and dust, enriching it with the heavy elements and chemical compounds produced during stellar death. Eventually, those materials are recycled, providing the building blocks for a new generation of stars and accompanying planetary systems </p>
            </div>
          </div>
        </div>
      </div>
  )
}


export default memo(Faits);
