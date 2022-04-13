import React from 'react'
import Cardwork from './Cardwork'
import web5 from './web1.jpg'
import web2 from './web2.jpg'

import web3 from './web3.jpg'
import web4 from './web4.jpg'


const Work = () => {
  return (
    <div className='container col-md-9 m-auto my-4  '> <div className='mtt '>
    <h2 >Projects/Work</h2>
<hr className='hrr1' />

</div>
<div className='row'>
<Cardwork pic={web5} title="PORTFOLIO" desc="This is a portfolio website to describe one's educational background , work experience and skills.This project is developed with the use of Html ,Css and bootstrap"/>
<Cardwork  pic={web2} title="TOURISM" desc="This project consist an front end design of tourism company to explore their business.Technologies used:HTML,CSS "/>
<Cardwork  pic={web3}  title="News Universe" desc="A news website providing the newses of deifferent categories to its user.This project is developed in ReactJS with the help of an API"/>
<Cardwork  pic={web4} title="Construction Company" desc=" A website to help a construction company to grow its business through internet.Technologies:HTML,Bootstrap, PHP"/>
    </div>
    </div>
  )
}

export default Work