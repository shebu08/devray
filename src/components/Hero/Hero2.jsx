import React from 'react'
import './hero.css';


const Hero2 = () => {
  return (
    <div className='mt-10'>
        <section>
        <ul className="carousel">
          <li className="items2 right-pos li2" id="1">
            <img src="https://prioritynetworks.ca/wp-content/uploads/2022/08/THE-Importance-of-computer-networking-2-scaled.jpg" />
          </li>
          <li className="items2 back-pos li2" id="2">
            <img src="https://www.bsimplify.com/wp-content/uploads/2018/08/wan-technologies-data-networking-680x380.jpg"/>
          </li>
          
          
          <li className="items2 back-pos li2" id="3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfxZqpE_vSO2lEa4vmKjviLh7IzY-GU4FRwA&usqp=CAU" />
          </li>
         
        </ul>
      <span classNameName='span2'>
        <input type="button" value="Prev" id="prev"/>
        <input type="button" value="Next" id="next"/>
      </span>
      </section>
    </div>
  )
}

export default Hero2