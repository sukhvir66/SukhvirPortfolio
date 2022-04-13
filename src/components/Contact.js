import React from 'react'
import pi from "./feed.jpeg"
export const Contact = () => {
 
    return (
        <div className='container col-md-9 cont'>
           <h3  className="an">Contact</h3>
           <hr className='hrr1' />
<div className='row'>
<div className='col-md-6 mx-4 my-4 mr-4 mb-4 '>

<h5  className="an mx-4 my-4 mr-4 mb-4 text-center"><i className="fa fa-envelope " ></i> GET IN TOUCH</h5>
<h6  className="an  text-center ">Leave a message to work in future.</h6>
</div>
<div className='  col-md-4 mx-4 my-4 mr-4 mb-4 text-center ccard'>
<h6 className='an my-4 mr-4 mb-4 ' style={{textAlign:"center"}}>Connect on Linkedin:</h6>
<a href='/'>
<i className="fa fa-linkedin my-1 mr-4 mb-4" style={{fontSize:"36px",color:"skyblue"}}></i> </a>

<h6 style={{textAlign:"center"}} className="an my-2 mr-4 mb-4 "> sukhvirkaur66@gmail.com</h6>
</div>
</div>
</div>

       
    )
}
export default Contact