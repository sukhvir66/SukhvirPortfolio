import React from 'react'
import Skillcard from './Skillcard';


const Skills = () => {
  return (
    <div className='container skil  col-md-9 '>
        <div className='mtt '>
                       <h2 >Skills</h2>
            <hr className='hrr1' />

        </div>
<div className=' row   '>
     
<Skillcard Header="</> HTML "  cls="secondary" detail="Strong knowledge of HyperText Markup Language"/>
      <Skillcard Header="CSS" cls="dark" detail="Good Command over Styling of the web pages" />
      <Skillcard Header="PHP"  cls="secondary" detail="Mid level knowledge of PHP for backend functionalities" />
      <Skillcard Header="React JS"  cls="dark"  detail="Good Knowledge oF ReactJS for front End development" />
      <Skillcard Header="Javascript"  cls="secondary"  detail="Basic Knowledge of JavaScript for front end functionalities " />
      <Skillcard Header="Bootstrap"  cls="dark"  detail="Great command over Bootstrap to develop responsive design " />
    
      </div>
      </div>
  )
}

export default Skills