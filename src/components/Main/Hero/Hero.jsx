import React from 'react'
import Call from '../../../assets/images/Call.svg'
import Hero_pic from '../../../assets/images/Hero.png'
import "./Hero.scss"

const Hero = () => {
  return (
    <section className="hero" id='hero'>
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <h1>Quality cleaning for your home</h1>
            <p className='paraghraph'>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>

            <div className="hero-contacts">
              <div><button className='btn-primary'>Get a free quote</button></div>
              <div className="call">
                <img src={Call} alt="" />
                <div className="text_call">
                  <p>Call us now</p>
                  <span>(414) 567 - 2109</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <img src={Hero_pic} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero