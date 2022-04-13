import React from 'react'
import pc from './new.jpg'
const About = () => {
  return (
   < div  className='container ab col-md-8  '>
   <div className='col-md-6 m-auto'>
   <h4 className='an'>  </h4>
   </div>
<div className='row  ml-2 container marg'>

<div  className='col-md-4 m-auto'>
<img src={pc} height="200px" className='bor  p-1'></img>

</div>

<div className=' container an  my-4 ml-2'>
  <h6 className='text-center'>SUKHVIR KAUR</h6>
  <p className="pp my-2 container ">Experienced Assistant Professor with strong capability to work in the computer
     software industry. Skilled in SQL, Cascading Style Sheets (CSS), C, C++, and JavaScript,php,react. 
    Strong education professional with a Master of Technology (M.Tech.) 
    focused in Computer Science and Engineering from Lovely Professional University.</p>
</div>

    </div>
    </div>
  )
}

export default About