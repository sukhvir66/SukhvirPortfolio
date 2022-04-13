import React from 'react'
import pic from './d8.jpeg'
const Home = () => {
  return (
    <div className='home  col-md-10 container   '>
      
        <div className='row container'>
        <div className='col-md-6 '>
        <h1 className='mt-4 an f2'>Hi!!! </h1>
        <h2 className='an ff'>I am Sukhvir Kaur</h2 >
    <h6 className='ant'> I am a web developer, seeking for an opurtunity to grow in the field of web development.
    Ready to experience the world of coding.</h6>

    <div className='home2 my-4'>
      
       
    </div>
    </div>
    <div className='col-md-6 '>
<img src={pic} className="im my-4 container">
</img>
   
    </div>
    </div>
    </div>
  )
}

export default Home