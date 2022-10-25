import React from 'react'

export default function Newsitem(props) {

  return (
    <>
      <div className="card " style={{ width: "24rem" }}>
      
        <img src={!props.imgurl?"dummy.png":props.imgurl} className="card-img-fluid-start" height={210} alt="..."  />
        <div className="card-body"> 
         <span  className="position-absolute  translate-middle badge rounded-pill bg-danger" style={{left:"75%",top:"-1%"}}>
        {props.date}
    <span className="visually-hidden">unread messages</span>
  </span>
  
          <h5 className="card-title text-success" style={{height:"75px",overflow:"hidden"}} >{props.title}</h5>
          <span className="badge mx-2 text-bg-warning">{props.source}</span>
          <p className="card-text my-1" style={{height: "75px",
    overflow: "hidden"}}>{props.dsc}</p>
          <span className="name">{props.name}</span>
          <a without="true" rel="noreferrer" href={props.url} target="_blank" className="btn btn-outline-dark ">Read More</a>
          
          
          
        </div>
      </div>

    </>
  )
}
