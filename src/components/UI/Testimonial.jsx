import React from 'react'
import '../../styles/testimonial.css'
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-cards"

import { EffectCards } from "swiper"
import avatar01 from "../../assets/img/avatar01.png"
import avatar02 from "../../assets/img/avatar02.png"

const Testimonial = () => {
  return (
      <section>
        <div className="container sliders">
          <h2 className="section__title"> Testimonial </h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar01} alt="" />

                  <h4>Pallavi Patil</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi molestiae ipsa. Natus, blanditiis? Sequi odio dicta cumque cum quidem.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-02">
                  <img src={avatar02} alt="" />

                  <h4>Pallavi Patil</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi molestiae ipsa. Natus, blanditiis? Sequi odio dicta cumque cum quidem.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img src={avatar01} alt="" />

                  <h4>Pallavi Patil</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium excepturi molestiae ipsa. Natus, blanditiis? Sequi odio dicta cumque cum quidem.</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    )
}

export default Testimonial