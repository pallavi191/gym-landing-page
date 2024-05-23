import React from 'react'
import trainerimg from '../../assets/img/trainer.png'
import '../../styles/start.css'
const Start = () => {
  return (
    <section id='classes'>
        <div className="container">
            <div className="start__wrapper">
                <div className="start__img">
                    <img src={trainerimg} alt="" 
                     data-aos="fade-left"
                     data-aos-duration="1500"/>
                </div>
                
                <div className="start__content"
                data-aos="fade-right"
                data-aos-duration="1500">
                    <h2 className='section__title'>Ready to make a <span className="highlights">change ?</span> </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio praesentium libero ad accusantium similique. Recusandae ad quia fugit. Voluptate a aspernatur ea labore perferendis ipsam nisi ipsum quod nostrum quam.</p>

                    <button className="register__btn">Get Started</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Start