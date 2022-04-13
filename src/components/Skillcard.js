import React from 'react'

const Skillcard = (props) => {
  return (
    <div className='container col-md-3 my-4 mx-4 '>

       <div className='cd'><div className={`card text-white bg-${props.cls} mb-3`} style={{maxWidth: "18rem"}}>
    <div className="card-header text-center">{props.Header}</div>
    <div className="card-body">
      
      <p className="card-text">{props.detail}.</p>
    </div></div>
    </div></div> 
  )
}

export default Skillcard