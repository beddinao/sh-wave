import React from 'react' ;


function Center_1(){
  return (
    <div id="centerS" className="centerD" >
      <nav id="nave" >
        <div id="sLogo">
          <img id="cir" src={this.props.img} className={this.props.isHid} />
          <h1>{this.props.name}</h1>
        </div>
        <NavButton />
      </nav>
    </div>
  )
}