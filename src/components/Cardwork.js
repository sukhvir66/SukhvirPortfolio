import React from 'react'

const Cardwork = (props) => {
  return (
   
        <div className='col-md-6  my-2 '>
<div class="card mb-3" className='bck my-4 mx-2' style={{maxWidth: "500px;"}}>
  <div class="mb-md-0 p-md-3  g-0">
 
      <img src={props.pic} class="card-img-top  wimg" alt="..."/>
    <hr/>
    
      <div class="card-body">
       
        <p class="an">{props.title}: {props.desc}.</p>
        
      </div>
    </div>
  </div>
</div>

    
  )
}

export default Cardwork