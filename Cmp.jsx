import React from 'react'

function Cmp (props){
    return( 
    <>
    <div className="card" >
    <img src={props.imgsrc} alt="" width='100%' height="400px" />
  <div className="card-body" >
  <span><h3>{props.title}</h3></span>
  <p className="title">{props.info}</p>
  <a href={props.link} target="blank"> <button>click me</button> </a>
   </div>
  </div>
  
  </>);
  }

export default Cmp;